import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Root from '../../jsonformat'
import * as Action from '../actions'
 class JsonParse extends React.Component {
  
    render() {
        return (<div>
			<button onClick={this.props.click.bind(this)}></button>
   			<Root></Root>
   		</div>)
        
    }
}


const mapStateToProps = function(state, ownProps) {
  return state
}

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    dispatch:dispatch,
	click:function(){
		dispatch(Action.setJson({
				a:1,
				b:2
			}))
	}
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JsonParse)
