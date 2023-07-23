const router = require("express").Router();
const Post = require("../models/post.model");
const User = require("../models/user.model");

//CREATE A POST
router.post("/", async (req, res) => {
  // const newPost = new Post(req.body);
  // console.log(req.body);
  try {
    // const savedPost = await newPost.save();
    const savedPost = await Post.create(req.body);
    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json(err);
    throw err;
  }
});

//UPDATE A POST
router.put("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await post.updateOne({ $set: req.body });
      res.status(200).json("Your post has been updated");
    } else {
      res.status(403).json("You can only update your post");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE A POST
router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    await post.deleteOne();
    res.status(200).json("Your post has been deleted");
    // if (post.userId === req.body.userId) {
    //   await post.deleteOne();
    //   return res.status(200).json("Your post has been deleted");
    // } else {
    //   return res.status(403).json("You can only delete your post");
    // }
  } catch (err) {
    res.status(500).json(err);
  }
});

//LIKE A POST
router.put("/:id/like", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post.likes.includes(req.body.userId)) {
      await post.updateOne({ $push: { likes: req.body.userId } });
      res.status(200).json("The post has been liked");
    } else {
      await post.updateOne({ $pull: { likes: req.body.userId } });
      res.status(200).json("The post has been disliked");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET A POST
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL POSTS
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL POSTS ONLY FOR ONE USER
// router.get("/allposts/:id", async (req, res) => {
//   try {
//     const oneUser = req.params.id;
//     const posts = await Post.find({ userId: oneUser });
//     res.status(200).json(posts);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.get("/allposts/:userId", async (req, res) => {
  try {
    console.log(req.params.userId);
    // const user = await User.findOne({ email: req.params.userId });
    const posts = await Post.find({ userId: req.params.userId });
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
