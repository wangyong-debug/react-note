import React from 'react'
// import ReactDOM from 'react-dom'
import App from'./01-base/08-state'
import { createRoot } from 'react-dom/client'

const container =document.getElementById('root')
const root = createRoot(container)
root.render(<App></App>)