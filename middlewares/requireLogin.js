//take incoming requests and has the ability to modilfy it
module.exports = (req, res, next) => {
  if (!req.user) {
    return res.status(401).send({ error: "You must Log in" });
  }

  next();
};
