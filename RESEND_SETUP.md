# Resend API Setup

To enable the contact form functionality, you need to set up a Resend API key.

## Steps:

1. **Sign up for Resend**
   - Go to https://resend.com
   - Create a free account

2. **Get your API Key**
   - Navigate to API Keys section
   - Create a new API key
   - Copy the key

3. **Add to .env.local**
   ```
   RESEND_API_KEY=re_your_api_key_here
   ```

4. **Verify Domain (Optional but Recommended)**
   - For production, verify your own domain in Resend
   - Update the `from` field in `/app/api/contact/route.ts`
   - Change from `onboarding@resend.dev` to `contact@yourdomain.com`

## Testing

- The default `onboarding@resend.dev` sender works for testing
- Emails will be sent to `woogi.dev@gmail.com`
- Check spam folder if emails don't appear in inbox

## Free Tier Limits

- 100 emails per day
- 3,000 emails per month
- Perfect for portfolio contact forms
