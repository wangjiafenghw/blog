import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Routers from './config/router.config'
import 'antd/dist/antd.css';


ReactDOM.render(
    <Routers />,
    document.getElementById('app')
)

// hot-reload
if (module.hot) {
    module.hot.accept();
}