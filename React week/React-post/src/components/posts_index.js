import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index'
import { Link } from 'react-router'

class PostsIndex extends Component {
    // react will call the componrnywillmountd to get the data before the dom loads up.
    componentWillMount() {
        this.props.fetchPosts()

    }
    render() {
        return (
            <div>
                <div className='text-xs-right'>
                    <Link to='/posts/new' className='btn btn-primary'>Add a Posts</Link>
                </div>
                List of blog posts
            </div>
        );
    }
}

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({ fetchPosts }, dispatch)
// }
// this is the same as putting fetchPosts: fetchPosts to the connect

export default connect(null, {fetchPosts: fetchPosts})(PostsIndex);