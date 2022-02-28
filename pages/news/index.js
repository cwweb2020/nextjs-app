import Link from 'next/link'
import React from 'react'

const newsPage = () => {
  return (
    <>
        <h1>News page</h1>
        <ul>
            <li><Link href="/news/most-important">Most important news</Link></li>
            <li>International news</li>
        </ul>
    </>
  )
}

export default newsPage