const loginRequired = (req, res, next) => {
  if (!req.isAuthenticated()) {
    return res.status(401).redirect("/users/login");
  }
  next();
}

export default loginRequired