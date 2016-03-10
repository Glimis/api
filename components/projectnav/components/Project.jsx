
import React from 'react'
import Api from './Api'


export default class Project extends React.Component {
  
    render() {
        var {name}=this.props.data;
        return (<li>{name}<ul>{this.getChildren()}</ul></li>)
    }
    getChildren(){
    	var {children}=this.props.data;
    	var html=[];

    	for(var i=0;i<children.length;i++){
    		
    		html.push(<Api key={i} {...children[i]}></Api>)
    	}
    	return html;
    }
}
