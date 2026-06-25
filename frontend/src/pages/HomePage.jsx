import React from 'react'
import Navbar from '../components/Navbar'
import RateLimitedUI from '../components/RateLimitedUI'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

const HomePage = () => {
  const [isRateLimited, setRateLimited] = useState(false);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchNotes = async () => {
    try {
      //setLoading(true);
      const res = await axios.get("http://localhost:5090/api/notes");
      console.log(res.data);
    } catch (error) {
      console.error("Error fetching notes:", error);
    } finally {
      setLoading(false);
    }
  };
  fetchNotes();
  }, []);
  

  return (
    <div className="min-h-screen">
      {/* <Navbar /> */}
      {isRateLimited && <RateLimitedUI />}
    </div>
  )
}

export default HomePage