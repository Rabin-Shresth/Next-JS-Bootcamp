"use client"
import { useRouter } from 'next/navigation'
import React from 'react'


export default function NewPost() {
    
    const router= useRouter()
    const handleClick=()=>{
        setTimeout(()=> {
            router.push('/dashboard/posts');
        },3000)
    }
  return (
    <button onClick={handleClick} className='bg-blue-900 rounde-lg py-3 px-5 text-white'>New Post</button>
  )
}
