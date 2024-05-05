const { subscriptions } = require("./db/subs");

exports.addSubscription = (req, res) => {
  subscriptions.push(req.body);
  res.status(200).json({message: 'POOOPO'});
}