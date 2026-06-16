# Mengo Old Students Association (MOSA) Platform

Welcome to the MOSA Platform! This repository contains the multi-page frontend prototype for the Mengo Old Students Association.

## 🎓 Features Included
- **Alumni Directory & Profiles**: Connect with global Mengo alumni.
- **Events Calendar**: RSVP to upcoming reunions and meetings.
- **MOSA Sub-Networks**: Job Board, Mentorship Program, and Business Directory.
- **Give Back**: Integrated donation and support mockups.

## 🏗️ Architecture
Built using vanilla HTML, CSS, JavaScript, and styled with the Tailwind CSS Framework. Shared UI elements (navigation header, site footer) are extracted into the `/components` directory and injected globally via `js/main.js` to keep the code DRY and maintenance simple.

## 📁 Project Structure
```
mosa-platform/
├── index.html              # Homepage
├── directory.html          # Alumni directory
├── events.html             # Events calendar
├── projects.html           # Community projects
├── donate.html             # Donation page
├── login.html              # User authentication
├── register.html           # User registration
├── profile.html            # User profiles
├── jobs.html               # Job board
├── mentorship.html         # Mentorship program
├── business.html           # Business directory
├── league.html             # SACCO league
├── news.html               # News & updates
├── about.html              # About MOSA
├── sacco.html              # SACCO details
├── components/             # Reusable UI components
│   ├── header.html         # Navigation header (injected globally)
│   └── footer.html         # Site footer (injected globally)
├── js/
│   ├── main.js             # Component loader & global utilities
│   └── navigation.js       # Navigation-specific scripts
├── .gitattributes          # Language composition configuration
└── assets/                 # Images and media files
```

## 🚀 Getting Started

### Local Development
1. Clone the repository:
   ```bash
   git clone https://github.com/harrison-maps/mosa-platform.git
   cd mosa-platform
   ```

2. Open any HTML file in your browser or use a local server:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js
   npm install -g http-server
   http-server
   ```

3. Visit `http://localhost:8000` in your browser.

### 🔧 Component System
The platform uses a lightweight component injection system:

- **Header & Footer** are stored in `/components/` as standalone HTML files
- **`js/main.js`** automatically loads and injects them into pages when `DOMContentLoaded` fires
- All pages include placeholder divs with IDs matching the component loader:
  ```html
  <div id="header-placeholder"></div>
  <div id="footer-placeholder"></div>
  ```

**Benefits:**
- ✅ DRY principle - maintain header/footer in one place
- ✅ Consistent navigation across all pages
- ✅ Easy updates - changes apply globally
- ✅ Lightweight - vanilla JavaScript, no frameworks

## 🎨 Technology Stack
- **Frontend**: HTML5, CSS3 (Tailwind CSS), Vanilla JavaScript
- **Styling**: Tailwind CSS (via CDN)
- **Icons**: FontAwesome 6.4.0
- **Fonts**: Google Fonts (Inter, Playfair Display)

## 🤝 Contributing
To contribute to MOSA Platform:

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Make your changes and test locally
3. Commit with descriptive messages: `git commit -m "feat: Add feature description"`
4. Push to your branch: `git push origin feature/your-feature`
5. Open a Pull Request

### Coding Standards
- Use semantic HTML5
- Follow Tailwind CSS naming conventions
- Keep components modular and reusable
- Comment complex logic
- Test responsive design across devices

## 📄 Pages Overview

| Page | Purpose |
|------|----------|
| **index.html** | Landing page with hero, featured alumni, and events |
| **directory.html** | Searchable alumni database |
| **events.html** | Event calendar and RSVP management |
| **projects.html** | Community-led initiatives |
| **jobs.html** | Alumni job board |
| **mentorship.html** | Mentorship matching platform |
| **business.html** | Business directory for alumni ventures |
| **league.html** | SACCO (Savings & Credit) leagues |
| **donate.html** | Donation portal for supporting Mengo |
| **register.html** | User registration |
| **login.html** | User authentication |
| **profile.html** | User profile management |

## 📊 Performance & Accessibility
- Lightweight HTML-based frontend
- No external dependencies (all via CDN)
- Mobile-responsive design
- Semantic HTML for accessibility
- WCAG 2.1 compliance in progress

## 📞 Contact & Support
- **Email**: info@mosa.org
- **GitHub**: https://github.com/harrison-maps/mosa-platform
- **Social**: Facebook, Twitter, LinkedIn, Instagram

---

**Obunnamengo Bwa Lubeerera** 🇺🇬

Last Updated: June 16, 2026