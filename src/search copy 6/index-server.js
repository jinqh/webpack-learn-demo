"use strict"

const React = require('react')
const block = require('./images/block.png')
require('./search.less')

if(module.hot) {
    module.hot.accept()
}

class Search extends React.Component {

    constructor() {
        super()
        this.state = {
            Text: null
        }
    }

    // state = {
    //     Text: null
    // }

    loadComponent = () => {
        console.log(1)
        // import('./test.js').then((Text) => {
        //     this.setState({
        //         Text: Text.default
        //     })
        // })
    }
    
    render() {
        const { Text } = this.state
        return <div className="search-text">Search text内容
            <img src={block} alt="" onClick={this.loadComponent}/>
            {Text ? <Text /> : null}
        </div>
    }
}

module.exports = <Search />