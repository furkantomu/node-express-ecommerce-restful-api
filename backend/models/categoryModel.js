import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
  categoryName:{type:String,required:true},
  categoryId:{type:Number,required:true},
},{
  timestamps:true,
});

const Category = mongoose.model('Category',categorySchema);

export default Category;