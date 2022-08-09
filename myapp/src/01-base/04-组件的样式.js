import React, { Component } from 'react'
import './css/01-index.css'  //  import和import from的区别：import:相当于把外部文件全部引入添加到后面。import:把外部文件里面的某个东西拿过来使用
//  {}包裹起来的内容才可以被当作js语句执行
//  推荐使用行内样式，因为对于react来说组件是一个整体
export default class App extends Component {
  render() {
    var myname = "wangyong"
    var obj = {
        background:"yellow"
    }
    return (
      <div>
        <div style={obj}>
            {10+20}-{myname}---{2>1?'aaa':"bbb"}
        </div>
        <div className = "active">
            外部css引入
        </div>
        <label htmlFor='username'>用户名</label>
        <input type='text' id='username' placeholder='用户名'></input>
      </div>
    )
  }
}

