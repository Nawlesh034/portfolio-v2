# Contact Form Setup - Quick Start

Your contact form is ready to be configured! Choose one of these two methods:

## 🚀 Method 1: Formspree (RECOMMENDED - Easiest)

**Time to setup: 5 minutes**

1. Go to [Formspree.io](https://formspree.io/) and create account
2. Create new form with your email: `nn802301@gmail.com`
3. Copy your Form ID (e.g., `xpzgkqyw`)
4. In `script.js`, find line ~675 and replace `YOUR_FORM_ID` with your actual ID
5. Uncomment the Formspree section (remove `/*` and `*/`)
6. Comment out the temporary fallback code at the bottom

**See detailed instructions in: `FORMSPREE_SETUP.md`**

## ⚡ Method 2: EmailJS (More Complex)

**Time to setup: 15 minutes**

1. Create EmailJS account
2. Set up email service (Gmail/Outlook)
3. Create email template
4. Get Public Key, Service ID, and Template ID
5. Update `script.js` with your credentials
6. Uncomment EmailJS section in code

**See detailed instructions in: `EMAILJS_SETUP.md`**

## 🎯 Recommendation

**Use Formspree** - it's much simpler and works perfectly for portfolio contact forms.

## Current Status

- ✅ Contact form HTML is ready
- ✅ JavaScript validation is working
- ✅ Form styling and animations are complete
- ⏳ **Need to configure email service** (choose method above)

## After Setup

Your contact form will:
- ✅ Validate user input
- ✅ Show loading states
- ✅ Send emails to your inbox
- ✅ Display success/error messages
- ✅ Reset form after successful submission
- ✅ Include spam protection

## Test Your Form

After setup:
1. Fill out your contact form
2. Submit it
3. Check your email inbox
4. Verify you received the message

## Need Help?

- Check the detailed setup guides
- Test in browser console for errors
- Make sure you're testing on a web server (not file://)

---

**Next Step:** Follow the Formspree setup guide for the quickest solution!
