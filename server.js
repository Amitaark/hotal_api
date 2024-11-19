const express = require('express');
const app = express();
const db = require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json());

// const Person = require('./models/Person');
// const menuItem= require('./models/Menu');

// const MenuItem = require('./models/Menu');


app.get("/", function (req, res) {
  res.send("Hello world");
});

// Get Person Detail

// app.get('/person', async (req, res) => {
//   try {
//     const data = await Person.find();
//     console.log("Data Fetched");
//     res.status(200).json(data);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ error: "Internal Server Error" })
//   }
// })

// app.get("/person/:workType", async (req, res) => {
//   const workType = req.params.workType;
//   try {
//     if (workType == 'chef' || workType == 'waiter' || workType == 'manager') {
//       const response = await Person.find({ work: workType });
//       console.log("response is fetched");
//       res.status(200).json(response);
//     } else {
//       res.status(404).json({ error: "Invalid Work Type" });
//     }
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ error: "Internal Server Error" })
//   }
// })


// create a new person document using Mongoose model
// const newPerson = new Person(data);


// save the new person to data base
// newPerson.save((error, savedPerson) => {
//   if (error) {
//     console.log("Saving The Eroor :", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   } else {
//     console.log("Data Saved Successfully");
//     res.status(200).json(savedPerson);

//   }

// })

// POSt Method used to add Data 


// app.post("/menu", async (req, res) => {

//   try {
//     const data = req.body;
//     const newMenu = new MenuItem(data);
//     const response = await newMenu.save();
//     console.log("data saved");
//     res.status(200).json(response);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ error: "Internal Server Error" })
//   }

// });

// app.get('/menu', async (req, res) => {
//   try {
//     const data = await MenuItem.find();
//     console.log("Menu Item Fetched");
//     res.status(200).json(data);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ error: "Internal Server Error" })
//   }
// })


// import person routes



const personRoutes = require("./routes/personRoutes");
const menuItemRoutes = require('./routes/menuItemRoutes');

app.use("/person", personRoutes);
app.use("/menu", menuItemRoutes);



app.listen(3000, () => {
  console.log("Listening On Port 3000");
});