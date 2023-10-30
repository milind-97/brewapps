const book_model = require('../../models/books');
const mongoose = require('mongoose')
exports.add_book = async(req,res)=>{
    try{
        const book = await book_model.create(req.body)
        return res.status(200).json({
            status: true,
            message: 'Book Added Successfully'
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