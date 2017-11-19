import React, { Component } from 'react'

class Tweet extends Component {
    render() {
        let tweet = this.props.tweet;
        return (
            <div className="card">
                <div className='columns is-desktop is-multiline'>
                    <div className="column is-one-quarter-desktop">
                        {tweet.text}
                    </div>
                    <div className="columns is-gapless is-multiline ">
                        <div className="column ">
                            <a className='button is-link is-small'
                               href="#"
                               onClick={() => this.props.handleLike(tweet)}>
                                {tweet.liked ? 'Unlike' : 'Like'} Post
                            </a>
                        </div>
                        <div className="column ">
                            <a className='button is-link is-small'
                               href="#"
                               onClick={() => this.props.deletePost(tweet)}>
                                Delete Post
                            </a>
                        </div>
                    </div>
                </div>
                <br/>
            </div>
        )
    }
}

export default Tweet