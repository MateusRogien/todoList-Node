const mongoose = require("mongoose");

const connectToDB = () => {
  mongoose
    .connect(
      "mongodb+srv://MateusRogien:XIBHTePotGtk3gbL@cluster0.uksxrbq.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => {
      console.log("MongoDB Atlas Connected!");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectToDB;
