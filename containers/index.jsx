import '../less/index.less'

import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Jsonformat from '../components/jsonformat'
import Requestmessage from '../components/requestmessage'
import Console from '../components/Console'
import Projects from '../components/projectnav'
import * as Action from '../actions'


var a=[{
  name:'教师',
  children:[{
    name:'所有学生'
  }]
}]

 class JsonParse extends React.Component {
    render() {
        var {afterGetData,json,afterGetResponse,reponsemess}=this.props;
        return (<div className="border container-fluid">
                  <div className="row">
                    <div className="col-lg-3">
                        <Projects data={a}/>
                    </div>
                    <div className="col-lg-6 content">
                      <Requestmessage  afterGetData={afterGetData} afterGetResponse={afterGetResponse} ></Requestmessage>
                      <Console json={reponsemess} ></Console>
                    </div>
                      <div className="col-lg-3 righttree">
         			          <Jsonformat   json={json}></Jsonformat>
                      </div>
                  </div>
                </div>)
        
    }
}



const mapStateToProps = function(state, ownProps) {
  return state
}

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    dispatch:dispatch,
    afterGetData:function(data){
      dispatch(Action.setJson(data));
    },
    afterGetResponse:function(res){
      dispatch(Action.setResponse(res));
    }
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JsonParse)
