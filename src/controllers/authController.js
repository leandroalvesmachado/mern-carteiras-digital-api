import authService from "../services/authService.js";

function signup(req, res) {
  const body = req.body;

  const result = authService.signup(body);

  res.send(result);
}

export default { signup };