import '../less/index.less'

import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Jsonformat from '../components/jsonformat'
import Requestmessage from '../components/requestmessage'
import * as Action from '../actions'

 class JsonParse extends React.Component {
    render() {
        var {afterGetData,json}=this.props;
        return (<div className="container">
            <Requestmessage  afterGetData={afterGetData} ></Requestmessage>
            <div className="righttree">
   			      <Jsonformat   json={json}></Jsonformat>
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
      dispatch(Action.setJson(data))
    }
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JsonParse)
