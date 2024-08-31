const express = require('express')
const sendemail = require('./sendEmailFun')
const app = express()
const cors = require('cors')
app.use(cors({
    origin: 'https://abdelrhman-ebian-portfolio.vercel.app',
    credentials: true
}))
app.use(express.json());
app.post('/send-email',async (req, res) => {
    await sendemail({...req.body})
    res.json('Email is sent')
})
app.listen(4000, () => console.log('Example app listening on port 4000!'))