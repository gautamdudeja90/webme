# Personal Website Setup Guide

This guide will walk you through customizing this Next.js portfolio template to build your personal website.

## Table of Contents

1. [Initial Setup](#initial-setup)
2. [Understanding the Structure](#understanding-the-structure)
3. [Customizing Global Configuration](#customizing-global-configuration)
4. [Customizing Theme & Colors](#customizing-theme--colors)
5. [Editing Existing Pages](#editing-existing-pages)
6. [Creating New Pages](#creating-new-pages)
7. [Managing Blog Posts](#managing-blog-posts)
8. [Managing Projects](#managing-projects)
9. [Adding Images](#adding-images)
10. [Available Sections](#available-sections)
11. [Deployment](#deployment)
12. [Visual Editing (Optional)](#visual-editing-optional)

---

## Initial Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` to see your site.

### 3. Build for Production

```bash
npm run build
npm start
```

---

## Understanding the Structure

### Content Organization

- **`content/data/config.json`** - Global site configuration (header, footer, site-wide settings)
- **`content/data/style.json`** - Theme colors and typography
- **`content/pages/`** - All your pages (home, about, blog posts, projects)
- **`public/images/`** - All images and assets

### Page Structure

Each page is a markdown file with:
- **Frontmatter** (YAML at the top) - Defines the page structure, sections, and styling
- **Markdown content** (below frontmatter) - The actual page content

### Layout Types

- **`PageLayout`** - Standard page with customizable sections
- **`PostLayout`** - Blog post layout with author, date, featured image
- **`PostFeedLayout`** - Blog listing page
- **`ProjectLayout`** - Project detail page
- **`ProjectFeedLayout`** - Projects listing page

---

## Customizing Global Configuration

Edit `content/data/config.json` to customize:

### Header

```json
{
  "header": {
    "title": "Your Name",           // Site title
    "isTitleVisible": true,         // Show/hide title
    "primaryLinks": [               // Navigation links
      {
        "type": "Link",
        "label": "About",
        "url": "/info"
      },
      {
        "type": "Link",
        "label": "Projects",
        "url": "/projects"
      },
      {
        "type": "Link",
        "label": "Blog",
        "url": "/blog"
      }
    ],
    "socialLinks": [                // Social media icons
      {
        "type": "Social",
        "label": "Twitter",
        "url": "https://twitter.com/yourhandle",
        "icon": "twitter"
      },
      {
        "type": "Social",
        "label": "GitHub",
        "url": "https://github.com/yourhandle",
        "icon": "github"
      }
    ]
  }
}
```

**Available social icons:** `twitter`, `github`, `linkedin`, `instagram`, `facebook`, `youtube`, `vimeo`, `reddit`, `bluesky`, `mail`

### Footer

```json
{
  "footer": {
    "primaryLinks": [...],          // Footer navigation
    "contacts": {
      "title": "Contact details",
      "phoneNumber": "Your phone",
      "email": "your@email.com",
      "address": "Your address"
    },
    "copyrightText": "© 2024 Your Name"
  }
}
```

### Favicon

Change the favicon path:
```json
{
  "favicon": "/images/your-favicon.svg"
}
```

---

## Customizing Theme & Colors

Edit `content/data/style.json`:

```json
{
  "light": "#ffffff",              // Light background
  "onLight": "#050806",            // Text on light background
  "dark": "#000000",               // Dark background
  "onDark": "#FBFFF2",             // Text on dark background
  "primary": "#0804F6",            // Primary brand color
  "onPrimary": "#FBFFF2",          // Text on primary color
  "secondary": "#FE491F",          // Secondary accent color
  "onSecondary": "#050806",        // Text on secondary color
  "complementary": "#565862",      // Complementary color
  "onComplementary": "#FBFFF2",    // Text on complementary
  "fontBody": "\"DM Mono\", monospace",  // Body font
  "headingWeight": "400",          // Heading font weight
  "headingCase": "uppercase"       // Heading text transform
}
```

**Color Schemes:**
- `colors-a` through `colors-f` - Predefined color scheme variants
- You can reference these in page frontmatter: `colors: colors-a`

---

## Editing Existing Pages

### Home Page (`content/pages/index.md`)

The home page uses `PageLayout` with multiple sections. Edit the frontmatter to customize:

```yaml
---
type: PageLayout
title: Home
colors: colors-a
backgroundImage:
  type: BackgroundImage
  url: /images/your-bg.jpg
  backgroundSize: cover
  backgroundPosition: center
  opacity: 75
sections:
  - type: HeroSection
    title: "Your headline here"
    subtitle: "Your tagline or description"
    # ... more section config
---
```

### About/Info Page (`content/pages/info.md`)

This is your "About Me" page. Customize:
- Hero section text
- Media gallery (logos of companies you've worked with)
- Social links
- Skills/labels
- Experience and education
- Contact form

---

## Creating New Pages

### 1. Create a Markdown File

Create a new file in `content/pages/` (e.g., `content/pages/services.md`)

### 2. Add Frontmatter

```yaml
---
type: PageLayout
title: Services
colors: colors-a
sections:
  - type: HeroSection
    title: "My Services"
    subtitle: "What I can do for you"
    styles:
      self:
        padding:
          - pt-36
          - pb-48
  - type: TextSection
    variant: variant-a
    text: |
      # Service 1
      Description here...
      
      # Service 2
      Another description...
---
```

### 3. Add Content

Write your markdown content below the frontmatter. The page will be accessible at `/services`.

**URL Mapping:**
- `content/pages/services.md` → `/services/`
- `content/pages/about/index.md` → `/about/`
- `content/pages/blog/post.md` → `/blog/post/`

---

## Managing Blog Posts

### Creating a Blog Post

1. Create a file in `content/pages/blog/` (e.g., `my-post.md`)

2. Use this template:

```yaml
---
type: PostLayout
title: "My Blog Post Title"
colors: colors-a
date: '2024-01-15'
author: content/data/team/your-name.json  # Optional: create author file
excerpt: "A brief description of the post"
featuredImage:
  type: ImageBlock
  url: /images/post-image.jpg
  altText: Post thumbnail
bottomSections:
  - type: RecentPostsSection
    subtitle: Recent posts
    recentCount: 3
    showDate: true
    showExcerpt: true
---
```

3. Write your markdown content below.

### Blog Listing Page

Edit `content/pages/blog/index.md` to customize the blog listing page.

### Creating an Author Profile

1. Create `content/data/team/your-name.json`:

```json
{
  "type": "Person",
  "firstName": "Your",
  "lastName": "Name",
  "avatar": "/images/your-photo.jpg",
  "bio": "Your bio here"
}
```

2. Reference it in blog posts: `author: content/data/team/your-name.json`

---

## Managing Projects

### Creating a Project

1. Create a file in `content/pages/projects/` (e.g., `my-project.md`)

2. Use this template:

```yaml
---
type: ProjectLayout
title: "Project Name"
colors: colors-a
date: '2024-01-15'
excerpt: "Brief project description"
featuredImage:
  type: ImageBlock
  url: /images/project-image.jpg
  altText: Project thumbnail
links:
  - type: Link
    label: "View Live"
    url: "https://project-url.com"
  - type: Link
    label: "GitHub"
    url: "https://github.com/your/project"
bottomSections:
  - type: RecentProjectsSection
    subtitle: More projects
    recentCount: 3
---
```

3. Write project details in markdown below.

### Projects Listing Page

Edit `content/pages/projects/index.md` to customize the projects listing.

---

## Adding Images

### 1. Add Images to Public Folder

Place images in `public/images/`:
- `public/images/your-image.jpg`
- `public/images/logo.svg`

### 2. Reference in Content

```yaml
featuredImage:
  type: ImageBlock
  url: /images/your-image.jpg
  altText: Description of image
```

**Note:** Paths start with `/images/` (not `/public/images/`)

### 3. Image Optimization Tips

- Use WebP format for better performance
- Keep images under 1MB when possible
- Recommended sizes:
  - Featured images: 1200x630px
  - Hero backgrounds: 1920x1080px
  - Thumbnails: 400x300px

---

## Available Sections

You can use these section types in your pages:

### Content Sections

- **`HeroSection`** - Large hero with title, subtitle, image, and CTA buttons
- **`TextSection`** - Rich text content with markdown support
- **`QuoteSection`** - Blockquote section
- **`ImageBlock`** - Single image
- **`VideoBlock`** - Embedded video
- **`DividerSection`** - Horizontal divider line

### Feature Sections

- **`FeaturedItemsSection`** - Grid of featured items (e.g., social links, services)
- **`FeaturedPostsSection`** - Display featured blog posts
- **`FeaturedProjectsSection`** - Display featured projects
- **`MediaGallerySection`** - Image gallery (e.g., company logos)
- **`LabelsSection`** - Tags/labels (e.g., skills)

### Feed Sections

- **`PostFeedSection`** - List of blog posts
- **`RecentPostsSection`** - Recent blog posts
- **`ProjectFeedSection`** - List of projects
- **`RecentProjectsSection`** - Recent projects

### Interactive Sections

- **`ContactSection`** - Contact form
- **`CtaSection`** - Call-to-action section
- **`TestimonialsSection`** - Testimonials carousel

### Section Styling

Each section supports styling:

```yaml
styles:
  self:
    width: wide          # wide, narrow, full
    height: auto
    padding:
      - pt-24            # Tailwind padding classes
      - pb-24
      - pl-4
      - pr-4
    margin:
      - mt-0
      - mb-0
    textAlign: left      # left, center, right
    flexDirection: row   # row, row-reverse, column
```

---

## Deployment

### Deploy to Netlify

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/your-repo.git
   git push -u origin main
   ```

2. **Deploy on Netlify:**
   - Go to [Netlify](https://app.netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub repository
   - Netlify will automatically detect the settings from `netlify.toml`:
     - Build command: `npm run build`
     - Publish directory: `.next`
     - Next.js plugin will be used automatically
   - Click "Deploy site"

3. **Environment Variables (if needed):**
   - Go to Site settings → Environment variables
   - Add any required variables

### Deploy to Vercel

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. Follow the prompts or connect your GitHub repo in the Vercel dashboard.

### Custom Domain

1. In Netlify/Vercel dashboard, go to Domain settings
2. Add your custom domain
3. Follow DNS configuration instructions

---

## Visual Editing (Optional)

If you want to use Netlify Visual Editor for visual editing:

### 1. Install Stackbit CLI

```bash
npm install -g @stackbit/cli
```

### 2. Run Visual Editor Dev Server

In a separate terminal:

```bash
stackbit dev
```

This will give you a URL to open the visual editor where you can edit content visually.

### 3. How It Works

- The visual editor reads your content files
- Changes are saved back to your markdown/JSON files
- Annotations in the code enable inline editing
- Works with your existing Git workflow

---

## Quick Reference

### Common Tasks

**Change site title:**
- Edit `content/data/config.json` → `header.title`

**Update navigation:**
- Edit `content/data/config.json` → `header.primaryLinks`

**Change colors:**
- Edit `content/data/style.json`

**Add a new page:**
- Create `content/pages/your-page.md` with frontmatter

**Add a blog post:**
- Create `content/pages/blog/your-post.md` with `type: PostLayout`

**Add a project:**
- Create `content/pages/projects/your-project.md` with `type: ProjectLayout`

**Change homepage:**
- Edit `content/pages/index.md`

**Update about page:**
- Edit `content/pages/info.md`

**Add images:**
- Place in `public/images/` and reference as `/images/filename.jpg`

---

## Tips & Best Practices

1. **Start Simple:** Begin by editing the existing pages before creating new ones
2. **Use Markdown:** Leverage markdown for rich text formatting
3. **Organize Images:** Keep images organized in `public/images/`
4. **Test Locally:** Always test changes with `npm run dev` before deploying
5. **Version Control:** Commit changes frequently to track your progress
6. **SEO:** Update page titles and meta descriptions in the frontmatter
7. **Performance:** Optimize images before adding them
8. **Mobile First:** Test your site on mobile devices

---

## Getting Help

- **Documentation:** Check the main `README.md`
- **Stackbit Docs:** [docs.netlify.com/visual-editor](https://docs.netlify.com/visual-editor/)
- **Next.js Docs:** [nextjs.org/docs](https://nextjs.org/docs)
- **Support:** [answers.netlify.com](https://answers.netlify.com/)

---

## Next Steps

1. ✅ Customize `content/data/config.json` with your info
2. ✅ Update `content/data/style.json` with your brand colors
3. ✅ Edit `content/pages/index.md` for your homepage
4. ✅ Update `content/pages/info.md` with your about page
5. ✅ Add your images to `public/images/`
6. ✅ Create your first blog post
7. ✅ Add your projects
8. ✅ Deploy to Netlify or Vercel

Happy building! 🚀

