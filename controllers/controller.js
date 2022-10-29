const Dessert = require('../schemas/dessertSchema');

const getList = (req, res) => {
  res.send(list);
};
const getDetails = (req, res) => {
  const id = req.params.id;
  const listItem = list.find((item) => item.id === Number(id));
  res.send(listItem);
};
const postNewRecord = async (req, res) => {
  const dessert = new Dessert(req.body);
  await dessert.save();
};

module.exports = {
  getList,
  getDetails,
  postNewRecord,
};
