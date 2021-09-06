const nodemailer =  require('nodemailer');


export const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'human21talent@gmail.com', // generated ethereal user
      pass: 'lqijomkzdrqzhgwl', // generated ethereal password
    },
  });

  transporter.verify().then(()=>{
    console.log('ready for send emails');
  });