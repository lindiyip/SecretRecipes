// const { Entry, User } = require("./models");

// // This is a IIFE
// (async () => {
//   const USER_1_UID = "aaa";
//   const USER_2_UID = "bbb";
//   const ENTRY_MOCK_DATA = {
//     summary: "Mock Summary",
//     currentDate: Date.now(),
//     activity: "Mock Activity",
//     intensityRate: 3,
//   };

//   // Check for expect user to be present
//   let userList = await User.find({
//     uid: {
//       $in: [USER_1_UID, USER_2_UID],
//     },
//   });

//   // Create if not exist
//   if (userList.length >= 2) {
//     console.log("Nothing to bootstrap");
//     return;
//   }

//   // Create users
//   const user1 = new User({
//     uid: USER_1_UID,
//     email: `${USER_1_UID}@example.com`,
//   });
//   await user1.save();
//   const user2 = new User({
//     uid: USER_2_UID,
//     email: `${USER_2_UID}@example.com`,
//   });
//   await user2.save();
//   console.log("bootstrap.js - created user accounts");

//   // Create sample entries that is associated to users
//   const loop = [user1, user1, user2, user2];
//   loop.forEach(async (u) => {
//     const tempEntry = new Entry({
//       ...ENTRY_MOCK_DATA,
//       summary: "Mock entry for user aaa",
//       user: u._id,
//     });
//     await tempEntry.save();
//     console.log("bootstrap.js - created entry record");
//   });
// })();
