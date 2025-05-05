import React from 'react'
export default class toggleEffect extends React.Component{
    constructor(props){
        super(props)
        this.state={
            flag:true
        }
        this.toggle = this.toggle.bind(this)
    }
    toggle(){
        this.setState(
            {flag: !this.state.flag}
        )
    }
    render(){
        return(
            <div>
                <h2>Toggle effect</h2>
                <button onClick={this.toggle}>{this.state.flag?'ON':'OFF'}</button>
            </div>
        )
    }
}