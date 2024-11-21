const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // To parse incoming JSON requests

// Setup Nodemailer transport
const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "jedhedisha14@gmail.com", // Replace with your email
    pass: "Dishaj123"    // Replace with your email password (or use app password if 2FA is enabled)
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

// Define the contact POST route
app.post("/contact", (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;

  const name = firstName + ' ' + lastName;
  const mail = {
    from: email,
    to: "jedhedisha14@gmail.com", // Replace with your email
    subject: "Contact Form Submission - Portfolio",
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  };

  // Send the email
  contactEmail.sendMail(mail, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).json({ message: "Something went wrong, please try again later." });
    } else {
      console.log("Message sent: " + info.response);
      res.status(200).json({ code: 200, message: "Message sent successfully!" });
    }
  });
});

// Start the server
app.listen(5000, () => {
  console.log("Server Running on port 5000");
});
