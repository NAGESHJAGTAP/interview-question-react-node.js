// 1. Create a Simple Express Server
// Task:
// Set up a basic Express server that responds with "Server is running" on the root route (/).

// Concepts Tested:

// Express setup
// GET route


// const express = require('express');
// const app = express();
// const port = 3000;

// app.get('/', (req, res) => {
//     res.send("nagesh jagtap");
// });

// app.listen(port, (err) => {
//     if (err) {
//         console.log('Error in server');
//     } else {
//         console.log(`Server is running on port ${port}`);
//     }
// });









// 2. GET All Users (Static or From Memory)
// Task:
// Create an endpoint /users that returns a hardcoded list of user objects.

// Concepts Tested:

// GET method
// JSON response
// Basic data structure (array of objects)



// const express= require('express');
// const app=express();
// const port=3000;

// const users=[
//     {id: 1 , name:"nagesh jagtap" , age:20 , course: "full stack web developer"}, 
//     {id:2, name:"shubham jagtap" , age:20 , course: "full stack web developer"}, 
//     {id:3, name:"om mule" , age:20 , course: "full stack web developer"}
// ];

// app.get('/users', (req , res)=>{
//     res.send(users);
// });

// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// }); 










// 3. POST New User
// Task:
// Create a POST /users route to add a user to an in-memory array.

// Concepts Tested:

// POST method
// req.body parsing
// Middleware usage (e.g., express.json())



// const express =require('express');
// const app=express();
// const port=3000;

// app.use(express.json());

// let users =[
//     {id:1, name:"nagesh jagtap", age:20, state:"Maharashtra" }
// ];

// app.get('/users', (req , res)=>{
//     res.send(users);
// });


// app.post('/users', (req, res) => {
//     const newUser = req.body;
//     newUser.id = users.length + 1; 
//     users.push(newUser);
//     res.status(201).json({ message: "User added", user: newUser }); 
// });



// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// });








// 4. GET User by ID
// Task:
// Create a route /users/:id that returns a user by ID.

// Concepts Tested:

// req.params usage
// Conditional logic



const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let users = [
    {id :1, name:"nagesh jagtap", age:20, city:"pune" },
    {id :2, name:"shubham jagtap", age:20, city:"mumbai" },
];


app.get('/users', (req, res) => {   
    res.send(users);
});


app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length + 1; 
    users.push(newUser);
    res.status(201).json({ message: "User added", user: newUser }); 
}   );                  

app.get('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id, 10); 
    const user = users.find(u => u.id === userId); 

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    res.json(user); 
}   );


app.listen(port, () => {        
    console.log(`Server is running on http://localhost:${port}`);
}   );                                                                                                                                                            