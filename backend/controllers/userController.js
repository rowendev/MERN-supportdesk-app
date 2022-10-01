const asyncHandler = require("express-async-handler");

// @desc    register a new user
// @route   /api/users
// @access  public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  // validation
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please include all fields");
  }

  res.send("註冊");
});

// @desc    login a user
// @route   /api/users/login
// @access  public
const loginUser = asyncHandler(async (req, res) => {
  res.send("登入");
});

module.exports = {
  registerUser,
  loginUser,
};
