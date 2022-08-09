import React from 'react'
// import ReactDOM from 'react-dom'
import App from'./01-base/05-事件绑定-1'
import { createRoot } from 'react-dom/client'

const container =document.getElementById('root')
const root = createRoot(container)
root.render(<App></App>)