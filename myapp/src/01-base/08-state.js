import React, { Component } from 'react'

// 不能直接修改state状态，但是可以用setState间接修改

export default class App extends Component {
    state = {
        mytext : "收藏",
        myShow : true,
        myName : "wangyong"
    }
    render() {
        return (
        <div>
            <h1>欢迎来到react开发 { this.state.myShow?'wangyong':'xiaoming' }</h1>
            <button onClick={ () => { this.setState({ myShow : !this.state.myShow}) } }>
                { this.state.myShow?'收藏':'取消收藏' }
            </button>
        </div>
        )
    }
}
