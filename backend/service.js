const express = require("express");
const cors = require("cors");
const { google } = require("googleapis");
const app = express();
require("dotenv").config();
app.use(cors());

app.use(express.json());
const nodemailer = require("nodemailer");

const auth = new google.auth.GoogleAuth({
  keyFile: "credentials.json",
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});
const SHEET_ID = "1PBFExAWhh8mpZD-JFavMgXzsQAhgHVgkqEOI6WOTKtk";


const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,       
    pass: process.env.EMAIL_PASS,        
  },
});

app.post("/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const client = await auth.getClient();
    const sheets = google.sheets({ version: "v4", auth: client });

    await sheets.spreadsheets.values.append({
      spreadsheetId: SHEET_ID,
      range: "Form Responses 1!A:D",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[new Date().toLocaleString(), message,name, email]],
      },
    });

       await transporter.sendMail({
      from: `"Portfolio Contact" <process.env.EMAIL_USER>`,
      to: "irshadkk36017@gmail.com", // where you want to receive
      subject: "New Contact Form Message",
      html: `
        <h3>New Message Received</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });





    res.json({ success: true });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false });
  }
});


app.get("/", (req, res) => {
  res.send("Server is running");
});

app.listen(5000, () => console.log("Server running on 5000"));