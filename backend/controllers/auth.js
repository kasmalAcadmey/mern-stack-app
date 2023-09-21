import User from '../models/user.js'
// import nodemailer from 'nodemailer'
import bcrypt from 'bcrypt'

// const sendVerification =  async (email, verification)=> {
// /// configation of smpt

// const tranporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         email:"kunayn777@gmail.com",
//     pass:"Hussein_kuneen@7541182"
//     }
// })
// //// create send mail message text
// const mailOptions  = {
//     from: 'Kasmal Academy',
//     to: email,
//     subject: 'Email Verification',
//     text: `Please click the link blow to active your account http://localhost:8000/api/verify/${verification}`
// }

// /// send the message 
// try{
// await tranporter.sendMail(mailOptions)
// }catch(err){
//     console.log('Email Verification is filed')
// }
// }

export const Regsiter = async (req, res)=> {
//   const hash = bcrypt.hashSync(req.body.password)
const {password, email, name} = req.body
    try{
    const emailCheck = await User.findOne({email})
    if(emailCheck){
        return res.status(403).send('email already exist')
    }     
    ///verifiy user
    const newuser = await User({password, email, name})
    // newuser.verificationToken = crypt.randomBytes(20).toString('hex')
    // sendVerification(newuser.email, newuser.verificationToken)

    await newuser.save()
    console.log(newuser)
    res.status(200).send('Registeration is Succussfull')
    }catch(err){
        res.status(401).send({message: err.message})
    }
}

// export const veriyLInk  = async (req, res)=> {
//     const token = req.params.token
//     try{
// const user =  await User.findOne({verificationToken: token})
// if(!user){
//     return res.status(404).send('Verify not succuss')
// }

// ///
// await user.save()
// user.verified = true
// user.verificationToken = undefined
//     }catch(err){
//         res.status(200).send({message: err.message})
//     }
// }

export const Login = async (req, res)=> {
    const {email,password}= req.body
    try{
              const user = await  User.findOne({email, password})
              if(!user) return res.status(401).send('email is not found')
              res.status(200).send(user)
    }catch(err){
        res.status(401).send({message: err.message})
    }
}