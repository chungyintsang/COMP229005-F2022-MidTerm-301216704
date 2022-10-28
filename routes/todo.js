// File name: COMP229005-F2022-MidTerm-301216704
// Author's name: Chung Yin Tsang
// StudentID: 301216704
// Web App name: COMP229005-F2022-MidTerm-301216704

var express = require('express');
var router = express.Router();

let todoController = require('../controllers/todo');

// Helper function for guard purposes
function requireAuth(req, res, next)
{
    // check if the user is logged in
    
    // ADD YOUR CODE HERE
    
    if(req.isAuthenticated()){
        //if user is logged in, go to next function
        next();
    }else{
        //if user is not loggged in, copy the originalUrl to the session
        req.session.url = req.originalUrl;
        return res.redirect('/users/signin');
    }
    

}

/* GET list of items */
router.get('/list', todoController.todoList);

// Route for Details
router.get('/details/:id', todoController.details);

// Routers for edit
router.get('/edit/:id', requireAuth, todoController.displayEditPage);
router.post('/edit/:id', requireAuth, todoController.processEditPage);

// Delete
router.get('/delete/:id', requireAuth, todoController.performDelete);

/* GET Route for displaying the Add page - CREATE Operation */
router.get('/add', requireAuth, todoController.displayAddPage);

/* POST Route for processing the Add page - CREATE Operation */
router.post('/add', requireAuth, todoController.processAddPage);

module.exports = router;