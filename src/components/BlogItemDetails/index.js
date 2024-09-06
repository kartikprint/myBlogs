// Write your JS
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class BlogItemDetails extends Component {
  state = {BlogData: {}, isLoading: true}

  componentDidMount = () => {
    this.getBlogData()
  }

  getBlogData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const each = await response.json()
    console.log(each)
    const BlogUpDate = {
      title: each.title,
      id: each.id,
      imageUrl: each.image_url,
      avatarUrl: each.avatar_url,
      author: each.author,
      content: each.content,
    }
    this.setState({BlogData: BlogUpDate, isLoading: false})
  }

  BlogItemRender = () => {
    const {BlogData} = this.state
    const {title, imageUrl, avatarUrl, author, content} = BlogData
    return (
      <div className="blogItem">
        <h1 className="title">{title}</h1>
        <div className="img-card">
          <img className="img" src={avatarUrl} alt="none" />
          <p className="author">{author}</p>
        </div>
        <img className="img-blog" src={imageUrl} alt="none" />
        <p>{content}</p>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="blogItem">
        {isLoading ? (
          <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
        ) : (
          this.BlogItemRender()
        )}
      </div>
    )
  }
}
export default BlogItemDetails
