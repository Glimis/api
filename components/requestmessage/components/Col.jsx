import React from 'react'


export default class Col extends React.Component {
    componentDidUpdate () {
        if(this.refs.input){
            this.refs.input.focus();
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            row:-1,
            col:-1
        };
    }

    render() {
        var {value,col,row,onChange,changeGridData}=this.props;
        var state=this.state;
        var changeState=this.changeState;
        if(state.col==col&&state.row==row){
        	var me=this;
        		return (<td><input ref='input' type="text" onBlur={changeState.bind(this,-1,-1)} className="form-control" value={value} onChange={(e)=>{
        		  changeGridData(row,col,e.target.value);
                  
        		}} /></td>)
        }else{
        	return (<td  onFocus={changeState.bind(this,row,col)}  tabIndex = "0"  >{value}&nbsp;</td>)
        }
    }
    changeState(row,col){
       this.setState({
        row:row,
        col:col
       })
    }
}


