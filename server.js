const express = require("express")
const path = require("path")

const app = express()

const apiRoutes = require("./routes/api")

app.use("/api", apiRoutes)

app.use(express.static(path.join(__dirname, "public")))

const PORT = 5000

app.listen(PORT, () => {
  console.log("Server running on port 5000")
})
