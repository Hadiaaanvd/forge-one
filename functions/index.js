const functions = require("firebase-functions");

const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);
const nodemailer = require("nodemailer");

const sendEmailToCustomer = async (mailContent) => {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "contact@innovativemojo.com",
      pass: "dsoaobzdmylwivvp",
    },
  });

  await transporter.sendMail(mailContent, function (error, info) {
    if (error) {
      console.log("Error inside email send function", error);
    } else {
      console.log("Email sent");
    }
  });
};

exports.sendFormDataInEmail = functions.https.onCall(async (data, context) => {
  try {
    const { firstName, lastName, email, message } = data;
    if (data) {
      console.log("data", JSON.stringify(data));

      var mailOptions = {
        from: "contact@innovativemojo.com",
        to: ["team@forge1.ai", "projectlead@innovativemojo.com"],
        subject: "User submission",
        html: `<p>First Name: ${firstName}</p> <p>Last Name: ${lastName}</p>  <p>Email: ${email}</p><p>Message: ${message}</p>`,
      };
      sendEmailToCustomer(mailOptions);

      return {
        success: true,
      };
    } else {
      const errorObject = { status: 500, message: "No Data" };
      throw errorObject;
    }
  } catch (err) {
    console.log(err.message);
    return { success: false, message: err.message };
  }
});
