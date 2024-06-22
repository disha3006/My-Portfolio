const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors()); // Enable CORS for all routes

app.use(express.json());

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "akshata.jedhe@gmail.com",
    pass: "Asj@12345asj"
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

app.post("/contact", (req, res) => {
  const name = req.body.firstName + ' ' + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;
  const mail = {
    from: email,
    to: "akshata.jedhe@gmail.com",
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      console.log(error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});

app.listen(5000, () => console.log("Server Running on port 3000"));
