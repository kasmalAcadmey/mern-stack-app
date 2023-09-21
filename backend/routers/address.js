import express from 'express'
import User from '../models/user.js'

const router = express()

router.post('/address', async (req,res)=> {
    const {userId, address} = req.body
    try{
const user = await User.findById(userId)
if(!user) return res.status(404).send('addres is not found')
user.addresses.push(address)
await user.save()
res.status(200).send('succesfully saved address')
    }catch(err){
        res.status(404).send({message: err.message})
    }
})


/// get address

router.get('/address/:userId',async (req, res)=> {
    try{
const user = await  User.findById(req.params.userId)
if(!user) return res.status(500).send('user not found')
const address = user.addresses
res.status(200).send(address)
    }catch(err){
        res.status(200).send({message: err.message})
    }
})


export default router