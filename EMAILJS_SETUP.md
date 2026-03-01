# EmailJS Setup Guide for Book Consultation Form

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (allows 200 emails/month)
3. Verify your email address

## Step 2: Add Email Service

1. Go to **Email Services** in your EmailJS dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail recommended)
4. Follow the setup instructions
5. Note down your **Service ID** (e.g., `service_abc123`)

## Step 3: Create Email Template

1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use this template structure:

### Template Name: `consultation_request`

### Template Content:

```
Subject: New Consultation Request from {{from_name}}

You have received a new consultation request:

Client Information:
- Name: {{from_name}}
- Email: {{from_email}}
- Phone: {{phone}}
- Address: {{address}}
- Postcode: {{postcode}}

Property Details:
- Property Type: {{property_type}}
- Requested Services: {{services}}
- Number of Bathrooms: {{bathrooms}}

Project Timeline:
{{timeline}}

Best Time to Contact:
{{contact_time}}

Additional Details:
{{details}}

---
This email was sent from the Bespoke Designs consultation form.
```

4. Save the template and note down your **Template ID** (e.g., `template_xyz789`)

## Step 4: Get Public Key

1. Go to **Account** → **General** in your EmailJS dashboard
2. Find your **Public Key** (e.g., `abc123XYZ`)
3. Copy this key

## Step 5: Update BookConsultation.jsx

Open `src/pages/book_consultation/BookConsultation.jsx` and replace these values around line 40:

```javascript
const serviceId = "service_abc123"; // Your Service ID
const templateId = "template_xyz789"; // Your Template ID
const publicKey = "abc123XYZ"; // Your Public Key
```

Also update the business email:

```javascript
to_email: "your-business-email@example.com", // Your actual business email
```

## Step 6: Test the Form

1. Run your development server: `npm run dev`
2. Navigate to the Book Consultation page
3. Fill out and submit the test form
4. Check your business email for the consultation request

## Troubleshooting

### Email not received?

- Check your EmailJS dashboard for email logs
- Verify all IDs are correct
- Check spam/junk folder
- Ensure email service is connected properly

### Error message shown?

- Open browser console (F12) to see detailed error
- Verify Public Key in EmailJS account settings
- Check that template variables match the form data

### Rate limits?

- Free tier allows 200 emails/month
- Upgrade plan if you need more capacity

## Security Note

For production, consider moving the EmailJS credentials to environment variables:

1. Create `.env` file (already gitignored)
2. Add: `VITE_EMAILJS_SERVICE_ID=your_service_id`
3. Use in code: `import.meta.env.VITE_EMAILJS_SERVICE_ID`

## Support

- EmailJS Documentation: https://www.emailjs.com/docs/
- EmailJS Support: https://www.emailjs.com/support/

---

**Current Status:** ✅ EmailJS package installed  
**Next:** Configure your EmailJS account and update the credentials
