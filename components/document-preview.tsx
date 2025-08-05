"use client"

import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { X, Download, FileText, Receipt } from "lucide-react"
import html2canvas from "html2canvas"
import jsPDF from "jspdf"

interface DocumentPreviewProps {
  document: any
  onClose: () => void
}

export default function DocumentPreview({ document, onClose }: DocumentPreviewProps) {
  const contentRef = useRef<HTMLDivElement>(null)

  const generatePDF = async () => {
    if (!contentRef.current) return

    try {
      const canvas = await html2canvas(contentRef.current, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: "#ffffff",
      })

      const imgData = canvas.toDataURL("image/png")
      const pdf = new jsPDF("p", "mm", "a4")
      const imgWidth = 210
      const pageHeight = 295
      const imgHeight = (canvas.height * imgWidth) / canvas.width
      let heightLeft = imgHeight

      let position = 0

      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight)
      heightLeft -= pageHeight

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight
        pdf.addPage()
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight)
        heightLeft -= pageHeight
      }

      const fileName =
        document.type === "proposal"
          ? `proposal-${document.projectTitle?.replace(/\s+/g, "-").toLowerCase()}.pdf`
          : `invoice-${document.invoiceNumber}.pdf`

      pdf.save(fileName)
    } catch (error) {
      console.error("Error generating PDF:", error)
    }
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

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-4xl max-h-[90vh] overflow-hidden bg-white shadow-2xl">
        <div className="flex items-center justify-between p-6 border-b bg-gray-50">
          <div className="flex items-center space-x-3">
            {document.type === "proposal" ? (
              <FileText className="h-6 w-6 text-blue-600" />
            ) : (
              <Receipt className="h-6 w-6 text-emerald-600" />
            )}
            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                {document.type === "proposal" ? document.projectTitle : `Invoice ${document.invoiceNumber}`}
              </h2>
              <p className="text-sm text-gray-600">Client: {document.clientName}</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Badge className={`${getStatusColor(document.status || "draft")} border`}>
              {document.status || "draft"}
            </Badge>
            <Button onClick={generatePDF} className="bg-blue-600 hover:bg-blue-700">
              <Download className="h-4 w-4 mr-2" />
              Download PDF
            </Button>
            <Button onClick={onClose} variant="outline" size="sm">
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="overflow-auto max-h-[calc(90vh-120px)]">
          <div ref={contentRef} className="pdf-content bg-white p-8">
            {/* Header */}
            <div className="pdf-header mb-8">
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">
                    {document.type === "proposal" ? "PROPOSAL" : "INVOICE"}
                  </h1>
                  <div className="text-gray-600">
                    <p>Your Company Name</p>
                    <p>123 Business Street</p>
                    <p>City, State 12345</p>
                    <p>contact@yourcompany.com</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-gray-900 mb-2">
                    {document.type === "proposal" ? document.projectTitle : document.invoiceNumber}
                  </div>
                  <div className="text-gray-600">
                    <p>Date: {new Date(document.createdAt).toLocaleDateString()}</p>
                    {document.type === "invoice" && document.dueDate && (
                      <p>Due: {new Date(document.dueDate).toLocaleDateString()}</p>
                    )}
                    {document.type === "proposal" && document.validUntil && (
                      <p>Valid Until: {new Date(document.validUntil).toLocaleDateString()}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Client Information */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {document.type === "proposal" ? "Proposal For:" : "Bill To:"}
              </h3>
              <div className="text-gray-700">
                <p className="font-semibold">{document.clientName}</p>
                {document.clientEmail && <p>{document.clientEmail}</p>}
                {document.clientAddress && <div className="whitespace-pre-line">{document.clientAddress}</div>}
              </div>
            </div>

            {/* Project Description (for proposals) */}
            {document.type === "proposal" && document.projectDescription && (
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Project Description</h3>
                <div className="text-gray-700 whitespace-pre-line">{document.projectDescription}</div>
              </div>
            )}

            {/* Items Table */}
            {document.items && document.items.length > 0 && (
              <div className="mb-8">
                <table className="pdf-table w-full">
                  <thead>
                    <tr>
                      <th className="text-left">Description</th>
                      <th className="text-center">Qty</th>
                      <th className="text-right">Rate</th>
                      <th className="text-right">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {document.items.map((item: any, index: number) => (
                      <tr key={index}>
                        <td>{item.description}</td>
                        <td className="text-center">{item.quantity}</td>
                        <td className="text-right">${item.rate.toFixed(2)}</td>
                        <td className="text-right">${item.amount.toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div className="flex justify-end mt-4">
                  <div className="w-64">
                    {document.type === "invoice" && (
                      <>
                        <div className="flex justify-between py-2">
                          <span>Subtotal:</span>
                          <span>${document.subtotal?.toFixed(2) || "0.00"}</span>
                        </div>
                        <div className="flex justify-between py-2">
                          <span>Tax:</span>
                          <span>${document.tax?.toFixed(2) || "0.00"}</span>
                        </div>
                      </>
                    )}
                    <div className="flex justify-between py-2 border-t font-bold text-lg">
                      <span>Total:</span>
                      <span>${document.total?.toFixed(2) || "0.00"}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Payment Terms */}
            {document.paymentTerms && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Payment Terms</h3>
                <p className="text-gray-700">{document.paymentTerms}</p>
              </div>
            )}

            {/* Notes */}
            {document.notes && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Notes</h3>
                <div className="text-gray-700 whitespace-pre-line">{document.notes}</div>
              </div>
            )}

            {/* Footer */}
            <div className="pdf-footer mt-12 pt-6 border-t text-center text-gray-600">
              <p>Thank you for your business!</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
