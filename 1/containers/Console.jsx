import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ShowJson from '../components/ShowJson'

class Console extends React.Component {
    render() {
    	var {response,dispatch}=this.props;
        return (<div><ShowJson json={response}>  </ShowJson>
				</div>)
    }
}


const mapStateToProps = function(state, ownProps) {
  return state
}

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    dispatch:dispatch
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Console)