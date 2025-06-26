# 🖼️ Fix Profile Image Loading on GitHub Pages

## Problem
Your profile image is hosted on an external service (ibb.co) which may not load properly on GitHub Pages due to:
- CORS restrictions
- External service limitations
- SSL/HTTPS issues

## ✅ Solution: Add Image to Repository

### Step 1: Download Your Image
1. Go to your current image URL: https://i.ibb.co/99CQJHPB/nawlesh-new.jpg
2. Right-click and "Save image as..."
3. Save it as `profile.jpg` in the `images` folder I created

### Step 2: File Structure
Your repository should look like this:
```
Portfolio_2/
├── images/
│   └── profile.jpg          ← Your profile image here
├── index.html
├── script.js
├── style.css
└── other files...
```

### Step 3: Verify Image Path
The HTML is already updated to use: `./images/profile.jpg`

### Step 4: Alternative Image Sources
If you prefer, you can also use:

**Option A: GitHub Raw URL (after uploading)**
```html
<img src="https://raw.githubusercontent.com/Nawlesh034/portfolio-v2/main/images/profile.jpg">
```

**Option B: Unsplash Professional Photo (temporary)**
```html
<img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face">
```

**Option C: Gravatar (if you have one)**
```html
<img src="https://www.gravatar.com/avatar/YOUR_HASH?s=400&d=mp">
```

## 🚀 Quick Fix Commands

After adding your image to the `images` folder:

```bash
git add images/profile.jpg
git commit -m "Add profile image"
git push
```

## 🔧 Fallback Solution
I've added a fallback placeholder that will show your initials if the image fails to load:
```html
onerror="this.src='https://via.placeholder.com/400x400/2563eb/ffffff?text=NN'"
```

## 📱 Image Optimization Tips
For best performance:
- **Size**: 400x400px or 500x500px
- **Format**: JPG or WebP
- **File size**: Under 200KB
- **Quality**: 80-90%

## ✅ Testing
After uploading:
1. Test locally: `python -m http.server 8080`
2. Check GitHub Pages deployment
3. Verify image loads on different devices

## 🎯 Recommended Image Specs
- **Dimensions**: 400x400px (square)
- **Background**: Professional or clean
- **Lighting**: Good, even lighting
- **Expression**: Professional, friendly
- **Clothing**: Professional attire
- **Quality**: High resolution, sharp focus

## Alternative: Use GitHub as Image Host
1. Create a new repository called `assets`
2. Upload your image there
3. Use the raw GitHub URL in your portfolio

This ensures your image will always load reliably on GitHub Pages!
