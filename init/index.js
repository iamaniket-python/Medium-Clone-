const mongoose =require("mongoose");
const intidata =require("./data.js");
const Listing =require('../models/listing.js');


const MONGO_URL = "mongodb://127.0.0.1:27017/Medium";

main()
  .then(() => {
    console.log("connected to Database");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}


const initDB =async () =>{
    await Listing.deleteMany({});
    await Listing.insertMany(intidata.data);
    console.log("data was init")
}

initDB();