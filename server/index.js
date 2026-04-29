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
    origin: process.env.CLIENT_URL,
    credentials: true,
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
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      requireTLS: true,
      family: 4,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      connectionTimeout: 20000,
      greetingTimeout: 20000,
      socketTimeout: 20000,
    });

    /* Send Email */
  try {
    await transporter.sendMail({
      from: `"Double A Insurance" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: "New Quote Request - Double A Insurance",
      html: `
        <div style="font-family: Arial, sans-serif; background-color: #f3f4f6; padding: 30px;">
          <div style="max-width: 600px; margin: auto; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.08);">
            
            <!-- Header -->
            <div style="background-color: #050514; color: white; padding: 20px 24px;">
              <h2 style="margin: 0; font-size: 20px;">Double A Insurance Agency<sup>LLC</sup></h2>
              <p style="margin: 4px 0 0; font-size: 14px; opacity: 0.8;">
                New Quote Request
              </p>
            </div>

            <!-- Content -->
            <div style="padding: 24px;">
              <p style="margin-bottom: 20px; color: #111;">
                You have received a new quote request from your website.
              </p>

              <div style="margin-bottom: 16px;">
                <strong>Name:</strong><br/>
                ${firstName} ${lastName}
              </div>

              <div style="margin-bottom: 16px;">
                <strong>Email:</strong><br/>
                <a href="mailto:${email}" style="color: #050514;">${email}</a>
              </div>

              <div style="margin-bottom: 16px;">
                <strong>Phone:</strong><br/>
                <a href="tel:${phone}" style="color: #050514;">${phone}</a>
              </div>

              <div style="margin-bottom: 16px;">
                <strong>Insurance Type:</strong><br/>
                ${insuranceType}
              </div>

              ${
                message
                  ? `
              <div style="margin-top: 20px;">
                <strong>Message:</strong>
                <div style="margin-top: 8px; padding: 12px; background: #f9fafb; border-radius: 8px; color: #333;">
                  ${message}
                </div>
              </div>`
                  : ""
              }
            </div>

            <!-- Footer -->
            <div style="padding: 16px 24px; background: #f9fafb; font-size: 12px; color: #777;">
              &copy; ${new Date().getFullYear()} Double A Insurance Agency<sup>LLC</sup>
            </div>

          </div>
        </div>
      `,
    });
    await transporter.sendMail({
        from: `"Double A Insurance" <${process.env.EMAIL_USER}>`,
        to: email, // 👈 send to customer
        subject: "We Received Your Request - Double A Insurance",
        html: `
          <div style="font-family: Arial, sans-serif; padding: 30px; background: #f3f4f6;">
            <div style="max-width: 600px; margin: auto; background: white; border-radius: 12px; padding: 24px;">
              
              <h2 style="color: #050514;">Thank You, ${firstName}!</h2>

              <p style="margin-top: 12px;">
                We’ve received your request and a member of our team will reach out shortly.
              </p>

              <div style="margin-top: 20px; padding: 12px; background: #f9fafb; border-radius: 8px;">
                <strong>Request Type:</strong> ${insuranceType}
              </div>

              <p style="margin-top: 20px;">
                If you need immediate assistance, feel free to call us.
              </p>

              <p style="margin-top: 30px; font-size: 14px; color: #777;">
                Double A Insurance Agency<sup>LLC</sup>
              </p>

            </div>
          </div>
        `,
      });
  } catch (emailError) {
    console.error("Email error:", emailError);
  }

    res.status(201).json({
      message: "Request submitted successfully.",
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