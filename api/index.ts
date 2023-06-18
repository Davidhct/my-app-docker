import express from "express"
import cors from "cors"
const app = express()

const port = 4000

// Enable CORS
app.use(cors())

app.get("/api/data", (req, res) => {
  const data = {
    message: "Hello world from the server!",
    value: 42,
  }
  res.send(data)
})

app.listen(port, () =>
  console.log(`Server running on port ${port}, http://localhost:${port}`)
)
