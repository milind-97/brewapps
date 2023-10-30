const book_model = require('../../models/books');
const mongoose = require('mongoose')
exports.deletebook =async(req,res)=>{
    const book = await book_model.findOne({_id: req.params.book_id})
    if(!book){
        return res.status(200).json({
            success: false,
            message: 'Book Not Exist'
        })
    }
    try{
        book.remove()
        return res.status(200).json({
            success: true,
            message: "Book Deleted Successfully"
        })
    }catch(err){
        if (err instanceof mongoose.Error.ValidationError) {
            // Mongoose validation error
            const validationErrors = {};
            for (const field in err.errors) {
                // Pick the first validation error and send it
                validationErrors[field] = err.errors[field].message;
                break;
            }
            return res.status(200).json({ status: false , message: validationErrors[Object.keys(validationErrors)[0]] });
        } else {
            // Other error, handle as needed
            console.error(err);
            res.status(200).json({ status: false , message: 'Internal Server Error' });
        }
        }
    }