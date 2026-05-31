# 🏪 Demo Marketplace System

A clean, beginner-friendly Next.js + Tailwind marketplace for showcasing HTML website demos with responsive preview modes.

---

## 📁 Folder Structure

```
sites.ai/
├── public/
│   └── demos/                          # Your demo websites go here
│       ├── saas-landing/
│       │   └── index.html             # SaaS demo
│       ├── portfolio/
│       │   └── index.html             # Portfolio demo
│       ├── ecommerce/
│       │   └── index.html             # E-Commerce demo
│       └── (add more here)
│
├── app/
│   ├── page.tsx                       # Main marketplace page
│   ├── layout.tsx                     # App layout
│   ├── globals.css                    # Global styles
│   └── components/
│       ├── ProductCard.tsx            # Product card component
│       └── DemoModal.tsx              # Demo preview modal
│
├── app/data/
│   └── products.json                  # Product metadata

```

---

## 🚀 Quick Start

### 1. **Pull Latest Changes**
```powershell
cd C:\Users\shohe\acgclientportal\sites.ai
git pull origin claude/lucid-ride-eSDNN
npm install
```

### 2. **Start Development Server**
```powershell
npm run dev
```

Then visit: **http://localhost:3000**

---

## 📝 How to Add Your Own Demo Sites

### Step 1: Create a Folder
Create a new folder in `public/demos/` for each website:

```
public/demos/
├── your-site-name/
│   ├── index.html
│   ├── style.css       (optional - can be in HTML)
│   ├── script.js       (optional - can be in HTML)
│   └── images/         (optional - any images)
```

### Step 2: Add Your HTML Files
Place your complete HTML file(s) in the folder. They work exactly as-is:
- All CSS can be inline or external (relative paths work)
- JavaScript works fine
- Images load from relative paths

**Example `index.html`:**
```html
<!DOCTYPE html>
<html>
<head>
    <title>My Site</title>
    <style>
        body { background: white; }
    </style>
</head>
<body>
    <h1>Hello World</h1>
    <script>
        console.log('Works great!');
    </script>
</body>
</html>
```

### Step 3: Update `app/data/products.json`

Add your product metadata:

```json
[
  {
    "id": 1,
    "title": "My Amazing Website",
    "category": "Portfolio",
    "price": 49,
    "description": "Beautiful portfolio for creatives",
    "screenshot": "https://images.unsplash.com/...",
    "demoUrl": "/demos/your-site-name/index.html",
    "features": [
      "Responsive Design",
      "Contact Form",
      "Gallery",
      "Dark Mode"
    ]
  }
]
```

**Field Explanations:**
- `id` - Unique number
- `title` - Website name (shown on card)
- `category` - Type (SaaS, Portfolio, E-Commerce, etc.)
- `price` - Sale price (any number)
- `description` - Short description
- `screenshot` - Preview image (use Unsplash or your own URL)
- `demoUrl` - Path to your HTML file in `public/demos/`
- `features` - Array of key features (first 2 shown on card)

That's it! Your website appears on the marketplace.

---

## 🎨 Component Reference

### **ProductCard.tsx**
Displays website preview on marketplace grid.

```tsx
<ProductCard
  id={1}
  title="My Website"
  category="Portfolio"
  price={49}
  description="Beautiful portfolio"
  screenshot="..."
  features={["Responsive", "Fast"]}
  onViewDemo={() => openModal()}
/>
```

**Props:**
- `id` - Unique identifier
- `title` - Website name
- `category` - Category tag
- `price` - Price display
- `description` - Short description
- `screenshot` - Thumbnail image
- `features` - Array of features
- `onViewDemo` - Callback when "View Demo" clicked

---

### **DemoModal.tsx**
Full-screen preview modal with device size options.

**Features:**
- 📱 Mobile preview (375px)
- 📱 Tablet preview (768px)
- 💻 Desktop preview (100%)
- 🔗 "Open Full Demo" button
- ✕ Close button
- Full iframe sandbox support (allows scripts, forms, etc.)

**Usage:**
```tsx
<DemoModal
  isOpen={true}
  demoUrl="/demos/my-site/index.html"
  title="My Website"
  onClose={() => closeModal()}
/>
```

---

## 📄 products.json Structure

