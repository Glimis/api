import React from 'react'

import Jsonformat from '../components/Jsonformat'

export default class JsonPro extends React.Component {
    render() {
        var {name,value}=this.props;
        return (<li> 
                    <span className="key">{name}: </span> 
                    <span className="value">{'{}'} {Object.getOwnPropertyNames(value).length} keys</span> 
                     <Jsonformat json={value}></Jsonformat>
                </li>)
    }
}