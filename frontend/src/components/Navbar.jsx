import React from 'react'
import { Link } from 'react-router'
import { PlusIcon } from 'lucide-react'

const Navbar = () => {
  return (
    <header className="bg-gray-800 border-b border-base-content/10">
        <div className="mx-auto max-w-6xl p-4">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-green-500 font-mono tracking-tighter">DevDairy</h1>
                <div className="flex items-center gap-4">
                    <Link to={"/create"} className="btn btn-primary">
                    <PlusIcon className="size-5" />
                    <span>New Blog</span>
                    </Link>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Navbar