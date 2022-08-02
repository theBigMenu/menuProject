const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "thebigmenu2@gmail.com",
    pass: process.env.MAIL_PASSWORD,
  },
});

module.exports.sendRegistrationEmail = (user) => {
  transporter
    .sendMail({
      from: "TBM<thebigmenu2@gmail.com>",
      to: user.email,
      subject: "Welcome to The Big Menu",
      html: `
        <h3>Hi ${user.name}!</h3>
        <p>Welcome to <b>The Big Menu app</b></p>
        <p>please confirm your account using the following link:</p>
        <a href="http://localhost:3000/users/${user.id}/confirm">
            Activate your account
        </a>
    `,
    })
    .then(() => {
      console.log("email sent!");
    })
    .catch((err) => {
      console.error("error sending email, ", err);
    });
};
