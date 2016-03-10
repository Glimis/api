import React from 'react'

import JsonProEmpty from '../components/JsonProEmpty'

let length=30;
export default class JsonProString extends React.Component {
    render() {
        var {name,value}=this.props;
         return (<li > 
                    <span className="key">{name}: </span> 
                    <span className="value">{value.length<length?value:(value.slice(0,length)+"...")}</span>  
                </li>)
        }
}