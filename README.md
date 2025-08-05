# ProposalPro - Freelance Proposal Tool

A modern web application for freelancers and agencies to create professional proposals, manage invoices, and streamline their business operations.

## 🚀 Current Features

### Landing Pages
- **Homepage**: Professional landing page with hero section and feature highlights
- **About**: Company information and mission
- **Features**: Detailed feature breakdown
- **Pricing**: Pricing plans and packages
- **Contact**: Contact form and information
- **Blog**: Blog section for content marketing
- **Demo**: Interactive product demonstration
- **Help**: Support and documentation

### Authentication System
- **User Registration**: Secure signup with email verification
- **User Login**: Email/password authentication
- **Password Reset**: Forgot password functionality
- **Session Management**: Persistent user sessions
- **Protected Routes**: Secure access to dashboard areas

### Core Components
- **Proposal Form**: Create and edit business proposals
- **Invoice Form**: Generate professional invoices
- **Company Settings**: Manage business information and branding
- **Document Preview**: Preview proposals and invoices before sending

### Dashboard
- **User Dashboard**: Personal workspace for managing proposals and invoices
- **Statistics Overview**: Basic metrics and counters
- **Profile Management**: User account settings

## 🛠️ Tech Stack

- **Frontend**: Next.js 14 (App Router), React, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui components
- **Authentication**: Supabase Auth
- **Database**: Supabase (PostgreSQL)
- **Deployment**: Vercel-ready

## 📦 Installation

1. **Clone the repository**
   \`\`\`bash
   git clone <repository-url>
   cd proposal-pro
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Set up environment variables**
   \`\`\`bash
   cp .env.example .env.local
   \`\`\`
   Fill in your Supabase credentials in `.env.local`

4. **Run the development server**
   \`\`\`bash
   npm run dev
   \`\`\`

5. **Open your browser**
   Navigate to `http://localhost:3000`

## 🔧 Configuration

### Supabase Setup
1. Create a new Supabase project
2. Copy your project URL and anon key to `.env.local`
3. Set up authentication in your Supabase dashboard
4. Configure email templates for user verification

### Environment Variables
\`\`\`env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
\`\`\`

## 📁 Project Structure

\`\`\`
├── app/                    # Next.js app directory
│   ├── auth/              # Authentication pages
│   ├── dashboard/         # Protected dashboard area
│   ├── landing/           # Public landing pages
│   └── layout.tsx         # Root layout
├── components/            # Reusable components
│   ├── auth/             # Authentication components
│   └── ui/               # UI components (shadcn/ui)
├── lib/                  # Utility functions
└── public/               # Static assets
\`\`\`

## 🚦 Getting Started

1. Visit the homepage at `/`
2. Explore the landing pages to understand the features
3. Sign up for an account at `/auth/signup`
4. Access your dashboard at `/dashboard`
5. Start creating proposals and invoices

## 📄 License

This project is licensed under the MIT License.
