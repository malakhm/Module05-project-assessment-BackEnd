import mongoose from "mongoose";


const Schema = mongoose.Schema;
//user
const Users = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },
  userImage: {
    type: String,
    required: false,
    default:
      "https://res.cloudinary.com/dxg6ijfbf/image/upload/v1706512530/designs/mcro1czbj5jy0jqzymag.jpg",
  },


});


export default mongoose.model("User", Users);