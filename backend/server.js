import express from 'express'
import cors from 'cors'
import nodemailer from 'nodemailer'

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})

const TO_EMAIL = process.env.EMAIL_TO || 'rajarun8078@gmail.com'

const sendFormEmail = async ({ subject, html, text }) => {
  await transporter.sendMail({
    from: `"Rudra Enterprises Website" <${process.env.EMAIL_USER}>`,
    to: TO_EMAIL,
    subject,
    text,
    html,
  })
}

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Rudra Enterprises API is running' })
})

app.post('/api/contact', async (req, res) => {
  const { name, phone, email, product, message } = req.body

  if (!name || !phone || !email) {
    return res.status(400).json({ success: false, message: 'Name, phone and email are required' })
  }

  const subject = `New Contact Form Submission from ${name}`
  const text = `
Name: ${name}
Phone: ${phone}
Email: ${email}
Product/Service: ${product || 'Not selected'}
Message: ${message || 'No message'}
  `.trim()

  const html = `
    <h2>New Contact Form Submission</h2>
    <table border="1" cellpadding="8" cellspacing="0" style="border-collapse: collapse;">
      <tr><th align="left">Name</th><td>${name}</td></tr>
      <tr><th align="left">Phone</th><td>${phone}</td></tr>
      <tr><th align="left">Email</th><td>${email}</td></tr>
      <tr><th align="left">Product/Service</th><td>${product || 'Not selected'}</td></tr>
      <tr><th align="left">Message</th><td>${message || 'No message'}</td></tr>
    </table>
  `

  try {
    await sendFormEmail({ subject, html, text })
    res.json({
      success: true,
      message: 'Thank you for contacting Rudra Enterprises! Our specialist will call you shortly.',
    })
  } catch (err) {
    console.error('Error sending contact email:', err)
    res.status(500).json({ success: false, message: 'Failed to send message. Please try again later.' })
  }
})

app.post('/api/quote', async (req, res) => {
  const { name, company, email, phone, product, category, budget, message } = req.body

  if (!name || !phone || !email || !product) {
    return res.status(400).json({
      success: false,
      message: 'Name, phone, email and product/service are required',
    })
  }

  const subject = `New Quote Request from ${name}${company ? ` - ${company}` : ''}`
  const text = `
Name: ${name}
Company: ${company || 'N/A'}
Phone: ${phone}
Email: ${email}
Product/Service: ${product}
Category: ${category || 'N/A'}
Requirement/Budget: ${budget || 'N/A'}
Message: ${message || 'No message'}
  `.trim()

  const html = `
    <h2>New Quote Request</h2>
    <table border="1" cellpadding="8" cellspacing="0" style="border-collapse: collapse;">
      <tr><th align="left">Name</th><td>${name}</td></tr>
      <tr><th align="left">Company</th><td>${company || 'N/A'}</td></tr>
      <tr><th align="left">Phone</th><td>${phone}</td></tr>
      <tr><th align="left">Email</th><td>${email}</td></tr>
      <tr><th align="left">Product/Service</th><td>${product}</td></tr>
      <tr><th align="left">Category</th><td>${category || 'N/A'}</td></tr>
      <tr><th align="left">Requirement/Budget</th><td>${budget || 'N/A'}</td></tr>
      <tr><th align="left">Message</th><td>${message || 'No message'}</td></tr>
    </table>
  `

  try {
    await sendFormEmail({ subject, html, text })
    res.json({
      success: true,
      message: 'Your quote request has been submitted. Our team will contact you within 24 hours.',
    })
  } catch (err) {
    console.error('Error sending quote email:', err)
    res.status(500).json({ success: false, message: 'Failed to send quote request. Please try again later.' })
  }
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
