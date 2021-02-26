"use strict"

import React from 'react'
import ReactDOM from 'react-dom'
import block from './images/block.png'
import './search.less'
import { common } from '../../common/index.js'
import { a } from './tree-shaking'

if(module.hot) {
    module.hot.accept()
}

class Search extends React.Component {

    state = {
        Text: null
    }

    loadComponent = () => {
        import('./test.js').then((Text) => {
            this.setState({
                Text: Text.default
            })
        })
    }
    
    render() {
        const { Text } = this.state
        return <div className="search-text">Search text内容
            <img src={block} alt="" onClick={this.loadComponent}/>
            {Text ? <Text /> : null}
        </div>
    }
}

ReactDOM.render(<Search />, document.getElementById('root'))