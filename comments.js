// Create web server
// Create a page with a form that has a textarea for a comment
// Create a route that handles the form submission and adds the comment to a list of comments
// Create a route that returns a list of comments
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true })


