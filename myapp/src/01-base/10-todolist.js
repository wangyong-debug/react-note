import React, { Component } from 'react'
//  不能修改state里面的原状态，否则会有不可预期的后果
//  let 变量 = 状态里面的值再对变量修改。再把修改后的setState回去
export default class App extends Component {
    myref = React.createRef()
    state = {
        list: [
            {
                mytext: "111",
                id:1
            },
            {
                mytext: "222",
                id:2
            },
            {
                mytext: "333",
                id:3
            }
        ]
    }

    render() {
        return (
        <div>
            <input ref={this.myref}></input>
            <button onClick = { this.handleClick }>add</button>
            <ul>
                {
                    this.state.list.map(item =>
                        <li key={ item.id }>{ item.mytext }</li>)
                }
            </ul>
        </div>
        )
    }

    handleClick = () => {
        let newlist = [...this.state.list];
        newlist.push({
            id: Math.random()*10000000,//  生成不同随机数的函数
            mytext: this.myref.current.value
        })
        console.log("click",this.myref.current.value);
        this.setState({
            list:newlist
        })
    }
}