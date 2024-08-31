const { text } = require("express")
const nodemailer = require("nodemailer")
require("dotenv").config()
const sendemail = async (options) => {  
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    service:"gmail",
    port: process.env.EMAIL_PORT,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  })
  const msgOpt = {
    from: options.name,
    to: process.env.EMAIL_USER ,
    subject: options.subject,
    text:`
    email: ${options.email}
    ${options.message}`,
  }
  await transporter.sendMail(msgOpt)
}
module.exports = sendemail