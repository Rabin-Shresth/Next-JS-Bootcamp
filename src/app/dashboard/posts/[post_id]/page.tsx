import React from 'react'
import User from "../UserIteface";
import { notFound } from 'next/navigation';

interface Params{
    params: {
        post_id:number
    }
}

export default async function UserDetailsPage({params:{post_id}}:Params) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${post_id}`)
    const data : User =await res.json();

    if(post_id>10) return notFound();

  return (
    <div>
        <table className='table table-bordered'>
            <tr>
                <th>ID</th>
                <td>{data.id}</td>
            </tr>
            <tr>
                <th>Title</th>
                <td>{data.title}</td>
            </tr>
            <tr>
                <th>Body</th>
                <td>{data.body}</td>
            </tr>
        </table>
    </div>
  )
}
