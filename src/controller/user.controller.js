const { userModel } = require("../model");
const userController = {
  getUser: (req, res, next) => {
    res.json({ users: userModel.getAllUser() });
  },
  insertUser: async(req, res, next) => {
    const isComplete=await userModel.insertUser(req.body)
    if(isComplete){
        res.json({ users: userModel.getAllUser()})
    }else{
        res.json({ error: 'No se inserto data.'})
    }

  },
  updateUser: (req, res, next) => {},
  deleteUser: (req, res, next) => {},
};
module.exports = userController;
