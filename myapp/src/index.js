import React from 'react'
// import ReactDOM from 'react-dom'
import App from'./01-base/09-循环渲染'
import { createRoot } from 'react-dom/client'

const container =document.getElementById('root')
const root = createRoot(container)
root.render(<App></App>)