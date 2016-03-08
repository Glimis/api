import React from 'react'

import JsonProEmpty from '../components/JsonProEmpty'
export default class JsonProString extends React.Component {
    render() {
        var {name,value}=this.props;
         return (<li > 
                    <span className="key">{name}: </span> 
                    <span className="value">{value}</span>  
                </li>)
        }
}