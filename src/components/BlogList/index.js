import {Component} from 'react'
import BlogItem from '../BlogItem'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class BlogList extends Component {
  state = {blogData: [], isLoading: true}

  componentDidMount = () => {
    this.getBlogData()
  }

  getBlogData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const db = await response.json()
    console.log(db)
    const updateData = db.map(each => ({
      id: each.id,
      title: each.title,
      imageUrl: each.image_url,
      avatarUrl: each.avatar_url,
      topic: each.topic,
      author: each.author,
    }))
    this.setState({blogData: updateData, isLoading: false})
  }

  render() {
    const {blogData, isLoading} = this.state
    return (
      <div>
        {isLoading ? (
          <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
        ) : (
          blogData.map(each => <BlogItem blogData={each} key={each.id} />)
        )}
      </div>
    )
  }
}

export default BlogList
