import React, { Component } from 'react'

class Tweet extends Component {
    render() {
        let tweet = this.props.tweet;
        return (
            <div>
                <br/>
                {tweet.text}
                <br/>
                <a href="#" onClick={() => this.props.handleLike(tweet)}>
                    {tweet.liked ? 'Unlike' : 'Like'} Post
                </a>
                <br/>
                <a href="#" onClick={() => this.props.deletePost(tweet)}> Delete Post
                </a>
                <br/>
            </div>
        )
    }
}

export default Tweet