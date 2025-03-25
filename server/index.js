const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const cors = require("cors");

const authRoutes = require("./routes/auth.js");
const listingRoutes = require("./routes/listing.js");
const bookingRoutes = require("./routes/booking.js");
const userRoutes = require("./routes/user.js");
const mongoDB = require("./db/index.js");

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);
app.use(express.json());
app.use(express.static("public"));

/* ROUTES */
app.use("/auth", authRoutes);
app.use("/properties", listingRoutes);
app.use("/bookings", bookingRoutes);
app.use("/users", userRoutes);

/* MONGOOSE SETUP */
const PORT = process.env.PORT || 5000;

mongoDB();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
