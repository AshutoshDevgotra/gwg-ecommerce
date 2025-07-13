# Google OAuth Setup Instructions

## 1. Google Cloud Console Setup

### Step 1: Create a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Google+ API for your project

### Step 2: Create OAuth 2.0 Credentials

1. Go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "OAuth 2.0 Client IDs"
3. Choose "Web application" as the application type
4. Add your authorized redirect URIs:
   - For development: `http://localhost:3000/auth/callback`
   - For production: `https://yourdomain.com/auth/callback`
5. Save the Client ID and Client Secret

## 2. Supabase Configuration

### Step 1: Configure Google OAuth Provider

1. Go to your [Supabase Dashboard](https://supabase.com/dashboard)
2. Navigate to Authentication > Providers
3. Find "Google" and click to configure
4. Enable the Google provider
5. Enter your Google Client ID and Client Secret
6. Set the redirect URL to: `https://your-project-ref.supabase.co/auth/v1/callback`

### Step 2: Configure Site URL

1. In Supabase Dashboard, go to Authentication > URL Configuration
2. Set your Site URL:
   - For development: `http://localhost:3000`
   - For production: `https://yourdomain.com`
3. Add redirect URLs:
   - `http://localhost:3000/auth/callback` (development)
   - `https://yourdomain.com/auth/callback` (production)

## 3. Environment Variables

Add to your `.env.local` file:

```env
# Supabase (required)
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Google OAuth (optional - configured in Supabase dashboard)
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

## 4. Testing

1. Start your development server: `npm run dev`
2. Go to your site and click the login button
3. Try both email/password and Google sign-in
4. Verify that users are created in your Supabase auth table

## 5. Production Deployment

When deploying to production:

1. Update your Google OAuth authorized redirect URIs to include your production domain
2. Update your Supabase Site URL and redirect URLs
3. Make sure your environment variables are set in your hosting platform

## Troubleshooting

### Common Issues:

1. **Redirect URI Mismatch**: Make sure your redirect URIs in Google Console match exactly with your Supabase callback URL
2. **Site URL Issues**: Ensure your Supabase Site URL is set correctly for your environment
3. **CORS Errors**: Make sure your domain is added to Supabase allowed origins

### Debug Steps:

1. Check browser console for errors
2. Verify environment variables are loaded correctly
3. Check Supabase auth logs in the dashboard
4. Test with different browsers/incognito mode

## Security Notes

- Never expose your Google Client Secret in client-side code
- Use environment variables for all sensitive credentials
- Regularly rotate your API keys
- Monitor your Supabase auth logs for suspicious activity
