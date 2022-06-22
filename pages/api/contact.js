export default function (req, res) {
  //   let nodemailer = require("nodemailer");

  //   async function main() {
  //     console.log(req.body);

  //     const transporter = nodemailer.createTransport({
  //       port: 465,
  //       host: "smtp.strato.de",
  //       auth: {
  //         user: "info@blockchainpresence.net",
  //         pass: "dslkaddlnvlDKVNFE",
  //       },
  //       secure: true,
  //     });

  //     let info = await transporter.sendMail({
  //       from: "info@blockchainpresence.net",
  //       to: "michaelgubler@gmx.net",
  //       subject: `Message From ${req.body.name}`,
  //       text: req.body.message,
  //       html: <div>{req.body.message}</div>,
  //     });
  //     console.log("Message sent: %s", info.messageId);
  //     // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  //     // Preview only available when sending through an Ethereal account
  //     console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  //     // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  //   }

  //   main().catch(console.error);

  "use strict";
  const nodemailer = require("nodemailer");

  // async..await is not allowed in global scope, must use a wrapper
  async function main() {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtp.strato.de",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: "info@blockchainpresence.net", // generated ethereal user
        pass: process.env.PASSWORD, // generated ethereal password
      },
    });

    // send mail with defined transport object
    let info = await transporter
      .sendMail({
        from: '"Blockchain Presence" <info@blockchainpresence.net>', // sender address
        to: "michaelgubler@gmx.net", // list of receivers
        subject: `New Message from ${req.body.name} (${req.body.email})`, // Subject line
        text: req.body.message, // plain text body
        html: `<b>${req.body.message}</b>`, // html body
      })
      .catch((err) => {
        console.log(err);
        res.status(500);
      });
    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  }

  main()
    .then(res.status(200).json({ message: "success" }))
    .catch(console.error);
}
