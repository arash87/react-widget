import React from 'react'
import ReactDOM from 'react-dom'
import Widget from './component/Widget'

let NSconfig = null

export default {
    init: config => {
        return {
            render: (args) => {
                ReactDOM.render(
                    <Widget />,
                    document.querySelector(config.selector)
                )
            }
        }
    }
}