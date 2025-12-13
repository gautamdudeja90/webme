# Portfolio Pages Guide

This document lists all pages in your portfolio and identifies what needs to be updated.

## 📄 Page Structure Overview

Your portfolio has the following page types:
- **Main Pages**: Home, About/Info
- **Blog Pages**: Blog listing + individual blog posts
- **Project Pages**: Projects listing + individual project pages
- **Global Config**: Header, Footer, Theme settings

---

## 🏠 Main Pages

### 1. **Home Page** (`content/pages/index.md`)
**URL:** `/`  
**Status:** ✅ **UPDATED** (has your content)  
**What's there:**
- Hero section with your professional description ✅
- Featured Projects section (shows 3 projects) ✅
- Featured Posts section (shows 3 blog posts) ✅
- Contact form ✅

**Action needed:** Review and customize hero text if needed

---

### 2. **About/Info Page** (`content/pages/info.md`)
**URL:** `/info`  
**Status:** ✅ **UPDATED** (has your real experience)  
**What's there:**
- Hero section with your name and bio ✅
- Experience section (Apple, PayPal, Nielsen) ✅
- Education section (Georgia Tech, Auburn) ✅
- Skills labels ✅
- Contact form ✅
- Media gallery (company logos) ⚠️ **NEEDS UPDATE**

**Action needed:**
- Update company logos in MediaGallerySection (currently placeholder logos)
- Update social links section if needed
- Review all text for accuracy

---

## 📝 Blog Pages

### 3. **Blog Listing Page** (`content/pages/blog/index.md`)
**URL:** `/blog`  
**Status:** ✅ **UPDATED** (configured correctly)  
**What's there:**
- Hero section
- Post feed showing all blog posts

**Action needed:** None - automatically shows all blog posts

---

### 4. **Blog Posts** (`content/pages/blog/`)

#### ✅ **Your Real Blog Posts** (Keep these):
- `optimizing-spark-jobs.md` - ✅ Real content
- `introduction-to-llms.md` - ✅ Real content
- `data-lake-design.md` - ✅ Real content
- `recommendation-engine-blog.md` - ✅ Real content
- `transformer-nlp-service.md` - ✅ Real content

#### ⚠️ **Template Blog Posts** (Delete or replace):
- `post-one.md` - ❌ Template content (Lorem ipsum)
- `post-two.md` - ❌ Template content
- `post-three.md` - ❌ Template content
- `post-four.md` - ❌ Template content
- `post-five.md` - ❌ Template content
- `post-six.md` - ❌ Template content
- `post-seven.md` - ❌ Template content

**Action needed:**
- Delete the 7 template blog posts OR
- Replace them with your own blog posts

---

## 💼 Project Pages

### 5. **Projects Listing Page** (`content/pages/projects/index.md`)
**URL:** `/projects`  
**Status:** ✅ **UPDATED** (configured correctly)  
**What's there:**
- Hero section
- Project feed showing all projects

**Action needed:** None - automatically shows all projects

---

### 6. **Project Pages** (`content/pages/projects/`)

#### ✅ **Your Real Projects** (Keep these):
- `real-time-analytics.md` - ✅ Real content
- `ml-pipeline.md` - ✅ Real content
- `data-lake.md` - ✅ Real content
- `transformer-nlp.md` - ✅ Real content
- `recommendation-engine.md` - ✅ Real content
- `llm-agent-framework.md` - ✅ Real content

#### ⚠️ **Template Projects** (Delete):
- `project-one.md` - ❌ Template content ("A very cool code project")
- `project-two.md` - ❌ Template content
- `project-three.md` - ❌ Template content

**Action needed:**
- Delete the 3 template project files

---

## ⚙️ Global Configuration

### 7. **Site Configuration** (`content/data/config.json`)
**Status:** ⚠️ **NEEDS UPDATE** (has template values)  
**What needs updating:**

#### Header:
- ✅ Navigation links (Info, Projects, Blog) - Already correct
- ❌ Site title: Currently "Personal" → Update to your name
- ❌ Social links: Currently Netlify template links → Update to your social profiles

#### Footer:
- ❌ Footer links: Currently template links → Update to your links
- ❌ Contact info: Currently placeholder → Update with your real contact details
- ❌ Copyright text: Currently "Powered by Netlify" → Update to your copyright

**Action needed:**
- Update `title` in header to your name
- Update `socialLinks` with your real social media URLs
- Update footer `primaryLinks` if needed
- Update `contacts` section with your real phone, email, address
- Update `copyrightText`

---

## 🎨 Theme & Styling

### 8. **Theme Colors** (`content/data/style.json`)
**Status:** ✅ **UPDATED** (light theme, blue secondary color)  
**Action needed:** Customize colors if desired

---

## 📊 Summary Checklist

### ✅ Already Updated:
- [x] Home page hero text
- [x] About page with real experience/education
- [x] Skills section
- [x] 6 real blog posts
- [x] 6 real projects
- [x] Theme colors (light theme)

### ⚠️ Needs Update:
- [ ] Delete 7 template blog posts (`post-one.md` through `post-seven.md`)
- [ ] Delete 3 template projects (`project-one.md`, `project-two.md`, `project-three.md`)
- [ ] Update `config.json`:
  - [ ] Site title (header.title)
  - [ ] Social media links (header.socialLinks)
  - [ ] Footer contact info (footer.contacts)
  - [ ] Footer copyright text
  - [ ] Footer links
- [ ] Update company logos in About page MediaGallerySection
- [ ] Review and customize all project descriptions
- [ ] Review and customize all blog post content

---

## 🗑️ Files to Delete

**Template Blog Posts:**
```
content/pages/blog/post-one.md
content/pages/blog/post-two.md
content/pages/blog/post-three.md
content/pages/blog/post-four.md
content/pages/blog/post-five.md
content/pages/blog/post-six.md
content/pages/blog/post-seven.md
```

**Template Projects:**
```
content/pages/projects/project-one.md
content/pages/projects/project-two.md
content/pages/projects/project-three.md
```

---

## 📝 Quick Update Guide

### Update Site Title & Social Links:
Edit `content/data/config.json`:
```json
{
  "header": {
    "title": "Your Name",  // Change from "Personal"
    "socialLinks": [
      {
        "type": "Social",
        "label": "GitHub",
        "url": "https://github.com/yourusername",  // Your real GitHub
        "icon": "github"
      },
      // Add your other social links
    ]
  }
}
```

### Update Footer Contact:
Edit `content/data/config.json`:
```json
{
  "footer": {
    "contacts": {
      "email": "your@email.com",  // Your real email
      "phoneNumber": "Your phone",  // Your real phone
      "address": "Your address"  // Your real address
    },
    "copyrightText": "© 2024 Your Name"  // Your copyright
  }
}
```

---

## 🎯 Priority Order

1. **High Priority:**
   - Update `config.json` with your personal info
   - Delete template blog posts and projects

2. **Medium Priority:**
   - Update company logos in About page
   - Review and refine project descriptions

3. **Low Priority:**
   - Customize theme colors further
   - Add more blog posts or projects

---

## 📍 URL Structure

All pages are accessible at:
- Home: `/`
- About: `/info`
- Blog: `/blog`
- Blog Post: `/blog/[post-name]`
- Projects: `/projects`
- Project: `/projects/[project-name]`

---

## 💡 Tips

- All content is in markdown files - easy to edit
- Images go in `public/images/` directory
- The site automatically generates pages from markdown files
- Changes to content files are picked up automatically by the dev server

