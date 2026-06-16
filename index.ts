import app from './server'

const PORT = process.env.PORT || 3300

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`)
})