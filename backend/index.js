const dotenv = require("dotenv");
dotenv.config();
const connectDB = require("./src/database/db");
const app = require("./app");



connectDB()
  .then(() => {
    app.listen(process.env.PORT || 5100, () => {
      console.log(`App running at Port : ${process.env.PORT || 5100}`);
    });
  })
  .catch((err) => {
    console.log(`MongoDB connection error: ${err}`);
  });
