import '../less/index.less'
import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import JsonParse from '../components/JsonParse'




const mapStateToProps = function(state, ownProps) {
  return state
}



export default connect(
  mapStateToProps
)(JsonParse)
