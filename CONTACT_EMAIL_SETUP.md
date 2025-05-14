# Contact Form Email Setup

This document provides instructions on how to set up the email functionality for the contact form in your portfolio.

## Setup Steps

1. Create a `.env.local` file in the root of your project with the following variables:
   ```
   EMAIL_USER=your-gmail-address@gmail.com
   EMAIL_PASSWORD=your-app-password
   ```

2. For Gmail, you need to use an "App Password" instead of your regular password:
   - Go to [Google Account Security](https://myaccount.google.com/security)
   - Enable 2-Step Verification if not already enabled
   - Go to [App Passwords](https://myaccount.google.com/apppasswords)
   - Select "Mail" as the app and "Other (Custom name)" as the device
   - Enter a name like "Portfolio Contact Form"
   - Click "Generate"
   - Use the generated 16-character password as your `EMAIL_PASSWORD` in the `.env.local` file

3. Restart your development server after setting up the environment variables:
   ```
   npm run dev
   ```

## Testing the Contact Form

1. Fill out the contact form with test data
2. Submit the form
3. Check your email inbox for the form submission

## Troubleshooting

If emails are not being sent:
- Check that your Gmail account's security settings allow less secure apps
- Verify that the app password is correct
- Check server logs for any error messages

## Security Considerations

- Never commit your `.env.local` file to version control
- Consider using a dedicated email account for receiving form submissions
- For production, consider using a dedicated email service like SendGrid, Mailgun, or Amazon SES 