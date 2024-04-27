const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const PORT = 1234;

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Handle POST request to /signup endpoint
app.post('/signup', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    // You can do further processing here, such as validation, saving to the database, etc.
    console.log(`Received sign up request with email: ${email} and password: ${password}`);
    
    // query the sql and check is the data is available. check sql vs the variables email , password
    

    // Send a response indicating success
    res.redirect('/success');
});


// Handle POST request to /signin endpoint
app.post('/signin', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    console.log(`Received sign in request with email: ${email} and password: ${password}`);
    
    // query the sql for existing data and hence proceed to success


    if (email === 'kooljiwan05@gmail.com' && password === 'deep') {
        console.log('Sign in correct');
        res.redirect('/success');
    }
    else{
        console.log('Sign in is not correct bro');
        res.send('Sign in not successful!');
        
    }
});


app.get('/success', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/success.html'));
});
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
