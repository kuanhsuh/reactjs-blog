import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions/index';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


class PostsShow extends Component {

  componentWillMount() {
    this.props.fetchPost(this.props.match.params.id)
  }

  onDeleteClick(){
    this.props.deletePost(this.props.match.params.id)
      .then(()=>{
        this.context.router.history.push('/')
      })
  }
  
  render() {
    const { post } = this.props;

    if(!post){
      return <div>Loading...</div>;
    }
    return (
      <div>
        <Link to='/'>Back to Index</Link>
        <button
          onClick={this.onDeleteClick.bind(this)}
          className='btn btn-danger pull-xs-right'>
          Delete Post
        </button>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
        
      </div>
    );
  }
}

PostsShow.contextTypes = {
  router: PropTypes.object
};

function mapStateToProps(state){
  return { post: state.posts.post }
}
export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);