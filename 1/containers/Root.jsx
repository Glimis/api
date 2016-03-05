import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import ShowJson from '../components/ShowJson'
import InputUrl from '../components/InputUrl'
import Console from '../containers/Console'

import * as Action from '../actions'


class App extends Component {    
  render() {
    var {access,json,msg,url,params,edit,dispatch}=this.props;

    return (
       <div>
        <div className="content">
          <div className="contentcenter">
            <InputUrl  url={url} data={params} edit={edit} onSubmit={access} dispatch={dispatch}>  </InputUrl>
          </div>
          <div className="contentbottom">
            <Console>  </Console>
          </div>
        </div>
        <div className="layoutright">
          <ShowJson msg={msg}  json={json}>  </ShowJson>
        </div>

      </div>
    )
  }
}


const mapStateToProps = function(state, ownProps) {
  return state
}

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    access:function(url,arrayset){
        var params={};
        for(var i=0;i<arrayset.length;i++){
          var array=arrayset[i];
          params[array[0]]=array[1];
        }
        dispatch(Action.Access(url,params));
    },
    dispatch:dispatch
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
