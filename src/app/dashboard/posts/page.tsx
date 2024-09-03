import React from 'react';
import Link from 'next/link';
import { FaEye } from "react-icons/fa";

interface Post {
    id: number;
    title: string;
    body: string;
}

export default async function UsersPage() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data : Post[]= await res.json();

  return (
    <div>
        <Link href="/dashboard/posts/new" className='underline'>New Post</Link>      
        <table className='table table-bordered'>
            <thead>
                <th>ID</th>
                <th>Title</th>
                <th>Body</th>
                <th>Actions</th>
            </thead>   
            <tbody>
                {
                    data.map((post)=>{
                        return(
                            <tr key={post.id}>
                                <td>{post.id}</td>
                                <td>{post.title}</td>
                                <td>{post.body}</td>
                                <td>
                                    <Link href={`/dashboard/posts/${post.id}`} className='btn btn-primary'>
                                        <FaEye /> View  
                                    </Link>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody> 
        </table>  
    </div>
  )
}
