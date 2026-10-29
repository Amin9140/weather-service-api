import express from "express";

const router = express.Router();

const SUPPORTED_CITIES = ["London", "Tokyo", "New York", "Paris", "Sydney"];

router.get("/", (req, res) => {
  res.json({ cities: SUPPORTED_CITIES });
});

// UPDATED (Lesson 16): try/catch so a bad city returns 404 instead of crashing
router.get("/:city", async (req, res) => {
  const { city } = req.params;
  try {
    const response = await fetch(
      `https://weather-proxy.freecodecamp.rocks/api/city/${city}`,
    );
    if (!response.ok) throw new Error(`Status ${response.status}`);
    const data = await response.json();
    res.json({
      city: data.name,
      temperature: data.main.temp,
      description: data.weather[0].description,
    });
  } catch (error) {
    res.status(404).json({ error: `Could not fetch weather for ${city}` });
  }
});

export default router;