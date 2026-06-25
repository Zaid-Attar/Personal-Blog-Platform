import React from 'react'
import{ ZapIcon } from  "lucide-react";

const RateLimitedUI = () => {
  return (
    <div>
      <ZapIcon />
      <p>You are rate limited. Please try again later.</p>
    </div>
  )
}

export default RateLimitedUI