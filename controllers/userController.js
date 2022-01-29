// Implement logic 
exports.index = function(req, res) {

  // let username = req.body.username;
  // let password = req.body.password;

  let {username, password} = req.body;

  return res.status(200).json({
      message: 'Welcome to the User API',
      username: username,
      password: password,
  });
}

