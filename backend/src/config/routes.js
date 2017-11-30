const express = require('express');

module.exports = server =>  {
    
    //API Routes
    const router = express.Router();
    server.use('/api', router);

    //TODO Routes
    const todoService = require('../api/todo/todo-service');
    todoService.register(router, '/todos');
}