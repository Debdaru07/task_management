const express = require('express');
const app = express();
const mongoose = require('./db/mongoose');
const bodyParser = require('body-parser');

// Load the mongoose models
const { List, Task } = require('./db/models');

// Load Middlewares
app.use(bodyParser.json())

// Route Handlers

/* 
    * GET /lists
    * Purpose :- Get all lists
*/ 
app.get('/lists', (req, res) => {
    // Return an array of all the lists in the database
    List.find({}).then((lists) => {
        res.send(lists);
    })
})


/* 
    * POST /lists
    * Purpose :- Create a List
*/
app.post('/lists', (req, res) => {
    // Create a new list item and return the new list document to the user (which contains the id).
    let title = req.body.title;
    let newList = new List({
        title
    });
    newList.save().then((listDoc) => {
        // the full list document is returned
        res.send(listDoc);
    })
})

/* 
    * PATCH /lists/:id
    * Purpose :- Update a List
*/
app.patch('/lists/:id', (req, res) => {
    // Update the specified list, with id in the request url with the new values specified in the json of the list.
})

/* 
    * DELETE /lists/:id
    * Purpose :- Delete a List
*/
app.delete('/lists/:id', (req, res) => {
    // Delete the specified list, with id in the request url with the new values specified in the json of the list.
})

app.listen(2000, () => {
    console.log('Server listening on port :- 2000');
})