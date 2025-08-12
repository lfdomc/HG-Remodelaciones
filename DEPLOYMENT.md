# Deployment Guide - HG Remodelaciones

## Vercel Deployment

### 1. Environment Variables Setup

Before deploying to Vercel, you need to configure the following environment variables in your Vercel project settings:

#### Required Variables:
- `RESEND_API_KEY`: Your Resend API key for email functionality
- `FROM_EMAIL`: Email address for sending emails (e.g., noreply@hgremodelaciones.com)
- `TO_EMAIL`: Email address to receive contact form submissions

#### Optional Variables (for Analytics & SEO):
- `NEXT_PUBLIC_GA_MEASUREMENT_ID`: Google Analytics Measurement ID
- `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`: Google Search Console verification code
- `NEXT_PUBLIC_BING_SITE_VERIFICATION`: Bing Webmaster Tools verification code
- `NEXT_PUBLIC_FACEBOOK_DOMAIN_VERIFICATION`: Facebook Domain verification code

### 2. Setting Environment Variables in Vercel

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add each variable with its corresponding value
4. Make sure to set the environment for each variable (Production, Preview, Development)

### 3. Email Service Configuration

#### Getting a Resend API Key:
1. Visit [Resend.com](https://resend.com)
2. Create an account or log in
3. Go to **API Keys** section
4. Create a new API key
5. Copy the key and add it to your Vercel environment variables as `RESEND_API_KEY`

#### Domain Configuration:
- For production, make sure your `FROM_EMAIL` uses a domain you own
- You may need to verify your domain in Resend for production use
- For development/testing, the current configuration will work

### 4. Analytics Setup

#### Google Analytics:
1. Create a Google Analytics 4 property
2. Get your Measurement ID (format: G-XXXXXXXXXX)
3. Add it as `NEXT_PUBLIC_GA_MEASUREMENT_ID` in Vercel

### 5. SEO Verification Setup

#### Google Search Console:
1. Add your site to Google Search Console
2. Choose HTML tag verification method
3. Copy the content value from the meta tag
4. Add it as `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`

#### Bing Webmaster Tools:
1. Add your site to Bing Webmaster Tools
2. Choose HTML meta tag verification
3. Copy the content value
4. Add it as `NEXT_PUBLIC_BING_SITE_VERIFICATION`

### 6. Build Configuration

The project is configured to build successfully even without environment variables. The email functionality will gracefully degrade to logging mode when `RESEND_API_KEY` is not provided.

### 7. Deployment Steps

1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Configure environment variables in Vercel dashboard
4. Deploy the project

### 8. Post-Deployment Verification

After deployment, verify:
- [ ] Site loads correctly
- [ ] Contact form submits without errors
- [ ] Quote form submits without errors
- [ ] Analytics tracking is working (if configured)
- [ ] SEO meta tags are present
- [ ] Sitemap is accessible at `/sitemap.xml`
- [ ] Robots.txt is accessible at `/robots.txt`

### 9. Troubleshooting

#### Build Errors:
- Ensure all environment variables are properly set
- Check that the Resend API key is valid
- Verify that email addresses are in correct format

#### Email Issues:
- Verify Resend API key is correct
- Check domain verification in Resend dashboard
- Review email logs in Vercel function logs

#### Analytics Issues:
- Verify Google Analytics Measurement ID format
- Check that the ID starts with 'G-'
- Ensure the variable name is exactly `NEXT_PUBLIC_GA_MEASUREMENT_ID`

## Local Development

1. Copy `.env.example` to `.env.local`
2. Fill in your environment variables
3. Run `npm run dev` or `pnpm dev`
4. Test contact and quote forms

## Production Checklist

- [ ] Environment variables configured in Vercel
- [ ] Resend API key is valid and domain is verified
- [ ] Google Analytics is set up and tracking
- [ ] SEO verification codes are added
- [ ] Contact forms are tested and working
- [ ] Email notifications are being received
- [ ] Site performance is optimized
- [ ] All pages load correctly
- [ ] Mobile responsiveness is verified