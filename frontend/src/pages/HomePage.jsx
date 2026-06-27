import React from 'react'
import Navbar from '../components/Navbar'
import RateLimitedUI from '../components/RateLimitedUI'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { NotebookIcon } from 'lucide-react'
import PostCard from '../components/PostCard'
import { formatDate } from '../lib/utils'
import api from '../lib/axios'
import PostNotFound from '../components/PostNotFound'

const HomePage = () => {
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
    try {
      const res = await api.get("/posts");
      setPosts(res.data);
      setIsRateLimited(false); 
    } catch (error) {
      console.error("Error fetching posts:", error);
      if(error.response && error.response.status === 429) {
        toast.error("Slow down mann!!, you're too fast!!", {
          duration: 4000,
          icon: "💀",
        });
        setIsRateLimited(true); 
      } else {
        toast.error("Failed to fetch posts.");
      }
    } finally {
      setLoading(false);
    }
  };
  fetchPosts();
  }, []);
  

  return (
    <div className="min-h-screen">
      {isRateLimited && <RateLimitedUI />}

      <div className="max-w-7xl mx-auto p-4 mt-6">
        {loading && <div className="text-center text-primary py-10">Loading...</div>}
      
        {posts.length === 0 && !isRateLimited && !loading && <PostNotFound />}

        {posts.length > 0 && !isRateLimited && (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <PostCard key={post._id} post={post} setPosts={setPosts} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default HomePage