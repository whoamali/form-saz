const nodemailer = require("nodemailer");

const EMAIL = "formsaz.website@gmail.com";
const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD;


const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  auth: {
    user: EMAIL,
    pass: EMAIL_PASSWORD,
  },
});

transporter.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});

exports.registeredMail = async (email, username) => {

  const mailOptions = {
    from: '"Form saz Team" <${EMAIL}>',
    to: email,
    subject: "ثبت نام در وبسایت فرمساز",
    text: `کاربر عزیز شما با موفقیت با نام کاربری ${username} در وبسایت فرمساز ثبت نام کردید!`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};
