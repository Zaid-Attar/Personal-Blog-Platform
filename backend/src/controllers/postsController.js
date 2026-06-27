import Post from "../models/Post.js";

export async function getAllPosts(req, res) {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.status(200).json(posts);
  } catch (error) {
    console.error("Error in getAllPosts.", error);
    res.status(500).json({ message: "Error fetching posts." });
  }
}

export async function getOnePost(req, res) {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: "Post not found." }); 
    res.status(200).json(post); 
  } catch (error) {
    console.error("Error in getOnePost.", error);
    res.status(500).json({ message: "Error fetching post." });
  }
}

export async function createPost(req, res) {
  try {
    const { title, content, author } = req.body;
    const post = new Post({ title, content, author });

    const savedPost = await post.save();
    res.status(201).json(savedPost);
  } catch (error) {
    console.error("Error in createPost.", error);
    res.status(500).json({ message: "Error creating post." });
  }
}

export async function updatePost(req, res){
  try {
    const { title, content, author } = req.body;
    const updatedPost = await Post.findByIdAndUpdate(req.params.id, { title, content, author }, { new: true });
    if (!updatedPost) {
      return res.status(404).json({ message: "Post not found." });
    }
    res.status(200).json({message: "Post updated successfully.", post: updatedPost});
  } catch (error) {
    console.error("Error in updatePost.", error);
    res.status(500).json({ message: "Error updating post." });
  }
}

export async function deletePost(req, res){
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    if (!post) {
      return res.status(404).json({ message: "Post not found." });
    }
    res.status(200).json({message: "Post deleted successfully.", post});
  } catch (error) {
    console.error("Error in deletePost.", error);
    res.status(500).json({ message: "Error deleting post." });
  }
}