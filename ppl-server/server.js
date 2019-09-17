const app = require("express")();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const userHandler = require("./router/userRouter");
const postHandler = require("./router/postRouter");
const cors = require("cors");

app.use(require("express").static("uploads"));
app.use(cors());

mongoose
  .connect("mongodb://localhost:27017/userData", { useNewUrlParser: true })
  .catch(err => console.error(err.stack));
mongoose.connection.once("open", () => {
  console.log("Connection open");
});
mongoose.connection.on("error", console.error.bind(console, "connection error:"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/user", userHandler);
app.use("/posts", postHandler);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server Listening at ${PORT}`);
});
