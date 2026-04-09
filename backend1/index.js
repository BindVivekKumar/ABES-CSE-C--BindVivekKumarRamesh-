const express = require("express");
const app = express();
const port = 8000;

app.get('/', (req, res) => {
    res.send("This is my first server");
});

app.get('/about', (req, res) => {

    const students = [
        {
            id: "1",
            name: "vivek",
            age: "21",
            class: "10",
        },
        {
            id: "2",
            name: "rahul",
            age: "22",
            class: "12",
        }
    ];

    res.send(students);   
});



app.listen(port, () => {
    console.log(`Server is running at: http://localhost:${port}`);
});
