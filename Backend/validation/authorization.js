// const jwt = require("jsonwebtoken");
// const User = require("../models/usermodel");
// const auth= async (req, res, next) => {
//   try {
//     const token = req.headers.authorization;
//     jwt.verify(token, process.env.JWT_SECRET, async function (err, decoded) {
//       const _id = decoded._id;
//       const user = await User.findOne({ _id: _id }).exec();

//       if (user) {
//         req= user;
//         next(error)
        
//       } else {
//         throw new Error("User is not authonticated");
//       }
//     });
//   } catch (error) {
//     next(error);
//   }
// };
// module.exports= auth
