import React from 'react'

import JsonParse from '../components/JsonParse'

export default class JsonPro extends React.Component {
    render() {
        var {name,value}=this.props;
        return (<li> 
                    <span className="key">{name}: </span> 
                    <span className="value">{'{}'} {Object.getOwnPropertyNames(value).length} keys</span> 
                     <JsonParse json={value}></JsonParse>
                </li>)
    }
}