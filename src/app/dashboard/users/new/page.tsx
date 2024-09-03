"use client"
import { useRouter } from 'next/navigation'
import React from 'react'


export default function NewUser() {
    
    const router= useRouter()
    const handleClick=()=>{
        setTimeout(()=> {
            router.push('/dashboard/users');
        },3000)
    }
  return (
    <button onClick={handleClick} className='bg-blue-900 rounde-lg py-3 px-5 text-white'>NewUser</button>
  )
}
