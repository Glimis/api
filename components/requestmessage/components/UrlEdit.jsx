import React from 'react'


export default class UrlEdit extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
      var {changeMethod,method}=this.props;
        return (<div className="input-group">
  	      				<input type="text" ref='url' className="form-control" />
  	      				<div className="input-group-btn">
  		  					<button type="button" onClick={()=>{
                    changeMethod('Get')
                  }} className={method==="Get"?"btn btn-success":"btn btn-default"}>Get</button>
  		  					<button type="button" onClick={()=>{
                    changeMethod('Post')
                  }} className={method==="Post"?"btn btn-success":"btn btn-default"}>Post</button>
                  <button type="button" onClick={this.props.onSend} className="btn btn-info">Go</button>
    						  </div>
  					     </div>)
      
    }
    //业务变更

}
