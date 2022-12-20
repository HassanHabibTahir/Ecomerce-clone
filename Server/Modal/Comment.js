const moogoose=require('mongoose');
const Schema=moogoose.Schema;
const CommentSchema=new Schema({
    _id:Schema.Types.ObjectId,
    userId:String,
    comment:String,
   rating:Number,


})
const comment =moogoose.model('Comment',CommentSchema);
module.exports=comment;
