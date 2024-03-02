const express = require('express');
const { google } = require('googleapis');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3001;

const credentials = require('./path/to/your/credentials.json');
const SCOPES = ['https://www.googleapis.com/auth/gmail.send'];

const oAuth2Client = new google.auth.OAuth2(
  credentials.web.client_id,
  credentials.web.client_secret,
  credentials.web.redirect_uris[0]
);

const TOKEN = require('./path/to/your/token.json');
oAuth2Client.setCredentials(TOKEN);

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: 'your@gmail.com',
    clientId: credentials.web.client_id,
    clientSecret: credentials.web.client_secret,
    refreshToken: TOKEN.refresh_token,
    accessToken: oAuth2Client.getAccessToken(),
  },
});

app.use(express.json());

app.post('/api/send-email', async (req, res) => {
  const { name, email, subject, message } = req.body;

  const mailOptions = {
    from: 'your@gmail.com',
    to: email,
    subject,
    text: `Hello ${name},\n\n${message}`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info);
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
