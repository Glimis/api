import React from 'react'

import Row from './Row'

export default class Grid extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            data:this.props.data
        }
    }


    render() {
        return <table className="table table-hover"><tbody>{this.getChildren()}</tbody></table>
    }
    getChildren(){
        var {data}=this.state;
        var html=[];
        var changeGridData=this.changeGridData.bind(this);
        data.forEach(function(data,index){
             html.push(<Row changeGridData={changeGridData} data={data} row={index}  key={index} ></Row>)
        })
        return html;
    }
    changeGridData(row,col,value){
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


