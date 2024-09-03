import Link from 'next/link'
import React, { Children, ReactNode } from 'react'

// interface Props{
//     children: ReactNode
// } // children argument ma error hatauna

export default function layout({children}:{children:ReactNode}) {
  return (
    <>
        <div className='p-8 bg-slate-900 text-white flex gap-5 uppercases'>
            <Link href="/dashboard">Dashboard</Link>
            <Link href="/dashboard/products">Products</Link>
            <Link href="/dashboard/users">Users</Link>
            <Link href="/dashboard/posts">Posts</Link>
        </div>
        <main className='p-8'>
            {children}
        </main>
    </>
  )
}
