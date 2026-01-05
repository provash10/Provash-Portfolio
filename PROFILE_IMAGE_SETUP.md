# How to Add Your Profile Image

## Method 1: Replace the placeholder image

1. **Add your image to the assets folder:**
   - Copy your profile photo to `src/assets/images/`
   - Name it `profile.jpg`, `profile.png`, or `profile.webp`
   - Recommended size: 400x400px or larger (square aspect ratio works best)

2. **Update the Hero component:**
   ```javascript
   // In src/components/Hero.js, uncomment and update this line:
   import profileImg from '../assets/images/profile.jpg'; // Change extension if needed
   
   // Then change this line:
   const profileImg = null; // Change to: remove this line entirely
   ```

## Method 2: Use a URL (for online images)

```javascript
// In src/components/Hero.js
const profileImg = "https://your-image-url.com/profile.jpg";
```

## Method 3: Use public folder

1. **Add image to public folder:**
   - Copy your image to `public/images/profile.jpg`

2. **Update the component:**
   ```javascript
   // In src/components/Hero.js
   const profileImg = "/images/profile.jpg";
   ```

## Image Requirements

- **Format**: JPG, PNG, or WebP
- **Size**: Minimum 400x400px (recommended 800x800px for high quality)
- **Aspect Ratio**: Square (1:1) works best
- **File Size**: Keep under 500KB for fast loading

## Current Setup

Currently, the Hero component shows a fallback user icon. Once you add your image using any of the methods above, it will automatically display your profile photo with all the animations and styling.

## Troubleshooting

If your image doesn't show:
1. Check the file path is correct
2. Ensure the image file exists
3. Check browser console for errors
4. Try refreshing the page
5. The fallback icon will show if there's any issue with the image