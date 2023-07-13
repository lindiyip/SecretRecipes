const { v4: uuidv4 } = require("uuid");
const httpStatus = require("http-status");
const data = [];

const create = (req, res) => {
  req.body.id = uuidv4();
  data.push(req.body);
  res.sendStatus(httpStatus.CREATED);
};

const readAll = (req, res) => {
  if (data.length > 0) {
    return res.json(data);
  }
  return res.sendStatus(httpStatus.NOT_FOUND);
};

const getOne = (req, res) => {
  const found = data.find((d) => d.id === req.params.id);
  if (found) {
    res.json(found);
  } else {
    res.sendStatus(httpStatus.NOT_FOUND);
  }
};

const updateOne = (req, res) => {
  const id = req.params.id;
  const dataToUpdate = req.body;

  let found = data.find((d) => d.id === id);
  if (found) {
    for (const prop in dataToUpdate) {
      found[prop] = dataToUpdate[prop];
    }

    return res.sendStatus(httpStatus.OK);
  }

  return res.sendStatus(httpStatus.NOT_FOUND);
};

const deleteOne = (req, res) => {
  const id = req.params.id;

  const index = data.findIndex((d) => d.id === id);
  if (index > -1) {
    data.splice(index, 1);
    return res.sendStatus(httpStatus.OK);
  }
  return res.sendStatus(httpStatus.NOT_FOUND);
};

module.exports = {
  create,
  readAll,
  getOne,
  updateOne,
  deleteOne,
};
