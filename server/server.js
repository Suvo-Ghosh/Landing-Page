import express from 'express'
import dotenv from 'dotenv'
import userRouter from './routers/userRouter.js'
import connectDB from './configs/mongoConfig.js'
import cors from 'cors'

dotenv.config()
const app = express()
const PORT = process.env.PORT || 4000


app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send("Hello")
})
app.use('/user', userRouter)

connectDB()
    .then(() => {
        console.log("Database connected")
        app.listen(PORT, () => {
            console.log("Server running on, https://localhost:4000");
        })
    })

