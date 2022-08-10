import React, { Component } from 'react'

export default class App extends Component {
    myref = React.createRef()
    render() {
        return (
        <div>
            <input ref={this.myref}></input>
            <button onClick={ ()=>{
                console.log("click1",this.myref.current.value)
            } }>add1</button>
        </div>
        )
    }
}