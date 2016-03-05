import React from 'react'
import InputParamsTable from '../components/InputParamsTable'

export default class InputUrl extends React.Component {
    render() {
    	var {url,data,edit,onSubmit,dispatch}=this.props;
    	        
        return (<div className="container">
					<form className="form-horizontal">
					  <div className="form-group">
					    <div className="col-sm-12">
					      <input type="text" className="form-control" ref="url"  placeholder="请求地址"  value={url}/>
					    </div>
					  </div>
					  <InputParamsTable dispatch={dispatch} data={data} edit={edit}></InputParamsTable>
					  <div className="form-group">
					    <div className="col-sm-12">
					      <button type="button" className="btn btn-default" onClick={()=>{
					      	onSubmit(this.refs.url.value,data);
					      }}>请求</button>
					    </div>
					  </div>
					</form>
				</div>)
    }
}