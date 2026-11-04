import express from "express"

const app = express()
const PORT = 5000

app.get("/api/health", (req, res) => {
    res.json({ status: "ok" })
})



app.listen(PORT, () => {
    console.log(`Server Running: http//localhost:${PORT}`)
})