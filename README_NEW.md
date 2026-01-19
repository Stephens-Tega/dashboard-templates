# Dashboard Templates

A modern, production-ready dashboard template built with Next.js 16, React 19, and TypeScript. Features include authentication, data visualization, user management, and more.

![Dashboard](https://img.shields.io/badge/Status-Production%20Ready-green)
![License](https://img.shields.io/badge/License-MIT-blue)

## Features

- 🎨 **Modern UI** - Built with TailwindCSS and shadcn/ui components
- 🔐 **Secure Authentication** - Clerk integration for enterprise-grade auth
- 📊 **Data Visualization** - Interactive charts with Recharts
- 👥 **User Management** - Complete user management system
- 🌙 **Dark Mode** - Full dark mode support
- 📱 **Responsive Design** - Mobile-first approach
- ⚡ **High Performance** - Next.js 16 with App Router
- 🗄️ **Database** - Drizzle ORM with PostgreSQL support
- 🎯 **TypeScript** - Full TypeScript support

## Tech Stack

- **Framework**: Next.js 16.1.3
- **UI Library**: React 19.2.3
- **Styling**: TailwindCSS 4
- **Components**: shadcn/ui
- **Authentication**: Clerk
- **Charts**: Recharts 3.6.0
- **Database**: Drizzle ORM + PostgreSQL (Neon)
- **Icons**: Lucide React
- **Language**: TypeScript

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn package manager
- A Clerk account (free at [clerk.com](https://clerk.com))
- A PostgreSQL database (optional, for data storage)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd dashboard-templates
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example.txt .env.local
   ```
   
   Fill in your Clerk credentials and database URL in `.env.local`:
   ```
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_key
   CLERK_SECRET_KEY=your_secret
   DATABASE_URL=your_database_url
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Home/landing page
│   ├── auth/                   # Authentication pages
│   │   ├── sign-in/
│   │   └── sign-up/
│   ├── dashboard/              # Dashboard pages
│   │   ├── layout.tsx          # Dashboard layout with sidebar
│   │   ├── page.tsx            # Main dashboard
│   │   ├── analytics/          # Analytics page
│   │   ├── users/              # Users management
│   │   └── settings/           # Settings page
│   ├── api/                    # API routes
│   │   └── auth/               # Auth endpoints
│   └── globals.css
├── components/
│   ├── dashboard/              # Dashboard components
│   │   ├── header.tsx          # Top navigation
│   │   ├── sidebar.tsx         # Side navigation
│   │   ├── user-menu.tsx       # User dropdown menu
│   │   ├── charts.tsx          # Chart components
│   │   └── stats-overview.tsx  # Stats cards
│   └── ui/                     # Reusable UI components
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       ├── avatar.tsx
│       ├── badge.tsx
│       ├── dropdown-menu.tsx
│       └── ...
├── lib/
│   ├── utils.ts                # Utility functions
│   └── auth/                   # Auth utilities
├── hooks/
│   └── use-mobile.ts
├── db/
│   ├── index.ts                # Database client
│   └── schema.ts               # Database schema
└── middleware.ts               # Next.js middleware

public/                          # Static files
```

## Key Pages

### Home Page (`/`)
Landing page showcasing the dashboard features with call-to-action buttons.

### Dashboard (`/dashboard`)
Main dashboard view with stats overview and charts showing:
- Total users
- Revenue metrics
- Active sessions
- Transaction data

### Analytics (`/dashboard/analytics`)
Detailed analytics with:
- Visit trends
- Device distribution
- Session metrics
- Bounce rate

### Users (`/dashboard/users`)
User management page with:
- User list with search
- Status indicators
- Join dates
- User avatars

### Settings (`/dashboard/settings`)
User settings with:
- Profile information
- Notification preferences
- Appearance settings
- Danger zone actions

## Available Scripts

```bash
# Development server (hot reload)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint

# Database commands
npm run db:push     # Push schema to database
npm run db:generate # Generate migrations
```

## Authentication Setup

### Clerk Configuration

1. Sign up at [clerk.com](https://clerk.com)
2. Create a new application
3. Get your API keys from the Clerk dashboard
4. Add keys to `.env.local`:
   ```
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_...
   CLERK_SECRET_KEY=sk_...
   ```

### Protected Routes

Dashboard routes are protected by Clerk middleware. Unauthenticated users are redirected to the sign-in page.

## Database Setup

### PostgreSQL with Neon

1. Create a free account at [neon.tech](https://neon.tech)
2. Create a new PostgreSQL database
3. Get your connection string
4. Add to `.env.local`:
   ```
   DATABASE_URL=postgresql://...
   ```

### Run Migrations

```bash
npm run db:push
```

## Components

The project uses shadcn/ui components which are fully customizable. Key components include:

- `Button` - Flexible button component with variants
- `Card` - Container component
- `Input` - Text input field
- `Avatar` - User avatar display
- `Badge` - Status indicators
- `DropdownMenu` - User menu
- `Sidebar` - Navigation sidebar
- `Tooltip` - Helpful tooltips

## Customization

### Theming

Edit `src/app/globals.css` to customize colors and fonts:

```css
@theme {
  --color-primary: #3b82f6;
  --color-secondary: #8b5cf6;
  /* ... */
}
```

### Adding New Pages

1. Create new folder under `src/app/dashboard/`
2. Add `page.tsx` with your content
3. Update sidebar navigation in `src/components/dashboard/sidebar.tsx`

### Adding New Components

Place reusable components in `src/components/ui/` and use them across pages.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy with a single click

### Other Platforms

The project can be deployed to any Node.js hosting platform:
- Railway
- Render
- AWS Amplify
- Google Cloud Run
- etc.

## Performance

- **Optimized Images** - Next.js image optimization
- **Code Splitting** - Automatic route-based code splitting
- **CSS Optimization** - Tailwind CSS purging
- **React Compiler** - Babel React Compiler enabled

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - see LICENSE file for details

## Support

For support, open an issue on GitHub or contact the maintainers.

## Roadmap

- [ ] API route examples
- [ ] Webhook integration
- [ ] Email notifications
- [ ] Export functionality
- [ ] Advanced filtering
- [ ] Real-time updates
- [ ] Mobile app

## Changelog

### v0.1.0
- Initial release
- Dashboard with statistics
- User management
- Analytics page
- Settings page
- Dark mode support

---

Built with ❤️ for developers who want to ship fast.
