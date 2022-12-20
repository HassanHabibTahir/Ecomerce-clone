const mongoos = require("mongoose");

const connectDB = async (url) => {
  try {
    await mongoos.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database Connected");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};
module.exports = connectDB;
