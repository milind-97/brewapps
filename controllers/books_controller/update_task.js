const book_model = require('../../models/books');
const mongoose = require('mongoose')
exports.update_bok = async(req,res )=>{
  const task = await book_model.findOne({
      _id: req.params.book_id
  });
  if(!task){
      return res.status(200).json({
          success: false,
          message: `Book Not Exist Having Id: ${req.params.book_id}`
      })
  }
  try{

      const update_book = await book_model.updateOne( { _id: req.params.book_id },
          {
            $set: req.body
          },)
      return res.status(200).json({
          success: true,
          message: 'Book Details Updated Successfully'
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