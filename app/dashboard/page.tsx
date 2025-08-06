import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Welcome!</CardTitle>
              <CardDescription>Manage your proposals and invoices</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">Start creating proposals and managing your freelance business.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Proposals</CardTitle>
              <CardDescription>Manage your proposals</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">0</p>
              <p className="text-sm text-gray-600">Total proposals</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Invoices</CardTitle>
              <CardDescription>Track your invoices</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">0</p>
              <p className="text-sm text-gray-600">Total invoices</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
