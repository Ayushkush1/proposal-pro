"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, Minus, FileText } from "lucide-react"

interface ProposalItem {
  id: string
  description: string
  quantity: number
  rate: number
  amount: number
}

interface ProposalFormProps {
  onDocumentCreate: (document: any) => void
  editingDocument?: any
}

export default function ProposalForm({ onDocumentCreate, editingDocument }: ProposalFormProps) {
  const [formData, setFormData] = useState({
    clientName: "",
    clientEmail: "",
    clientAddress: "",
    projectTitle: "",
    projectDescription: "",
    validUntil: "",
    paymentTerms: "Net 30",
    notes: "",
  })

  const [items, setItems] = useState<ProposalItem[]>([
    {
      id: "1",
      description: "",
      quantity: 1,
      rate: 0,
      amount: 0,
    },
  ])

  // Pre-populate form when editing
  useEffect(() => {
    if (editingDocument) {
      setFormData({
        clientName: editingDocument.clientName || "",
        clientEmail: editingDocument.clientEmail || "",
        clientAddress: editingDocument.clientAddress || "",
        projectTitle: editingDocument.projectTitle || "",
        projectDescription: editingDocument.projectDescription || "",
        validUntil: editingDocument.validUntil || "",
        paymentTerms: editingDocument.paymentTerms || "Net 30",
        notes: editingDocument.notes || "",
      })
      if (editingDocument.items) {
        setItems(editingDocument.items)
      }
    }
  }, [editingDocument])

  const addItem = () => {
    const newItem: ProposalItem = {
      id: Date.now().toString(),
      description: "",
      quantity: 1,
      rate: 0,
      amount: 0,
    }
    setItems([...items, newItem])
  }

  const removeItem = (id: string) => {
    if (items.length > 1) {
      setItems(items.filter((item) => item.id !== id))
    }
  }

  const updateItem = (id: string, field: keyof ProposalItem, value: string | number) => {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          const updatedItem = { ...item, [field]: value }
          if (field === "quantity" || field === "rate") {
            updatedItem.amount = updatedItem.quantity * updatedItem.rate
          }
          return updatedItem
        }
        return item
      }),
    )
  }

  const calculateTotal = () => {
    return items.reduce((total, item) => total + item.amount, 0)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const total = calculateTotal()
    const document = {
      type: "proposal",
      ...formData,
      items,
      total,
      createdAt: editingDocument?.createdAt || new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }
    onDocumentCreate(document)
  }

  return (
    <Card className="max-w-4xl mx-auto bg-white/60 backdrop-blur-sm border border-white/20 shadow-xl">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <FileText className="h-6 w-6 text-blue-600" />
          <span>{editingDocument ? "Edit Proposal" : "Create New Proposal"}</span>
        </CardTitle>
        <CardDescription>
          {editingDocument ? "Update your proposal details" : "Fill in the details to create a professional proposal"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Client Information */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Client Information</h3>
              <div>
                <Label htmlFor="clientName">Client Name *</Label>
                <Input
                  id="clientName"
                  value={formData.clientName}
                  onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                  required
                  className="bg-white border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                />
              </div>
              <div>
                <Label htmlFor="clientEmail">Client Email</Label>
                <Input
                  id="clientEmail"
                  type="email"
                  value={formData.clientEmail}
                  onChange={(e) => setFormData({ ...formData, clientEmail: e.target.value })}
                  className="bg-white border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                />
              </div>
              <div>
                <Label htmlFor="clientAddress">Client Address</Label>
                <Textarea
                  id="clientAddress"
                  value={formData.clientAddress}
                  onChange={(e) => setFormData({ ...formData, clientAddress: e.target.value })}
                  className="bg-white border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Project Details</h3>
              <div>
                <Label htmlFor="projectTitle">Project Title *</Label>
                <Input
                  id="projectTitle"
                  value={formData.projectTitle}
                  onChange={(e) => setFormData({ ...formData, projectTitle: e.target.value })}
                  required
                  className="bg-white border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                />
              </div>
              <div>
                <Label htmlFor="validUntil">Valid Until</Label>
                <Input
                  id="validUntil"
                  type="date"
                  value={formData.validUntil}
                  onChange={(e) => setFormData({ ...formData, validUntil: e.target.value })}
                  className="bg-white border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                />
              </div>
              <div>
                <Label htmlFor="paymentTerms">Payment Terms</Label>
                <Select
                  value={formData.paymentTerms}
                  onValueChange={(value) => setFormData({ ...formData, paymentTerms: value })}
                >
                  <SelectTrigger className="bg-white border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Due on receipt">Due on receipt</SelectItem>
                    <SelectItem value="Net 15">Net 15</SelectItem>
                    <SelectItem value="Net 30">Net 30</SelectItem>
                    <SelectItem value="Net 60">Net 60</SelectItem>
                    <SelectItem value="50% upfront, 50% on completion">50% upfront, 50% on completion</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Project Description */}
          <div>
            <Label htmlFor="projectDescription">Project Description *</Label>
            <Textarea
              id="projectDescription"
              value={formData.projectDescription}
              onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
              required
              rows={4}
              className="bg-white border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              placeholder="Describe the project scope, deliverables, and timeline..."
            />
          </div>

          {/* Line Items */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Project Items</h3>
              <Button type="button" onClick={addItem} size="sm" className="bg-blue-600 hover:bg-blue-700">
                <Plus className="h-4 w-4 mr-2" />
                Add Item
              </Button>
            </div>
            <div className="space-y-4">
              {items.map((item, index) => (
                <div key={item.id} className="grid grid-cols-12 gap-4 items-end p-4 bg-gray-50 rounded-lg">
                  <div className="col-span-5">
                    <Label>Description</Label>
                    <Input
                      value={item.description}
                      onChange={(e) => updateItem(item.id, "description", e.target.value)}
                      placeholder="Service or item description"
                      className="bg-white border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    />
                  </div>
                  <div className="col-span-2">
                    <Label>Quantity</Label>
                    <Input
                      type="number"
                      value={item.quantity}
                      onChange={(e) => updateItem(item.id, "quantity", Number.parseFloat(e.target.value) || 0)}
                      min="0"
                      step="0.01"
                      className="bg-white border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    />
                  </div>
                  <div className="col-span-2">
                    <Label>Rate ($)</Label>
                    <Input
                      type="number"
                      value={item.rate}
                      onChange={(e) => updateItem(item.id, "rate", Number.parseFloat(e.target.value) || 0)}
                      min="0"
                      step="0.01"
                      className="bg-white border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    />
                  </div>
                  <div className="col-span-2">
                    <Label>Amount ($)</Label>
                    <Input value={item.amount.toFixed(2)} readOnly className="bg-gray-100 border-gray-300" />
                  </div>
                  <div className="col-span-1">
                    <Button
                      type="button"
                      onClick={() => removeItem(item.id)}
                      size="sm"
                      variant="outline"
                      disabled={items.length === 1}
                      className="border-red-300 text-red-600 hover:bg-red-50"
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-end mt-4">
              <div className="text-right">
                <div className="text-lg font-semibold text-gray-900">Total: ${calculateTotal().toFixed(2)}</div>
              </div>
            </div>
          </div>

          {/* Notes */}
          <div>
            <Label htmlFor="notes">Additional Notes</Label>
            <Textarea
              id="notes"
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              rows={3}
              className="bg-white border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              placeholder="Any additional terms, conditions, or notes..."
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-end space-x-4">
            <Button
              type="submit"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 px-8"
            >
              {editingDocument ? "Update Proposal" : "Create Proposal"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
