import React, { Component } from 'react'
import "./css/01-index.css"
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
                    this.state.list.map((item,index) =>
                        <li key={ item.id }>
                            { item.mytext }
                            <span dangerouslySetInnerHTML={
                                {
                                    __html:item.mytext
                                }
                            }></span>
                            <button onClick = { ()=> this.handleDelClick(index) }>del</button>
                        </li>)
                }
            </ul>
            { this.state.list.length === 0 ? <div>暂无待办事项写法1</div>:null }
            { this.state.list.length === 0 && <div>暂无待办事项写法2</div> }
            <div className={ this.state.list.length===0 ?  '':'hidden'}>暂无待办事项写法3</div>
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
        this.myref.current.value = ""
    }
    handleDelClick(index) {
        console.log("delclick",index);
        let newlist = this.state.list.slice();
        newlist.splice(index,1)
        this.setState({
            list:newlist
        })
    }
}