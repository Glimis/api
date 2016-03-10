import React from 'react'


export default class Api extends React.Component {
  
    render() {
        var {name}=this.props;
        return (<li>{name}</li>)
    }
}
