# SaalikDesigns - Professional Design Agency Website

A modern, responsive website for SaalikDesigns, a creative design agency based in Nepal. Built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Fully Responsive**: Optimized for all devices and screen sizes
- **Fast Performance**: Built with Next.js 14 for optimal speed
- **SEO Optimized**: Proper meta tags and structured data
- **Contact Form**: Functional contact form with validation
- **Portfolio Showcase**: Interactive portfolio with filtering
- **Service Pages**: Detailed service descriptions and pricing
- **About Section**: Company story, team, and values
- **Smooth Animations**: Framer Motion animations throughout

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: React Hook Form
- **Validation**: Zod

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd saalikdesigns
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
saalikdesigns/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── components/
│   ├── layout/
│   │   ├── Header.tsx       # Navigation header
│   │   └── Footer.tsx       # Site footer
│   ├── sections/
│   │   ├── Hero.tsx         # Hero section
│   │   ├── Services.tsx     # Services showcase
│   │   ├── Portfolio.tsx    # Portfolio gallery
│   │   ├── About.tsx        # About section
│   │   └── Contact.tsx      # Contact form
│   └── ui/
│       └── Button.tsx       # Reusable button component
├── lib/
│   └── utils.ts             # Utility functions
├── public/                  # Static assets
└── package.json
```

## 🎨 Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    50: '#f0f9ff',
    // ... other shades
  },
  secondary: {
    50: '#fdf4ff',
    // ... other shades
  }
}
```

### Content
Update the content in each component file:
- Company information in `Header.tsx` and `Footer.tsx`
- Services in `Services.tsx`
- Portfolio projects in `Portfolio.tsx`
- About content in `About.tsx`
- Contact information in `Contact.tsx`

### Images
Replace placeholder images with your actual project images:
- Add images to the `public/` directory
- Update image paths in components

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
- **Netlify**: Use `npm run build` and deploy the `out` directory
- **AWS Amplify**: Connect your repository
- **Traditional hosting**: Run `npm run build` and upload the `out` directory

## 📄 Pages & Sections

### Home Page (`/`)
- Hero section with call-to-action
- Services overview
- Portfolio showcase
- About section
- Contact form

### Navigation
- Smooth scrolling to sections
- Mobile-responsive menu
- Contact information in header

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Adding New Sections
1. Create a new component in `components/sections/`
2. Import and add to `app/page.tsx`
3. Add navigation link in `Header.tsx`

### Styling Guidelines
- Use Tailwind CSS classes
- Follow the established color scheme
- Maintain responsive design
- Use Framer Motion for animations

## 📞 Contact Information

Update the contact information in:
- `Header.tsx` - Phone and email in navigation
- `Contact.tsx` - Contact form and information
- `Footer.tsx` - Footer contact details

## 🎯 SEO Optimization

The website includes:
- Proper meta tags in `layout.tsx`
- Open Graph tags for social sharing
- Structured data for search engines
- Semantic HTML structure
- Fast loading times

## 🔒 Security

- Form validation with Zod
- Input sanitization
- HTTPS ready
- Secure headers

## 📈 Performance

- Optimized images
- Code splitting
- Lazy loading
- Minimal bundle size
- Fast page loads

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support or questions:
- Email: info@saalikdesigns.com
- Phone: +977-9841234567

---

**Built with ❤️ for SaalikDesigns** 