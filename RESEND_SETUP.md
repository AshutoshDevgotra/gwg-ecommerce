# Resend Email Setup Guide

## What is Resend?

Resend is a modern email API service that provides better deliverability, easier setup, and more reliable email sending compared to traditional SMTP services.

## 1. Create Resend Account

1. Go to [resend.com](https://resend.com)
2. Sign up for a free account
3. Verify your email address

## 2. Get API Key

1. In your Resend dashboard, go to "API Keys"
2. Click "Create API Key"
3. Give it a name (e.g., "GWG Fitness Production")
4. Copy the API key (it starts with `re_`)

## 3. Add Domain (For Production)

### For Development:

- You can use the default sandbox domain
- Emails will be sent from `onboarding@resend.dev`
- Limited to sending emails to your own verified email

### For Production:

1. In Resend dashboard, go to "Domains"
2. Click "Add Domain"
3. Enter your domain (e.g., `yourdomain.com`)
4. Add the required DNS records to your domain provider:
   - MX record
   - TXT record for SPF
   - TXT record for DKIM
5. Wait for verification (usually takes a few minutes)

## 4. Environment Variables

Add to your `.env.local` file:

```env
# Resend Configuration
RESEND_API_KEY=re_your_api_key_here
EMAIL_FROM=noreply@yourdomain.com
```

### Email From Address:

- **Development**: Use `onboarding@resend.dev` or your verified email
- **Production**: Use your verified domain (e.g., `noreply@yourdomain.com`)

## 5. DNS Records for Custom Domain

When adding your domain to Resend, you'll need to add these DNS records:

### MX Record:

```
Name: @
Type: MX
Value: feedback-smtp.resend.com
Priority: 10
```

### SPF Record:

```
Name: @
Type: TXT
Value: v=spf1 include:_spf.resend.com ~all
```

### DKIM Record:

```
Name: resend._domainkey
Type: TXT
Value: [Provided by Resend - unique for each domain]
```

## 6. Features Available

### ✅ What We've Implemented:

1. **Order Confirmation Emails**
   - Beautiful HTML templates
   - Order details and tracking info
   - Responsive design

2. **Welcome Emails**
   - Sent automatically on user registration
   - Branded design with call-to-action

3. **Professional Styling**
   - GWG brand colors and fonts
   - Mobile-responsive templates
   - Clean, modern design

### 📧 Email Types:

1. **Order Confirmation** (`sendOrderConfirmationEmail`)
   - Triggered after successful payment
   - Includes order details, items, shipping address
   - Payment and tracking information

2. **Welcome Email** (`sendWelcomeEmail`)
   - Triggered on new user registration
   - Introduces GWG benefits and features
   - Encourages first purchase

## 7. Testing Emails

### Development Testing:

```bash
# Test welcome email
curl -X POST http://localhost:3000/api/send-welcome-email \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","name":"Test User"}'
```

### In Resend Dashboard:

1. Go to "Logs" to see all sent emails
2. Check delivery status and open rates
3. View email content and debugging info

## 8. Pricing

### Free Tier:

- 100 emails/day
- 3,000 emails/month
- Perfect for development and small projects

### Paid Plans:

- Pro: $20/month for 50,000 emails
- Enterprise: Custom pricing
- Pay-as-you-go options available

## 9. Production Checklist

- [ ] Custom domain added and verified
- [ ] DNS records configured correctly
- [ ] Production API key generated
- [ ] Environment variables updated
- [ ] Test emails sent successfully
- [ ] Monitoring set up in Resend dashboard

## 10. Troubleshooting

### Common Issues:

1. **Domain Verification Failed**
   - Check DNS propagation (can take 24-48 hours)
   - Verify DNS records are correct
   - Use DNS checker tools

2. **Emails Not Delivered**
   - Check Resend logs for delivery status
   - Verify recipient email addresses
   - Check spam folders

3. **API Key Issues**
   - Ensure API key is correct and active
   - Check environment variable loading
   - Verify key has proper permissions

### Support:

- Resend Documentation: [resend.com/docs](https://resend.com/docs)
- Support Email: support@resend.com
- Discord Community: Active support community

## Benefits Over SMTP/Nodemailer

1. **Better Deliverability**: Higher inbox placement rates
2. **Easier Setup**: No SMTP configuration needed
3. **Better Analytics**: Open rates, click tracking, bounce handling
4. **Modern API**: RESTful API vs SMTP protocol
5. **Reliability**: Built for scale and uptime
6. **Security**: Built-in security best practices
