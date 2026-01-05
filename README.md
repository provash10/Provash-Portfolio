# Provash Portfolio Website

A professional and responsive portfolio website built with React, JavaScript, and Tailwind CSS.

## Features

✅ **Responsive Navigation Bar** - Fully responsive with smooth scrolling
✅ **Professional Hero Section** - With designation, photo placeholder, and resume download
✅ **Social Media Links** - GitHub, LinkedIn, Email, WhatsApp integration
✅ **Detailed About Section** - Programming journey, interests, and personality showcase
✅ **Visual Skills Section** - Categorized skills with progress bars
✅ **Projects Showcase** - 3+ projects with detailed pages
✅ **Contact Information** - Email, phone, WhatsApp with contact form
✅ **Clean Footer** - Professional and elegant design
✅ **Fully Responsive** - Works on all devices

## Technologies Used

- **Frontend**: React, JavaScript, Tailwind CSS
- **Routing**: React Router DOM
- **Icons**: Font Awesome
- **Styling**: Tailwind CSS with custom animations

## Project Structure

```
provash-portfolio/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── assets/
│   │   └── images/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Hero.js
│   │   ├── About.js
│   │   ├── Skills.js
│   │   ├── Projects.js
│   │   ├── ProjectDetail.js
│   │   ├── Contact.js
│   │   └── Footer.js
│   ├── data/
│   │   └── projects.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── package.json
├── tailwind.config.js
└── postcss.config.js
```

## Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm start
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

## Customization

### Adding Your Profile Photo
- Add your photo to `src/assets/images/`
- Update the Hero and About components to use your photo

### Adding Your Resume
- Add your resume PDF to `public/` folder
- Update the download link in Hero component

### Updating Projects
- Edit `src/data/projects.js` to add your actual projects
- Add project images to `src/assets/images/`

### Customizing Colors
- Edit `tailwind.config.js` to change the color scheme
- Primary color is currently set to `#0e75b6`

## Contact Information

- **Email**: provash20cb@gmail.com
- **Phone**: +880 1710 490345
- **GitHub**: [provash10](https://github.com/provash10)
- **LinkedIn**: [provashchandrabarman](https://www.linkedin.com/in/provashchandrabarman/)

## License

This project is open source and available under the [MIT License](LICENSE).