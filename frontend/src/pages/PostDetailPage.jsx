import React, { useEffect, useState } from 'react'
import { useNavigate, useParams, Link } from 'react-router'
import { ArrowLeftIcon, Trash2Icon } from 'lucide-react'
import api from '../lib/axios'
import { toast } from 'react-hot-toast'

const PostDetailPage = () => {
  const [post, setPost] = useState({ title: '', content: '', author: '' });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const navigate = useNavigate();
  const {id} = useParams();

  useEffect(() => {
    const fetchPost = async() => {
      try {
        const res = await api.get(`/posts/${id}`);
        setPost(res.data);
      } catch (error) {
        toast.error("Error fetching post");
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  const handleDelete = async () => {
    if(!window.confirm("Are you sure you want to delete this post?")) return;

    try {
      await api.delete(`/posts/${id}`);
      toast.success("Post Successfully Deleted!!");
      navigate("/");
    } catch (error) {
      toast.error("Failed to Delete the Post.");
    }
  };

  const handleSave = async () => {
    if (!post.title.trim() || !post.content.trim() || !post.author.trim()) {
      toast.error("All Fields are Required");
      return;
    }

    setSaving(true);
    try {
      await api.put(`/posts/${id}`, {
        title: post.title,
        content: post.content,
        author: post.author,
      });
      toast.success("Post Successfully Updated!!");
      navigate("/");
    } catch (error) {
      toast.error("Failed to Update the Post.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-base-200 flex items-center justify-center">
        <span>Loading post...</span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-200">
      <div className="container mx-auto p-5">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center mb-4">
            <Link to="/" className="btn btn-ghost mb-6">
              <ArrowLeftIcon className="size-5" />
              Back to Blog
            </Link>
            <button onClick={handleDelete} className="btn btn-error mb-6 ml-auto">
              <Trash2Icon className="size-5"/>
              Delete Post
            </button>
          </div>

          <div className="card bg-base-100 shadow-md p-6">
            <div className="card-body">
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Author</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter author name"
                  className="input input-bordered"
                  value={post.author}
                  onChange={(e) => setPost({ ...post, author: e.target.value })}
                />
              </div>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Title</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter post title"
                  className="input input-bordered"
                  value={post.title}
                  onChange={(e) => setPost({ ...post, title: e.target.value })}
                />
              </div>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Content</span>
                </label>
                <textarea
                  placeholder="Enter post content"
                  className="textarea textarea-bordered min-h-32"
                  value={post.content}
                  onChange={(e) => setPost({ ...post, content: e.target.value })}
                />
              </div>
              <div className="card-actions justify-end mt-4">
                <button className="btn btn-primary" disabled={saving} onClick={handleSave}>
                  {saving ? "Saving..." : "Save Post"}
                </button>
              </div>
            </div>
          </div>    
        </div>
      </div>
    </div>
  )
}

export default PostDetailPage