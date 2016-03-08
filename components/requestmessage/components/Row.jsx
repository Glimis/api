

import React from 'react'
import Col from './Col'

export default class Row extends React.Component {
    
    render() {
        var {className}=this.props;
        return <tr className={className} >{this.getChildren()}</tr>;
    }
    getChildren(){
        var {data}=this.props;
        var html=[];
        for(var index in data){
            html.push(<Col {...this.props} col={index} key={index} value={data[index]}></Col>)
        }
        return html;
    }
}