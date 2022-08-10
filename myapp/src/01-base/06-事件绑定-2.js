import React, { Component } from 'react'
//  this.handleClick后面加括号的话他会在页面加载的时候自动执行一次
//  1标签内部写点击事件（适合简单事件） 2事件调用。普通函数和箭头函数（推荐箭头函数）
//  不过箭头函数调用函数的时候内部被调用的函数要写（）

//  call 改变this指向，自动执行函数
//  apply 改变this指向，自动执行函数
//  bind 改变this指向，自动执行函数，手动加()执行函数
//  不能自动执行，所以在这里一般使用bind
//  事件并不会将点击事件绑定到div的真实dom上，而是在document处监听所有支持的事件，当事件发生并且冒泡到document处，react将事件内容封装并且交给真正的处理函数运行
export default class App extends Component {
    a=100
    render() {
        return (
        <div>
            <input></input>
            <button onClick={ ()=>{
                console.log("click1",this.a)
            } }>add1</button>
            <button onClick = {this.handleClick2.bind(this)}>add2</button>
            <button onClick = {this.handleClick3}>add3</button>
            <button onClick = { ()=> { this.handleClick4() } }>add4</button>
        </div>
        )
    }
  handleClick2(){
    console.log("click2",this.a)
  }
  handleClick3 = ()=>{
    console.log("click3",this.a);
  }
  handleClick4 = ()=>{
    console.log("click4",this.a);
  }
}
