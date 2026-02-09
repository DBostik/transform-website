# HighLevel Form Styling Guide

## ✅ Your Forms Are Now Live!

The HighLevel forms are embedded and working on your site. Now let's make them beautiful!

---

## 🎨 How To Style In HighLevel

### Step 1: Log Into HighLevel
1. Go to https://app.gohighlevel.com
2. Log in to your account

### Step 2: Find Your Forms
1. In the left sidebar, click **Sites** → **Forms** (or just **Forms**)
2. Look for these two forms:
   - **"Transform Website Opt-in"** (Quick Lead form)
   - **"Contact Us Website Form"** (Contact page form)

### Step 3: Edit Form Styles
For each form:
1. Click the form name to edit
2. Look for **"Settings"** or **"Styles"** tab
3. Find **"Custom CSS"** section (if available)
4. Paste the CSS code below
5. Click **"Save"** or **"Publish"**

---

## 📋 CSS Code To Paste

### For BOTH Forms - Use This CSS:

```css
/* Import your website font */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

/* Reset and base styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body, .form-container {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important;
  background: transparent !important;
  padding: 0 !important;
}

/* Form wrapper */
.form-wrapper,
.hl_form {
  max-width: 100% !important;
}

/* Form groups */
.form-group,
.hl_form-group,
.input-group {
  margin-bottom: 1.5rem !important;
}

/* Labels */
label {
  display: block !important;
  font-weight: 600 !important;
  color: #1f2937 !important;
  margin-bottom: 0.5rem !important;
  font-size: 0.875rem !important;
  letter-spacing: 0.01em !important;
}

/* Input fields */
input[type="text"],
input[type="email"],
input[type="tel"],
input[type="phone"],
textarea,
.form-control,
.hl_input {
  width: 100% !important;
  padding: 0.75rem 1rem !important;
  border: 2px solid #e5e7eb !important;
  border-radius: 0.5rem !important;
  font-size: 1rem !important;
  line-height: 1.5 !important;
  transition: all 0.2s ease-in-out !important;
  background: white !important;
  color: #1f2937 !important;
  font-family: 'Inter', sans-serif !important;
}

/* Textarea specific */
textarea {
  min-height: 120px !important;
  resize: vertical !important;
}

/* Focus state */
input:focus,
textarea:focus,
.form-control:focus,
.hl_input:focus {
  outline: none !important;
  border-color: #0ea5e9 !important;
  box-shadow: 0 0 0 3px rgba(14, 165, 233, 0.1) !important;
}

/* Placeholder text */
input::placeholder,
textarea::placeholder {
  color: #9ca3af !important;
  opacity: 1 !important;
}

/* Submit button */
button[type="submit"],
.submit-button,
.hl_submit,
input[type="submit"] {
  width: 100% !important;
  padding: 0.875rem 1.5rem !important;
  background: linear-gradient(135deg, #0ea5e9, #0284c7) !important;
  color: white !important;
  border: none !important;
  border-radius: 0.5rem !important;
  font-weight: 600 !important;
  font-size: 1rem !important;
  cursor: pointer !important;
  transition: all 0.2s ease-in-out !important;
  margin-top: 1rem !important;
  font-family: 'Inter', sans-serif !important;
  letter-spacing: 0.01em !important;
  text-transform: none !important;
}

/* Button hover */
button[type="submit"]:hover,
.submit-button:hover,
.hl_submit:hover,
input[type="submit"]:hover {
  transform: translateY(-2px) !important;
  box-shadow: 0 10px 25px -5px rgba(14, 165, 233, 0.4) !important;
  background: linear-gradient(135deg, #0284c7, #0369a1) !important;
}

/* Button active/pressed */
button[type="submit"]:active,
.submit-button:active,
.hl_submit:active,
input[type="submit"]:active {
  transform: translateY(0) !important;
}

/* Error messages */
.error-message,
.hl_error {
  color: #dc2626 !important;
  font-size: 0.875rem !important;
  margin-top: 0.25rem !important;
}

/* Success messages */
.success-message,
.hl_success {
  color: #16a34a !important;
  font-size: 0.875rem !important;
  margin-top: 0.25rem !important;
}

/* Remove any unwanted spacing */
.form > *:first-child {
  margin-top: 0 !important;
}

.form > *:last-child {
  margin-bottom: 0 !important;
}

/* Checkboxes (for consent) */
input[type="checkbox"] {
  width: auto !important;
  margin-right: 0.5rem !important;
  cursor: pointer !important;
}

/* Checkbox labels */
input[type="checkbox"] + label,
input[type="checkbox"] ~ label {
  display: inline !important;
  font-weight: 400 !important;
  font-size: 0.875rem !important;
  cursor: pointer !important;
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  input[type="text"],
  input[type="email"],
  input[type="tel"],
  textarea {
    font-size: 16px !important; /* Prevents zoom on iOS */
  }
}
```

---

## 🎯 Alternative: If Custom CSS Isn't Available

If HighLevel doesn't have a "Custom CSS" option for your plan, use their visual form builder:

### Colors:
- **Primary Color:** `#0ea5e9` (bright blue)
- **Primary Dark:** `#0284c7` (darker blue for gradient)
- **Text Color:** `#1f2937` (dark gray)
- **Border Color:** `#e5e7eb` (light gray)
- **Background:** `#ffffff` (white)

### Fonts:
- **Font Family:** Inter (or similar sans-serif)
- **Label Weight:** 600 (Semi-bold)
- **Button Weight:** 600 (Semi-bold)

### Spacing:
- **Input Padding:** 12px 16px
- **Border Radius:** 8px
- **Input Border:** 2px solid
- **Gap Between Fields:** 24px

### Button:
- **Type:** Gradient
- **Gradient Colors:** #0ea5e9 → #0284c7
- **Hover Effect:** Slight lift + shadow

---

## ✅ Testing Checklist

After applying the styles:

- [ ] Test Quick Lead form on homepage
- [ ] Test Contact form on contact page
- [ ] Verify forms match your website design
- [ ] Submit test data
- [ ] Check HighLevel CRM for submissions
- [ ] Test on mobile devices
- [ ] Test on different browsers

---

## 🚀 You're Done!

Once you paste the CSS and save:
1. Refresh your website
2. The forms should look beautiful and match your design!
3. All submissions will go straight to your HighLevel CRM

**Need help?** Let me know if the forms don't look right or if you can't find the Custom CSS option!
