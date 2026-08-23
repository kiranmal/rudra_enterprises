import express from 'express'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Rudra Enterprises API is running' })
})

app.post('/api/contact', (req, res) => {
  const { name, phone, email, product, message } = req.body

  if (!name || !phone || !email) {
    return res.status(400).json({ success: false, message: 'Name, phone and email are required' })
  }

  console.log('Contact form submission:', { name, phone, email, product, message })

  res.json({
    success: true,
    message: 'Thank you for contacting Rudra Enterprises! Our specialist will call you shortly.'
  })
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
