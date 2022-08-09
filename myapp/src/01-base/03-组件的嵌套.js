import React, { Component } from 'react'

class Navbar extends Component{
    render(){
        return <div>navbar</div>
    }
}

class Child extends Component{
    render(){
        return <div>Child</div>
    }
}

function Swiper(){
    return (
        <div>
            <div>Swiper</div>
            <Child></Child>
        </div>
    )
}

const Tabbar = ()=> <div>Tabbar</div>

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <Swiper></Swiper>
        <Tabbar></Tabbar>
      </div>
    )
  }
}
