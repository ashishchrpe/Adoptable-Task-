const {
  registerService,
  loginService,
} = require("../services/adaptadoServices");

exports.registerUser = async (req, res) => {
  try {
    const response = await registerService(req.body);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message || "Registration failed",
    });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const response = await loginService(req.body);
    res.status(200).json(response);
  } catch (error) {
    res.status(401).json({
      success: false,
      message: error.message || "Login failed",
    });
  }
};
