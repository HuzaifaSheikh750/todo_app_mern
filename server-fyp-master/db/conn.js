const mongoose = require("mongoose");

mongoose
  .connect("mongodb://0.0.0.0:27017/vanon", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Error: ", err.message));

// mongoose

//   .connect(process.env.MONGODB_URI || "mongodb://localhost:27017/vanon", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("Connected to MongoDB"))
//   .catch((err) => console.log("Error: ", err.message));

