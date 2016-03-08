import '../less/index.less'
import 'bootstrap-css'
import 'bootstrap'

import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Grid from '../components/Grid'
import UrlEdit from '../components/UrlEdit'
import fetch from 'isomorphic-fetch'

export default class RequestMessage extends Component{
	constructor(props) {
        super(props);
        this.state={
            data:[['','']],
            method:"Get"
        }
    }
	render(){
		var {changeMethod,changeUrl,changeGridData,onSend}=this.props;
		return (<div className="requestmessage">
					<UrlEdit ref='UrlEdit' changeMethod={changeMethod.bind(this)} onSend={onSend.bind(this)} method={this.state.method} ></UrlEdit>
   					<Grid data={this.state.data}></Grid>
				</div>)
	}

}


RequestMessage.defaultProps={
				afterGetError:function(e){
					console.log('error--',e)
				},
				afterGetData:function(){
					console.log('afterGetData')
				},
				onSend:function(){
					var {afterGetError,afterGetData}=this.props;
					var body={};
					for(var i=0;i<this.state.data.length;i++){
						var dt=this.state.data[i];
						if(dt[0]){
							body[dt[0]]=dt[1];
						}
					}
					var params={
						url:this.refs.UrlEdit.refs.url.value,
						method:this.state.method,
						body:body
					}
					

					fetch(params.url,{
				 		method: params.method,
						body:params.method.toLocaleLowerCase()==='POST'?JSON.stringify(params.body):undefined
					})
					.then(function(response){
							response.json().then(function(data) {
      							afterGetData(data);
    						}, function(e) {
    							
  							afterGetError(e);
						});
					}, function(e) {
						
  						afterGetError(e);
					})

				},
				changeMethod:function(method){
				      this.setState({
				        method:method
				      })
		    	},
			    changeGridData:function(row,col,value){
			        var data=this.state.data;
			        data[row][col]=value;
			        
			        if(data.length==row+1){
			            data[row+1]=['',''];
			        }
			        this.setState({
			            data:data
			        })
			    }
			}

