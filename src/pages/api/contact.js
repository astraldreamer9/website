export default function (req, res) {
  require('dotenv').config()

  let nodemailer = require('nodemailer')
  console.log('inside node mailer before transporter');
  const transporter = nodemailer.createTransport({
    port: 465,     
    host: "smtp.gmail.com",
       auth: {
            user: 'theastraldreamers@gmail.com',
            pass: process.env.password,
         },
    secure: true,
  });
  console.log('before maildata');
  const mailData = {
      from: 'theastraldreamers@gmail.com',
      to: 'astraldreamersnft@gmail.com',
      subject: `Message From ${req.body.fullname}`,
      text: req.body.message + " | Sent from: " + req.body.email,
      html: `<div>${req.body.message}</div><p>Sender's Email is: ${req.body.email}</p>`
  }

  transporter.sendMail(mailData, function (err, info) {
      if(err)
        console.log(err)
      else
        console.log(info);
  })

  console.log(req.body)
  res.send('success')
}