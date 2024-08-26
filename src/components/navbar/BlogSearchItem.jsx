import React from 'react'

export default function BlogSearchItem({ blog }) {
  return (
    <>
      <a href={blog.title} className="divul">
        <img src={blog.image} alt="" />
        <div className="info">
          <h4>{blog.title}</h4>
          <p>{blog.body}</p>
        </div>
      </a>
    </>
  )
}
