const express = require("express");
const categoryRouter = require("./routes/category");
const bookRouter = require("./routes/book");
const cors = require("cors");

const app = express();


app.use(express.json());

app.use(cors({
    origin: "http://localhost:3000", // Frontend URL
  methods: ["GET", "POST"],       // Allowed methods
  credentials: true,  
}));

app.listen(8800, () => {
    console.log("Listening at port 8800...");
})


app.use("/", categoryRouter);
app.use("/", bookRouter);
