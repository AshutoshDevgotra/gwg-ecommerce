# Environment Variables Setup Guide

## 🔐 Complete .env.local Configuration

Copy the `.env.example` file to `.env.local` and replace the example values with your actual API keys:

```bash
cp .env.example .env.local
```

## 📋 Required Environment Variables

### 1. Supabase Configuration

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**Where to find:**

1. Go to [Supabase Dashboard](https://supabase.com/dashboard)
2. Select your project
3. Go to Settings → API
4. Copy the values:
   - Project URL → `NEXT_PUBLIC_SUPABASE_URL`
   - Anon/Public Key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - Service Role Key → `SUPABASE_SERVICE_ROLE_KEY`

### 2. Razorpay Payment Gateway

```env
NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_test_1234567890abcd
RAZORPAY_KEY_SECRET=abcdefghijklmnopqrstuvwxyz123456
```

**Where to find:**

1. Go to [Razorpay Dashboard](https://dashboard.razorpay.com/)
2. Sign up/Login
3. Go to Settings → API Keys
4. Generate Test/Live Keys:
   - Key ID → `NEXT_PUBLIC_RAZORPAY_KEY_ID`
   - Key Secret → `RAZORPAY_KEY_SECRET`

### 3. Resend Email Service

```env
RESEND_API_KEY=re_AbCdEfGh_1234567890abcdefghijklmnopqrstuvwxyz
EMAIL_FROM=noreply@yourdomain.com
```

**Where to find:**

1. Go to [Resend](https://resend.com)
2. Sign up/Login
3. Go to API Keys
4. Create new API key
5. Copy the key → `RESEND_API_KEY`
6. Set your sending domain → `EMAIL_FROM`

### 4. NextAuth Configuration

```env
NEXTAUTH_SECRET=your-super-secret-nextauth-key-at-least-32-characters-long
NEXTAUTH_URL=http://localhost:3000
```

**How to generate:**

```bash
# Generate a random secret
openssl rand -base64 32
```

### 5. Google OAuth (Optional)

```env
GOOGLE_CLIENT_ID=123456789012-abcdefghijklmnopqrstuvwxyz123456.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=GOCSPX-abcdefghijklmnopqrstuvwxyz
```

**Where to find:**

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create project or select existing
3. Go to APIs & Services → Credentials
4. Create OAuth 2.0 Client ID
5. Configure redirect URIs and get credentials

## 🚀 Quick Setup for Development

### Minimum Required (for basic functionality):

```env
# Supabase (required for database and auth)
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key

# Resend (required for emails)
RESEND_API_KEY=re_your_api_key
EMAIL_FROM=onboarding@resend.dev

# NextAuth (required for sessions)
NEXTAUTH_SECRET=any-32-character-random-string-here
NEXTAUTH_URL=http://localhost:3000
```

### For Full E-commerce Functionality:

Add the above plus:

```env
# Razorpay (required for payments)
NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_test_your_key_id
RAZORPAY_KEY_SECRET=your_key_secret

# Service role (required for server operations)
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

### For Google Sign-in:

Add Google OAuth credentials:

```env
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

## 🔍 How to Verify Setup

### 1. Check Supabase Connection

```bash
# Start dev server
npm run dev

# Try to access http://localhost:3000
# Check browser console for Supabase errors
```

### 2. Test Email Sending

```bash
# Send test welcome email
curl -X POST http://localhost:3000/api/send-welcome-email \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","name":"Test User"}'
```

### 3. Test Newsletter Subscription

- Go to homepage
- Try subscribing to newsletter
- Check email and Resend dashboard

## 🛡️ Security Best Practices

### 1. Environment Files

```bash
# ✅ Correct files
.env.local        # Your actual secrets (never commit)
.env.example      # Template with example values (safe to commit)

# ❌ Never commit these
.env
.env.local
.env.production
```

### 2. API Key Security

- **Never** put real API keys in `.env.example`
- **Always** use environment-specific secrets
- **Rotate** keys regularly
- **Use** test keys for development

### 3. Git Configuration

```bash
# Add to .gitignore (already included)
.env.local
.env*.local
```

## 🌍 Production Deployment

### Environment Variables for Production:

```env
# Update URLs for production
NEXTAUTH_URL=https://yourdomain.com
NEXT_PUBLIC_APP_URL=https://yourdomain.com

# Use production API keys
NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_live_your_live_key
RAZORPAY_KEY_SECRET=your_live_secret

# Use verified domain for emails
EMAIL_FROM=noreply@yourdomain.com
```

### Platform-Specific Setup:

#### Vercel:

1. Go to project settings
2. Add environment variables
3. Deploy

#### Netlify:

1. Site settings → Environment variables
2. Add all variables
3. Deploy

#### Railway/Render:

1. Project settings
2. Environment tab
3. Add variables

## ❗ Troubleshooting

### Common Issues:

1. **Supabase Connection Failed**
   - Check URL format (should include https://)
   - Verify anon key is correct
   - Check project is active

2. **Razorpay Payment Errors**
   - Ensure using correct test/live keys
   - Check account activation status
   - Verify webhook configuration

3. **Email Not Sending**
   - Check Resend API key format
   - Verify domain ownership (production)
   - Check email address format

4. **Google OAuth Issues**
   - Verify redirect URIs match exactly
   - Check OAuth consent screen setup
   - Ensure APIs are enabled

### Getting Help:

- **Supabase**: [docs.supabase.com](https://docs.supabase.com)
- **Razorpay**: [razorpay.com/docs](https://razorpay.com/docs)
- **Resend**: [resend.com/docs](https://resend.com/docs)
- **NextAuth**: [next-auth.js.org](https://next-auth.js.org)

## 📝 Example .env.local Template

```env
# Copy this template and replace with your actual values

# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

# Razorpay Payment Gateway
NEXT_PUBLIC_RAZORPAY_KEY_ID=
RAZORPAY_KEY_SECRET=

# Resend Email Service
RESEND_API_KEY=
EMAIL_FROM=

# NextAuth Configuration
NEXTAUTH_SECRET=
NEXTAUTH_URL=http://localhost:3000

# Google OAuth (optional)
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

# Development Settings
NODE_ENV=development
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

Save this as `.env.local` and fill in your actual API keys! 🔐
