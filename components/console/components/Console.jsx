import 'bootstrap-css'
import 'bootstrap'
import '../less/index.less'

import React from 'react'
import Jsonformat from '../../jsonformat'


export default class JsonParse extends React.Component {
  
    render() {
        var {json}=this.props;
        return <div className="console">
                    <Jsonformat json={json}></Jsonformat>
                </div>
    }


}
