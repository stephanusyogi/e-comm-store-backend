const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;
const cors = require("cors");

const categoryRouter = require("./routes/category");

app.use(cors());
app.use(express.json());
app.listen(port, () => console.log(`Server is listening on port ${port}`));

async function connectDb() {
  await mongoose.connect("mongodb://localhost:27017", {
    dbName: "e-comm-store-db",
  });
  console.log("mongodb connected");
}

connectDb().catch((err) => {
  console.error(err);
});

app.get("/", (req, res) => {
  res.send("Server running");
});

app.use("/category", categoryRouter);
