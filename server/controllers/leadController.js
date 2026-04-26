import Lead from "../models/Lead.js";

export const createLead = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      insuranceType,
      message,
    } = req.body;

    if (!firstName || !lastName || !email || !phone || !insuranceType) {
      return res.status(400).json({
        error: "Please fill out all required fields.",
      });
    }

    const lead = await Lead.create({
      firstName,
      lastName,
      email,
      phone,
      insuranceType,
      message,
    });

    res.status(201).json({
      message: "Lead saved successfully.",
      lead,
    });
  } catch (error) {
    console.error("Create lead error:", error);
    res.status(500).json({
      error: "Failed to save lead.",
    });
  }
};