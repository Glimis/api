

import React from 'react'
import Col from './Col'

export default class Row extends React.Component {
    
    render() {
        return <tr className="active" >{this.getChildren()}</tr>;
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