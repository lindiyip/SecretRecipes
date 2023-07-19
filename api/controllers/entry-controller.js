const { v4: uuidv4 } = require("uuid");
const httpStatus = require("http-status");
const {
  create: createEntry,
  list: listEntry,
} = require("../services/entry.service");
const data = [];

const create = async (req, res) => {
  try {
    // Add if statement
    if (req.userId) {
      req.body.user = req.userId;
    }
    await createEntry(req.body);
    return res.sendStatus(httpStatus.CREATED);
  } catch (e) {
    console.log("Failed to create entry", e);
    return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
};

const readAll = async (req, res) => {
  console.log(`entry-controller readAll (userId:${req.userId})`);
  try {
    const data = await listEntry(req.userId); // added argument
    return data.length > 0
      ? res.json(data)
      : res.sendStatus(httpStatus.NOT_FOUND);
  } catch (e) {
    console.log("Failed to list entries", e);
    return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
};

const getOne = async (req, res) => {
  try {
    const entry = await findById(req.params.id);
    if (entry) {
      return res.json(entry);
    }
    return res.sendStatus(httpStatus.NOT_FOUND);
  } catch (e) {
    console.log(`Failed to find entry by id ${req.params.id}`, e);
    return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
};

const updateOne = async (req, res) => {
  const condition = {
    _id: req.params.id,
  };
  const data = req.body;

  try {
    const mRes = await updateOneEntry(condition, data);
    if (mRes.matchedCount === 0) {
      return res.sendStatus(httpStatus.NOT_FOUND);
    }
    return res.json(mRes);
  } catch (e) {
    console.log(`Failed to update entry by id ${req.params.id}`, e);
    return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
};

const deleteOne = async (req, res) => {
  try {
    const status = await deleteOneEntry(req.params.id);
    return status === 0
      ? res.sendStatus(httpStatus.NOT_FOUND)
      : res.sendStatus(httpStatus.OK);
  } catch (e) {
    console.log(`Failed to delete entry by id ${req.params.id}`, e);
    return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
};

module.exports = {
  create,
  readAll,
  getOne,
  updateOne,
  deleteOne,
};
