import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
import routerAuth from './routers/auth.js'
import routerAddress from './routers/address.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'
const app = express()


const contected = async ()=> {
    try{
await mongoose.connect(process.env.MONGO_URL)
console.log('mongoose coneacted')
    }catch(err){
        console.log(err)
    }
}
app.use(cors())
app.use(cookieParser())
app.use(express.json())
app.use('/api/auth/', routerAuth)
app.use('/api/', routerAuth)


app.listen(8000, ()=> {
    contected()
    console.log('server is started')
})