```json
[
  {
    "id": 1,                                    // Unique number
    "title": "Website Name",                    // Shown on card
    "category": "SaaS",                         // Category tag
    "price": 49,                                // Price to display
    "description": "Short description",         // 1-2 sentence summary
    "screenshot": "https://example.com/img.jpg", // Thumbnail URL
    "demoUrl": "/demos/folder-name/index.html", // Path to your HTML
    "features": [                               // Feature list
      "Responsive Design",
      "Fast Loading",
      "Mobile Optimized",
      "Dark Mode"
    ]
  }
]
```

---

## ✨ Preview Modes Explained

When users click "View Demo", they see:

1. **Mobile Preview (📱)**
   - Width: 375px
   - Height: 667px
   - Device frame style
   - Perfect for testing mobile layouts

2. **Tablet Preview (📱)**
   - Width: 768px
   - Height: 1024px
   - Device frame style
   - Test tablet responsiveness

3. **Desktop Preview (💻)**
   - Full width and height
   - No device frame
   - See your site as intended

4. **Open Full Demo (🔗)**
   - Opens in new tab
   - No iframe restrictions
   - Full screen experience

---

## 🛠️ Customization

### Change Marketplace Colors
Edit `app/page.tsx` and search for color classes:
```tsx
bg-purple-600  // Change to bg-blue-600, bg-red-600, etc.
text-purple-600
```

### Adjust Card Layout
Edit `app/page.tsx`:
```tsx
// Change grid columns
grid-cols-1 md:grid-cols-2 lg:grid-cols-3  // 3 columns per row
grid-cols-1 md:grid-cols-2 lg:grid-cols-4  // 4 columns per row
```

### Update Header
Edit `app/page.tsx`:
```tsx
<h1 className="text-3xl font-bold text-gray-900">Your Marketplace Title</h1>
<p className="text-gray-600 mt-2">Your subtitle here</p>
```

---

## 🎯 Common Tasks

### **Add a New Demo Website**
1. Create folder: `public/demos/my-site/`
2. Add `index.html` to folder
3. Add entry to `app/data/products.json`
4. Reload browser - it appears!

### **Change a Product Price**
Edit `app/data/products.json` and change the `price` value. No code rebuild needed!

### **Update Product Screenshot**
1. Find a preview image on Unsplash: https://unsplash.com
2. Use the URL in `screenshot` field
3. Or upload your own image to `public/screenshots/` and reference it

### **Reorder Products**
Change the `id` values in `products.json` (higher ID = appears later).

### **Hide a Product**
Remove its entry from `products.json` (or comment it out with `//`).

---

## 🚨 Troubleshooting

### **Demo won't load in iframe**
✓ Make sure HTML file is at correct path: `/demos/folder-name/index.html`
✓ Check file name is `index.html` (case-sensitive)
✓ Check `demoUrl` in products.json matches exactly

### **Images/CSS not showing in preview**
✓ Use relative paths in HTML: `<img src="image.jpg">` (not absolute)
✓ Place images in same folder or subfolder
✓ CSS can be inline (in `<style>` tag) or external file

### **JavaScript not working**
✓ JavaScript works! Check browser console for errors
✓ Test in "Open Full Demo" mode first
✓ Some browser APIs might be restricted in iframe

### **Changes not showing**
✓ Hard refresh browser: `Ctrl + Shift + R`
✓ Check you edited the right file
✓ Make sure file is saved
✓ Restart dev server: `npm run dev`

---

## 📦 What's Included

✅ 3 sample websites:
   - SaaS Landing Page
   - Creative Portfolio
   - E-Commerce Store

✅ Fully responsive marketplace
✅ Device preview modes (mobile/tablet/desktop)
✅ Clean, easy-to-read components
✅ No external API needed
✅ All CSS/JS included
✅ Production-ready

---

## 🎓 Learn More

- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **React Components**: https://react.dev

---

## 📝 File Descriptions

| File | Purpose |
|------|---------|
| `app/page.tsx` | Main marketplace listing page |
| `app/layout.tsx` | Root layout (shared by all pages) |
| `app/components/ProductCard.tsx` | Reusable product card component |
| `app/components/DemoModal.tsx` | Demo preview modal with device modes |
| `app/data/products.json` | Product metadata (titles, prices, etc.) |
| `public/demos/*/index.html` | Your HTML demo websites |
| `package.json` | Node dependencies and scripts |

---

## 🎉 You're Ready!

Your marketplace is ready to showcase demos. Just:
1. Add HTML files to `public/demos/`
2. Update `products.json`
3. Reload browser

That's it! No complex setup needed.

Happy selling! 🚀
