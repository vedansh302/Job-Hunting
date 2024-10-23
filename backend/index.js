import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"
import dotenv from "dotenv"
import connectDB from "./utils/db.js"
import userRouter from "./routes/user.route.js"
import companyRoute from "./routes/company.route.js"
import JobRoute from "./routes/job.route.js"
import ApplicationRoute from "./routes/application.route.js"

dotenv.config({})

const app = express()

// middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

const corsOption = {
    origin: "http://localhost:5173",
    credentials: true
}
app.use(cors(corsOption))

const port = process.env.PORT || 8000
// api's
app.use("/api/v1/user",userRouter)
app.use("/api/v1/company",companyRoute)
app.use("/api/v1/job",JobRoute)
app.use("/api/v1/application",ApplicationRoute)

app.listen(port, (req,res) => {
    console.log(`server running on port ${port}`)
    connectDB()
})