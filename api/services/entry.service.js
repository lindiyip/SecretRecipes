const { Entry } = require("../models");

const create = async (data) => {
  try {
    const created = await Entry.create(data);
    return created;
  } catch (e) {
    throw e;
  }
};

const list = async (userId) => {
  console.log(`Entry service - list (userId:${userId})`);
  try {
    let conditions = {};
    if (userId) {
      conditions = { user: userId };
    }
    const fetched = await Entry.find(conditions);
    console.log(`Entry service - ${fetched.length} entries found`);
  } catch (e) {
    throw e;
  }
};

module.exports = {
  create,
  list,
};
