"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { FileText, Receipt, Plus, Eye, Calendar, DollarSign, Edit, TrendingUp, Users, Clock } from "lucide-react"
import { format } from "date-fns"
import ProposalForm from "@/components/proposal-form"
import InvoiceForm from "@/components/invoice-form"
import CompanySettings from "@/components/company-settings"
import DocumentPreview from "@/components/document-preview"

interface Document {
  id: string
  type: "proposal" | "invoice"
  clientName: string
  projectTitle?: string
  invoiceNumber?: string
  total: number
  createdAt: string
  status?: "draft" | "sent" | "paid" | "pending"
  [key: string]: any
}

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("dashboard")
  const [currentDocument, setCurrentDocument] = useState<Document | null>(null)
  const [showPreview, setShowPreview] = useState(false)
  const [editingDocument, setEditingDocument] = useState<Document | null>(null)
  const [documents, setDocuments] = useState<Document[]>([
    {
      id: "1",
      type: "proposal",
      clientName: "ABC Corp",
      projectTitle: "Website Development Proposal",
      total: 5000,
      createdAt: new Date(Date.now() - 86400000).toISOString(),
      status: "sent",
    },
    {
      id: "2",
      type: "invoice",
      clientName: "XYZ Ltd",
      invoiceNumber: "INV-001",
      total: 2500,
      createdAt: new Date(Date.now() - 172800000).toISOString(),
      status: "paid",
    },
    {
      id: "3",
      type: "proposal",
      clientName: "Tech Startup",
      projectTitle: "Mobile App Development",
      total: 8000,
      createdAt: new Date(Date.now() - 259200000).toISOString(),
      status: "draft",
    },
  ])
  const [documentFilter, setDocumentFilter] = useState<"all" | "proposal" | "invoice">("all")

  const handleDocumentCreate = (document: any) => {
    if (editingDocument) {
      // Update existing document
      const updatedDocument: Document = {
        ...document,
        id: editingDocument.id,
        status: "draft",
      }
      setDocuments((prev) => prev.map((doc) => (doc.id === editingDocument.id ? updatedDocument : doc)))
      setCurrentDocument(updatedDocument)
      setEditingDocument(null)
    } else {
      // Create new document
      const newDocument: Document = {
        ...document,
        id: Date.now().toString(),
        status: "draft",
      }
      setDocuments((prev) => [newDocument, ...prev])
      setCurrentDocument(newDocument)
    }
    setShowPreview(true)
  }

  const handleViewDocument = (document: Document) => {
    setCurrentDocument(document)
    setShowPreview(true)
  }

  const handleEditDocument = (document: Document) => {
    setEditingDocument(document)
    setActiveTab(document.type)
  }

  const getFilteredDocuments = () => {
    if (documentFilter === "all") return documents
    return documents.filter((doc) => doc.type === documentFilter)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "paid":
        return "bg-emerald-100 text-emerald-700 border-emerald-200"
      case "sent":
        return "bg-blue-100 text-blue-700 border-blue-200"
      case "pending":
        return "bg-amber-100 text-amber-700 border-amber-200"
      case "draft":
        return "bg-slate-100 text-slate-700 border-slate-200"
      default:
        return "bg-slate-100 text-slate-700 border-slate-200"
    }
  }

  const totalProposals = documents.filter((doc) => doc.type === "proposal").length
  const totalInvoices = documents.filter((doc) => doc.type === "invoice").length
  const totalRevenue = documents.filter((doc) => doc.status === "paid").reduce((sum, doc) => sum + doc.total, 0)
  const pendingAmount = documents
    .filter((doc) => doc.status === "pending" || doc.status === "sent")
    .reduce((sum, doc) => sum + doc.total, 0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Premium Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl blur opacity-75"></div>
                <div className="relative bg-gradient-to-r from-blue-600 to-indigo-600 p-2 rounded-xl">
                  <FileText className="h-8 w-8 text-white" />
                </div>
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                  ProposalPro
                </h1>
                <p className="text-sm text-gray-500 font-medium">Professional Business Documents</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <div className="text-right">
                <div className="text-sm font-medium text-gray-900">${totalRevenue.toLocaleString()}</div>
                <div className="text-xs text-gray-500">Total Revenue</div>
              </div>
              <div className="w-px h-8 bg-gray-200"></div>
              <div className="text-right">
                <div className="text-sm font-medium text-gray-900">{documents.length}</div>
                <div className="text-xs text-gray-500">Documents</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <div className="flex justify-center">
            <TabsList className="grid w-full max-w-md grid-cols-4 bg-white/60 backdrop-blur-sm border border-white/20 shadow-lg">
              <TabsTrigger value="dashboard" className="data-[state=active]:bg-white data-[state=active]:shadow-md">
                Dashboard
              </TabsTrigger>
              <TabsTrigger value="proposal" className="data-[state=active]:bg-white data-[state=active]:shadow-md">
                Proposal
              </TabsTrigger>
              <TabsTrigger value="invoice" className="data-[state=active]:bg-white data-[state=active]:shadow-md">
                Invoice
              </TabsTrigger>
              <TabsTrigger value="settings" className="data-[state=active]:bg-white data-[state=active]:shadow-md">
                Settings
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="dashboard" className="space-y-8">
            {/* Premium Stats Cards */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card className="relative overflow-hidden bg-gradient-to-br from-blue-500 to-blue-600 border-0 text-white">
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10"></div>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-blue-100">Total Proposals</CardTitle>
                  <FileText className="h-5 w-5 text-blue-200" />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">{totalProposals}</div>
                  <p className="text-xs text-blue-200 flex items-center mt-1">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +12% from last month
                  </p>
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden bg-gradient-to-br from-emerald-500 to-emerald-600 border-0 text-white">
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10"></div>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-emerald-100">Total Invoices</CardTitle>
                  <Receipt className="h-5 w-5 text-emerald-200" />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">{totalInvoices}</div>
                  <p className="text-xs text-emerald-200 flex items-center mt-1">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +8% from last week
                  </p>
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden bg-gradient-to-br from-purple-500 to-purple-600 border-0 text-white">
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10"></div>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-purple-100">Revenue</CardTitle>
                  <DollarSign className="h-5 w-5 text-purple-200" />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">${totalRevenue.toLocaleString()}</div>
                  <p className="text-xs text-purple-200 flex items-center mt-1">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +15% from last month
                  </p>
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden bg-gradient-to-br from-amber-500 to-amber-600 border-0 text-white">
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10"></div>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-amber-100">Pending</CardTitle>
                  <Clock className="h-5 w-5 text-amber-200" />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">${pendingAmount.toLocaleString()}</div>
                  <p className="text-xs text-amber-200 flex items-center mt-1">
                    <Users className="h-3 w-3 mr-1" />3 clients waiting
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              {/* Quick Actions */}
              <Card className="lg:col-span-1 bg-white/60 backdrop-blur-sm border border-white/20 shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Quick Actions</span>
                  </CardTitle>
                  <CardDescription>Create new documents instantly</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button
                    onClick={() => {
                      setEditingDocument(null)
                      setActiveTab("proposal")
                    }}
                    className="w-full justify-start bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg"
                  >
                    <Plus className="mr-2 h-4 w-4" />
                    New Proposal/Quote
                  </Button>
                  <Button
                    onClick={() => {
                      setEditingDocument(null)
                      setActiveTab("invoice")
                    }}
                    variant="outline"
                    className="w-full justify-start border-2 hover:bg-gray-50"
                  >
                    <Plus className="mr-2 h-4 w-4" />
                    New Invoice
                  </Button>
                </CardContent>
              </Card>

              {/* Recent Documents */}
              <Card className="lg:col-span-2 bg-white/60 backdrop-blur-sm border border-white/20 shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span>Recent Documents</span>
                  </CardTitle>
                  <CardDescription>Your latest proposals and invoices</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {documents.slice(0, 4).map((doc) => (
                      <div
                        key={doc.id}
                        className="flex items-center justify-between p-4 bg-white/50 rounded-xl border border-white/30 hover:bg-white/70 transition-all duration-200"
                      >
                        <div className="flex items-center space-x-4">
                          <div
                            className={`p-2 rounded-lg ${doc.type === "proposal" ? "bg-blue-100" : "bg-emerald-100"}`}
                          >
                            {doc.type === "proposal" ? (
                              <FileText
                                className={`h-5 w-5 ${doc.type === "proposal" ? "text-blue-600" : "text-emerald-600"}`}
                              />
                            ) : (
                              <Receipt className="h-5 w-5 text-emerald-600" />
                            )}
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900">
                              {doc.type === "proposal" ? doc.projectTitle : `Invoice ${doc.invoiceNumber}`}
                            </p>
                            <p className="text-sm text-gray-600">
                              {doc.clientName} • ${doc.total.toLocaleString()}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Badge className={`${getStatusColor(doc.status || "draft")} border`}>{doc.status}</Badge>
                          <div className="flex space-x-1">
                            {doc.status === "draft" && (
                              <Button
                                size="sm"
                                variant="ghost"
                                onClick={() => handleEditDocument(doc)}
                                className="h-8 w-8 p-0"
                              >
                                <Edit className="h-4 w-4" />
                              </Button>
                            )}
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => handleViewDocument(doc)}
                              className="h-8 w-8 p-0"
                            >
                              <Eye className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* All Documents */}
            <Card className="bg-white/60 backdrop-blur-sm border border-white/20 shadow-xl">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span>All Documents</span>
                    </CardTitle>
                    <CardDescription>Manage all your proposals and invoices</CardDescription>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button
                      size="sm"
                      variant={documentFilter === "all" ? "default" : "outline"}
                      onClick={() => setDocumentFilter("all")}
                      className={documentFilter === "all" ? "bg-gradient-to-r from-blue-600 to-indigo-600" : ""}
                    >
                      All ({documents.length})
                    </Button>
                    <Button
                      size="sm"
                      variant={documentFilter === "proposal" ? "default" : "outline"}
                      onClick={() => setDocumentFilter("proposal")}
                      className={documentFilter === "proposal" ? "bg-gradient-to-r from-blue-600 to-indigo-600" : ""}
                    >
                      Proposals ({totalProposals})
                    </Button>
                    <Button
                      size="sm"
                      variant={documentFilter === "invoice" ? "default" : "outline"}
                      onClick={() => setDocumentFilter("invoice")}
                      className={documentFilter === "invoice" ? "bg-gradient-to-r from-blue-600 to-indigo-600" : ""}
                    >
                      Invoices ({totalInvoices})
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {getFilteredDocuments().length === 0 ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <FileText className="h-8 w-8 text-gray-400" />
                      </div>
                      <p className="text-gray-500 font-medium">
                        No {documentFilter === "all" ? "documents" : documentFilter + "s"} found
                      </p>
                      <p className="text-gray-400 text-sm mt-1">Create your first document to get started</p>
                    </div>
                  ) : (
                    getFilteredDocuments().map((doc) => (
                      <div
                        key={doc.id}
                        className="flex items-center justify-between p-6 bg-white/50 rounded-xl border border-white/30 hover:bg-white/70 transition-all duration-200 hover:shadow-md"
                      >
                        <div className="flex items-center space-x-4">
                          <div
                            className={`p-3 rounded-xl ${doc.type === "proposal" ? "bg-blue-100" : "bg-emerald-100"}`}
                          >
                            {doc.type === "proposal" ? (
                              <FileText className="h-6 w-6 text-blue-600" />
                            ) : (
                              <Receipt className="h-6 w-6 text-emerald-600" />
                            )}
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 text-lg">
                              {doc.type === "proposal" ? doc.projectTitle : `Invoice ${doc.invoiceNumber}`}
                            </h4>
                            <p className="text-gray-600">Client: {doc.clientName}</p>
                            <div className="flex items-center space-x-2 mt-1">
                              <Calendar className="h-4 w-4 text-gray-400" />
                              <span className="text-sm text-gray-500">
                                {format(new Date(doc.createdAt), 'M/d/yyyy')}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="text-right">
                            <div className="text-xl font-bold text-gray-900">${doc.total.toLocaleString()}</div>
                            <Badge className={`${getStatusColor(doc.status || "draft")} border mt-1`}>
                              {doc.status}
                            </Badge>
                          </div>
                          <div className="flex space-x-2">
                            {doc.status === "draft" && (
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => handleEditDocument(doc)}
                                className="hover:bg-blue-50"
                              >
                                <Edit className="h-4 w-4 mr-1" />
                                Edit
                              </Button>
                            )}
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleViewDocument(doc)}
                              className="hover:bg-gray-50"
                            >
                              <Eye className="h-4 w-4 mr-1" />
                              View
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="proposal">
            <ProposalForm onDocumentCreate={handleDocumentCreate} editingDocument={editingDocument} />
          </TabsContent>

          <TabsContent value="invoice">
            <InvoiceForm onDocumentCreate={handleDocumentCreate} editingDocument={editingDocument} />
          </TabsContent>

          <TabsContent value="settings">
            <CompanySettings />
          </TabsContent>
        </Tabs>

        {showPreview && currentDocument && (
          <DocumentPreview document={currentDocument} onClose={() => setShowPreview(false)} />
        )}
      </main>
    </div>
  )
}
