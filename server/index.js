import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import mongoose from "mongoose";

import Lead from "./models/Lead.js";

dotenv.config();

const app = express();

/* Middleware */
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.json());

/* MongoDB Connection */
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB error:", err));

/* Test Route */
app.get("/", (req, res) => {
  res.send("Double A Insurance API is running");
});

/* Contact Route */
app.post("/api/contact", async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      insuranceType,
      message,
    } = req.body;

    /* Validation */
    if (!firstName || !lastName || !email || !phone || !insuranceType) {
      return res.status(400).json({
        error: "Please fill out all required fields.",
      });
    }

    /* Save to MongoDB */
    const newLead = await Lead.create({
      firstName,
      lastName,
      email,
      phone,
      insuranceType,
      message,
    });

    /* Email Setup */
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    /* Send Email */
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: "New Quote Request - Double A Insurance",
      html: `
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Insurance Type:</strong> ${insuranceType}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    res.status(201).json({
      message: "Lead saved and email sent successfully.",
      lead: newLead,
    });
  } catch (error) {
    console.error("Contact error:", error);
    res.status(500).json({
      error: "Something went wrong processing the request.",
    });
  }
});

/* Server */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});