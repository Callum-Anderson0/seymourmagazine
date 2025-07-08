# Seymour Magazine

**Live site:** [https://seymourmagazine.com](https://seymourmagazine.com)

---

A modern, responsive landing page and magazine site built with React, Tailwind CSS, Supabase, and Stripe. Features include user sign-up, payment integration, legal compliance, and automated deployment to GitHub Pages with a custom domain.

## Features

- **Modern responsive design** with Tailwind CSS
- **Animated UI** (fade-in effects)
- **User sign-up** form (Supabase backend)
- **Stripe payment integration**
- **Legal compliance**: Privacy, refund, shipping, and contact policies (UK/Stripe ready)
- **Social media integration**: Instagram link, Open Graph & Twitter Card meta tags
- **Optimized images** for fast loading
- **Automated deployment** to GitHub Pages with custom domain and CNAME
- **SEO and social sharing** ready

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/seymourmagazine.git
   cd seymourmagazine
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

### Development
Run the app locally:
```sh
npm start
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Testing
Run tests with:
```sh
npm test
```

### Build
Create a production build:
```sh
npm run build
```

### Deployment
Deploy to GitHub Pages and your custom domain with:
```sh
npm run deploy
```
- The `CNAME` file in `public/` ensures your custom domain is set automatically.

## Project Structure
- `src/` — React components and app logic
- `public/` — Static assets, icons, CNAME, and meta images
- `supabase/` — Supabase Edge Functions (backend logic)

## Customization
- **Images:** Replace images in `public/` as needed (e.g., `twitter cover.png`, `seym wallpaper web (1).webp`)
- **Legal:** Update policy text in `src/components/Legal.jsx`
- **Meta tags:** Edit `public/index.html` for Open Graph/Twitter/SEO

## Credits
- Built with [Create React App](https://github.com/facebook/create-react-app)
- UI: [Tailwind CSS](https://tailwindcss.com/)
- Backend: [Supabase](https://supabase.com/)
- Payments: [Stripe](https://stripe.com/)

## License
This project is for demonstration and freelance use. For commercial or template licensing, contact the author.
