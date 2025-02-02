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
    List.findOneAndUpdate({_id: req.params.id}, {
        $set: req.body
    }).then(() => {
        res.sendStatus(200);
    })
})

/* 
    * DELETE /lists/:id
    * Purpose :- Delete a List
*/
app.delete('/lists/:id', (req, res) => {
    // Delete the specified list, with id in the request url with the new values specified in the json of the list.
    List.findOneAndDelete(
        { _id: req.params.id }, 
    ).then((removedListDoc) => {
        res.send(removedListDoc);
    })
})


/* 
    * GET /lists/:id/tasks/
    * Purpose :- return all the tasks that belongs to a specific list
*/

app.get('/lists/:listId/tasks', (req, res) => {
    Task.find({
        _listId: req.params.listId
    }).then((tasks) => {
        res.send(tasks)
    }).catch((err) => {
        console.error(err);
        res.status(400).send(err);
    });;
})


/* 
    * POST /lists/:listId/tasks/
    * Purpose :- Create a new Task entry under a list.
*/

app.post('/lists/:listId/tasks', (req, res) => {
    let newTask = new Task({
        title: req.body.title,
        _listId: req.params.listId
    });
    newTask.save().then((newTaskDoc) => {
        console.log(newTaskDoc)
        res.send(newTaskDoc);
    })
})

/* 
    * PATCH /lists/:listId/tasks/:taskId
    * Purpose :- Update an existing Task entry under a list.
*/

app.patch('/lists/:listId/tasks/:taskId', (req, res) => {
    Task.findOneAndUpdate({_id: req.params.taskId}, {
        $set: {
            "title": req.body.title,
            "_listId": req.params.listId
        }
    }).then(() => {
        res.sendStatus(200);
    })
})

/* 
    * DELETE /lists/:listId/tasks/:taskId
    * Purpose :- Delete an existing Task entry under a list.
*/

app.delete('/lists/:listId/tasks/:taskId', (req, res) => {
    Task.findOneAndDelete({_id: req.params.taskId}
    ).then((removedListDoc) => {
        res.send(removedListDoc);
    })
})


app.listen(2000, () => {
    console.log('Server listening on port :- 2000');
})