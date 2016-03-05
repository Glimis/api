import React from 'react'
import JsonProString from '../components/JsonProString'
import JsonProEmpty from '../components/JsonProEmpty'
import JsonProObject from '../components/JsonProObject'


export default class Box extends React.Component {
    render() {
        var {json,msg}=this.props;
    	if(msg){
            return <p className = "key" > {msg} </p>
        }  
        
        return <ul className="showjson">{this.getChildren(json)}</ul>
    }
    getChildren(json){
    	var html=[];
        for(var name in json){
            if(typeof json[name]!='function'){
        	   html.push(this.getJsonPro(name,json[name]));
            }
        }
        return html;
    }
    getJsonPro(name,value){
    	if(value===null||value===undefined){
            return (<JsonProEmpty name={name} value={value+""} > </JsonProEmpty>)
        }

        switch(typeof value){
            case "object":    
                return (<JsonProObject name={name} value={value} > </JsonProObject>);
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            default:
                 return  (<JsonProString name={name} value={value+""} > </JsonProString>)
        }
    }
}