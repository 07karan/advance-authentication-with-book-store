import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
  name: {
    type: String,
    required: true, 
  },
  price: {
    type: Number,
    required: true, 
  },
  url:{
    type: String,
    required: true, 
  },
  category: {
    type: String,
    required: true, 
  },
  image: {
    type: String,
    required: true, 
  },
  title: String, 
});

const Book = mongoose.model("Book", bookSchema);

export default Book;
