import 'bootstrap-css'
import 'bootstrap'
import '../less/index.less'

import React from 'react'
import Project from './Project'

export default class JsonParse extends React.Component {
  
    render() {
       
        return (<div className="projectsWrap">
                    <div className="projects">
                        {this.getChildren()}
                    </div>    
                </div>)
        
    }
    getChildren(){
        var html=[];
         var {data}=this.props;
         for(var i=0;i<data.length;i++){
            html.push(<Project key={i} data={data[i]}></Project>);
         }
         return html;
    }
}
