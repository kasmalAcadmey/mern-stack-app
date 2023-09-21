import express from 'express'
import { Login, Regsiter } from '../controllers/auth.js'

const router = express()

router.post('/register', Regsiter)
router.post('/login', Login)
// router.get('/verify/:token', veriyLInk)



export default router