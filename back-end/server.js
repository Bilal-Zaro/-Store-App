const express = require("express");
const cors = require("cors");
const app = express();
const axios = require("axios");

//midd//
app.use(express.json());
app.use(cors());

//الاوامر تبعتي //
const fake = "https://fakestoreapi.com/products";
app.get("/gettingproducts", async (req, res) => {
  try {
    const response = await axios.get(fake);
    res.json(response.data); 
  } catch (error) {
    console.error("The error is:", error);
    res.status(500).json({ message: "bte5" });
  }
});

const PORT = 6500;
app.listen(PORT, () => {
  console.log(`The server is running on http://localhost:${PORT}`);
});