// Write your JS code here
import './index.css'
import {Link} from 'react-router-dom'

const BlogItem = props => {
  const {blogData} = props
  const {id, title, imageUrl, avatarUrl, topic, author} = blogData
  return (
    <Link to={`/blogs/${id}`} className="link">
      <div className="item-card">
        <img className="img-card" src={imageUrl} alt="none" />
        <div className="item-card1">
          <p className="topic">{topic}</p>
          <p className="title">{title}</p>

          <div className="item-card2">
            <img className="img" src={avatarUrl} alt="none" />
            <p className="author">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
