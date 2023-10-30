module.exports = task_toutes => {
    const router = require('express').Router()
  
    // route to create task
    router.post('', require('../controllers/books_controller/add_book').add_book)

    // // route to get all tasks
    router.get('', require('../controllers/books_controller/boooks_lists').get_books)

    //  // route to edit task
    router.patch('/:book_id', require('../controllers/books_controller/update_task').update_bok)

    //  // route to get matrices
     router.delete('/:book_id', require('../controllers/books_controller/delete_books').deletebook)
  
    task_toutes.use('/api/books', router)
  }
  