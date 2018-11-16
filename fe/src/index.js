import React, {Component} from 'react'
import ReactDOM from 'react-dom'

class App extends Component{
    constructor(props){
        super()

    }
    render(){
        return (
            <div>
                Hello Blog
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
)

// hot-reload
if (module.hot) {
    module.hot.accept();
}