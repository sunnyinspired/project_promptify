"use client"

import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"

import Profile from "@components/Profile"

const MyProfile = () => {
    const { data: session } = useSession()
    const router = useRouter()
    const [posts, setPosts] = useState([])
    const handleEdit = async (post) =>{
        router.push(`/update-prompt?id=${post._id}`)
    }
    const handleDelete = async (post) =>{
        const hasConfirmed = confirm("Are you sure you want to delet this prompt?");
        if(hasConfirmed){
            try {
                const postId = post?._id.toString();
                await fetch(`/api/prompt/${postId}`,{
                    method: 'DELETE'
                });
                const filteredPosts = posts.filter((p) => p._id !== postId);
                setPosts(filteredPosts)
            } catch (error) {
                console.log(error)
            }

        }
    }
    useEffect(() => {
        const fetchPosts = async () =>{
          const response = await fetch(`/api/users/${session?.user.id}/posts`);
          const data =  await response.json();
    
          setPosts(data)
        }
    
        if(session?.user.id){
            fetchPosts()
        }
      }, [])
  return (
   <Profile
    name = "My "
    desc = "Welcome to your personal profile page"
    data = {posts}
    handleEdit = {handleEdit}
    handleDelete = {handleDelete} 
   />
  )
}

export default MyProfile