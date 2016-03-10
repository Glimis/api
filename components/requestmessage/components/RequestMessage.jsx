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
            method:"Get",
            headers:[['Content-Type','application/x-www-form-urlencoded'],['Accept','text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8']],
            tableState:'body'
        }
    }


	render(){
		
		var {changeMethod,changeUrl,changeGridData,onSend}=this.props;
		var {data,headers,method,tableState}=this.state;

		return (<div className="requestmessageWrap">
					<div className="requestmessage">
					<UrlEdit ref='UrlEdit' changeMethod={changeMethod.bind(this)} onSend={onSend.bind(this)} method={method} ></UrlEdit>
   							<div className="btn-group" role="group" aria-label="...">
							  <button onClick={()=>{
							  		this.setState({
							  			tableState:'body'
							  		})
							  }} type="button" className={tableState=='body'?'btn btn-info':'btn btn-default'}>body</button>
							  <button onClick={()=>{
							  		this.setState({
							  			tableState:'headers'
							  		})
							  }} type="button" className={tableState=='headers'?'btn btn-info':'btn btn-default'}>headers</button>
							</div>
   					<Grid data={tableState=='body'?data:headers}></Grid>
   					</div>
				</div>)
	}

}


function getObjectFromArray(dataSet){
	var body={}
	for(var i=0;i<dataSet.length;i++){
		var dt=dataSet[i];
		if(dt[0]){
			body[dt[0]]=dt[1];
		}
	}
	return body;
}

RequestMessage.defaultProps={
				afterGetError:function(e){
					console.log('error--',e)
				},
				afterGetData:function(){
					console.log('afterGetData')
				},
				afterGetResponse:function(){

				},
				onSend:function(){
					var {afterGetError,afterGetData,afterGetResponse}=this.props;
					var body=getObjectFromArray(this.state.data),
						headers=getObjectFromArray(this.state.headers);
					var url=this.refs.UrlEdit.refs.url.value;
					var params={
						method:this.state.method,
						body:this.state.method.toLocaleLowerCase()==='POST'?JSON.stringify(body):undefined,
						headers:headers
					}
					

					fetch(url,params)
					.then(function(response){
							afterGetResponse(response);
							response.json().then(function(data) {
								response;
								
								debugger
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

