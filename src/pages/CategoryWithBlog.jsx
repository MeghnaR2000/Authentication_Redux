import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const CategoryWithBlog = () => {
  const { categoryBlog } = useSelector((state) => state?.catWithBlog)
  console.log(categoryBlog.data?.postText, 'blog_details')
  const id = useParams()
  const dispatch = useDispatch()

  return (
    <div>
      <h1>category with blog</h1>
    </div>
  )
}

export default CategoryWithBlog
