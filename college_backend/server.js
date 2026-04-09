// const express = require("express");
// const app = express();
// const path = require("path");


// app.use(express.json());

// app.use('/static', express.static(path.join(__dirname, "public")));


// app.get("/", (req, res) => { 
//     res.send("Server is running at 3000");
// });

// app.get("/about", (req, res) => {
//     res.send("Server is running at 3001");
// });


// app.post("/", (req, res) => {
//     const { name } = req.body;

//     res.send(`Welcome ${name}`);
// });


// app.listen(3000, (error) => {
//     if (!error) {
//         console.log("Server running on port 3000");
//     } else {
//         console.log("Server not started");
//     }
// });




const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

// ✅ MongoDB connection (Direct URL)
mongoose.connect('mongodb+srv://bind74573_db_user:HpKsijhtHoOhEWFK@cluster0.7h6q7oq.mongodb.net/roomgi')
.then(() => console.log("DB Connected ✅"))
.catch(err => console.log("DB Error:", err.message));

// Test route
app.get('/', (req, res) => {
    res.send("Server is working 🚀");
});

// Server start
app.listen(5000, () => {
    console.log("Server running on port 5000");
});