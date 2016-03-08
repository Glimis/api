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
    getDangerParam(dataSet){
        //重复属性,临时属性
        var danger={},temp={};
       for(var data of dataSet){
            if(!temp[data[0]]){
                temp[data[0]]=1;
            }else{
                danger[data[0]]=1;
            }
       }
       return danger;
    }
    getChildren(){
        var {data}=this.state;
         var danger=this.getDangerParam(data);
        var html=[];
        var changeGridData=this.changeGridData.bind(this);
        data.forEach(function(data,index){
            let className='active'
             if(danger[data[0]]==1){
                className='danger'
             }
             html.push(<Row className={className} changeGridData={changeGridData} data={data} row={index}  key={index} ></Row>)
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


