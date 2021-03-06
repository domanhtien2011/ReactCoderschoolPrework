import React, { Component } from 'react'

class TweetBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: 'This is the default state of A Tweet',
            charsRemaining: 140
        }
    }

    handleChange(text) {
        this.setState({
            text: text,
            charsRemaining: 140 - text.length
        })
    }

    render() {
        return (
            <div className='container'>
                <br/>
                <input className='input'
                       type="text"
                       placeholder={this.props.prompt}
                       onChange={e => {
                           this.handleChange(e.target.value)
                       }}
                />
                <p>{this.state.charsRemaining}</p>
                <button className='button is-primary'
                    onClick={() => this.props.handleTweet(this.state.text)}
                    disabled={this.state.charsRemaining < 0}
                >
                    Tweet
                </button>
                <br/>
                <br/>
            </div>
        );
    }
}

export default TweetBox