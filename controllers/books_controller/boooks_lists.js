const book_model = require('../../models/books');
const mongoose = require('mongoose');

exports.get_books = async (req, res) => {
    let Page = req.query.page
    let Limit = req.query.limit
    if(!req.query.page){
        Page = 1
    }
    if(!req.query.limit){
        Limit = 10
    }

    try {

        const book_id = req.query.book_id
        if(req.query.book_id){
             const book = await book_model.findOne({
                _id: book_id
            });
            if(!book){
                return res.status(200).json({
                    status: false,
                    message: `Book Not Exist Having Id: ${req.params.taskId}`
                })
            }

            return res.status(200).json({
                status: true,
                book
            })
        }

        
        
        const page = parseInt(Page);
        const limit = parseInt(Limit);
      
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
      
        const books = await book_model.find().skip(startIndex).limit(limit)

        if(books.length <= 0){
            return res.status(200).json({
                status: false,
                message: 'Records Not Found'
            })
           
        }
        return res.status(200).json({
            status: true,
            books: books
        })
          


    } catch (err) {
        console.log(err)
        return res.status(200).json({
            status: false,
            message: 'Something Went Wrong Try After Some Time'
        })

    }
}