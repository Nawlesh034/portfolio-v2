# EmailJS Setup Guide for Contact Form

This guide will help you set up EmailJS to make your contact form functional and receive emails when visitors submit the form.

## Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID** (you'll need this later)

### For Gmail:
- Select "Gmail"
- Click "Connect Account" and authorize EmailJS
- Your Service ID will be generated automatically

## Step 3: Create Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template structure:

```
Subject: New Contact Form Message - {{subject}}

From: {{from_name}} ({{from_email}})
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Save the template and note down your **Template ID**

## Step 4: Get Your Public Key

1. Go to "Account" → "General"
2. Find your **Public Key** (User ID)
3. Copy this key

## Step 5: Update Your Code

Replace the placeholders in `script.js`:

```javascript
// Line 639: Replace with your Public Key
emailjs.init("YOUR_PUBLIC_KEY_HERE");

// Line 684: Replace with your Service ID and Template ID
emailjs.send('YOUR_SERVICE_ID_HERE', 'YOUR_TEMPLATE_ID_HERE', templateParams)
```

## Step 6: Test Your Form

1. Open your portfolio website
2. Fill out the contact form
3. Submit the form
4. Check your email inbox for the message

## Example Configuration

Here's what your updated script.js should look like:

```javascript
// Replace these with your actual values
emailjs.init("user_1234567890abcdef"); // Your Public Key
emailjs.send('service_gmail', 'template_contact', templateParams) // Your Service ID and Template ID
```

## Troubleshooting

### Common Issues:

1. **Form not sending**: Check browser console for errors
2. **Not receiving emails**: 
   - Verify your email service is connected
   - Check spam folder
   - Ensure template variables match
3. **CORS errors**: Make sure you're testing on a web server, not file://

### EmailJS Free Plan Limits:
- 200 emails per month
- EmailJS branding in emails
- Basic support

## Security Note

Your EmailJS public key is safe to expose in client-side code. However, consider implementing rate limiting on your form to prevent spam.

## Next Steps

After setup:
1. Test the form thoroughly
2. Consider adding a honeypot field for spam protection
3. Add form validation feedback
4. Monitor your EmailJS usage in the dashboard

## Support

If you need help:
- EmailJS Documentation: https://www.emailjs.com/docs/
- EmailJS Support: https://www.emailjs.com/support/
