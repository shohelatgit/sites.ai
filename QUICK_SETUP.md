# ⚡ Quick Setup Guide - Add Your First Demo in 2 Minutes

## Step 1️⃣: Place Your HTML File

**Location:** `public/demos/your-site-name/index.html`

```
C:\Users\shohe\acgclientportal\sites.ai\
└── public\
    └── demos\
        └── your-site-name\
            └── index.html
```

✅ **Works as-is** - CSS, JavaScript, images all included in HTML or in same folder

---

## Step 2️⃣: Update Product List

**File:** `app/data/products.json`

Add this entry:

```json
{
  "id": 4,
  "title": "My Awesome Website",
  "category": "Your Category",
  "price": 49,
  "description": "What this website does",
  "screenshot": "https://images.unsplash.com/photo-1234567890?w=400&h=300&fit=crop",
  "demoUrl": "/demos/your-site-name/index.html",
  "features": [
    "Feature 1",
    "Feature 2",
    "Feature 3",
    "Feature 4"
  ]
}
```

---

## Step 3️⃣: Start Server

```powershell
cd C:\Users\shohe\acgclientportal\sites.ai
npm run dev
```

Visit: **http://localhost:3000**

---

## 🎨 Where to Find Good Screenshots

Free stock images:
- **Unsplash**: https://unsplash.com (copy any image URL)
- **Pexels**: https://pexels.com
- **Pixabay**: https://pixabay.com

Example URL:
```
https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop
```

---

## 📋 Product.json Field Guide

| Field | Example | Notes |
|-------|---------|-------|
| `id` | `4` | Unique number, increment for each product |
| `title` | `"My Site"` | Website name shown on card |
| `category` | `"Startup"` | Any category you want |
| `price` | `49` | Any price number |
| `description` | `"Beautiful site"` | 1-2 sentences |
| `screenshot` | `"https://..."` | Image URL or path |
| `demoUrl` | `"/demos/my-site/index.html"` | Must match your folder |
| `features` | `["Fast", ...]` | Array of features |

---

## ✅ Checklist

- [ ] Created folder: `public/demos/your-folder/`
- [ ] Placed `index.html` in that folder
- [ ] Added entry to `app/data/products.json`
- [ ] Checked `demoUrl` matches folder name exactly
- [ ] Saved `products.json`
- [ ] Ran `npm run dev`
- [ ] Visited `http://localhost:3000`
- [ ] Clicked "View Demo" to test

---

## 🐛 Not Working? Check This

**Problem**: Demo doesn't show on marketplace
- ❌ Did you save `products.json`?
- ❌ Is `id` unique?
- ❌ Does `demoUrl` match your folder path exactly?
- ❌ Did you hard refresh? (`Ctrl + Shift + R`)

**Problem**: Demo opens but shows blank/white page
- ❌ Is file named `index.html`? (case-sensitive)
- ❌ Is it in correct folder path?
- ❌ Check browser console for errors (`F12`)

**Problem**: Images/CSS not showing in preview
- ❌ Use relative paths: `<img src="image.jpg">` (not `/image.jpg`)
- ❌ Place images in same folder as HTML

---

## 🚀 Done!

Your website is now live on the marketplace!

Users can:
- 👀 See beautiful preview cards
- 📱 View on desktop/tablet/mobile
- 🔗 Open in fullscreen
- 💳 See your price

---

## Next Steps

1. **Add more websites** - repeat this process
2. **Customize colors** - edit `app/page.tsx`
3. **Change prices** - edit `products.json`
4. **Add more features** - edit `app/components/`

---

**Questions?** Check `DEMO_MARKETPLACE.md` for full documentation.
