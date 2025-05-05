import React from 'react'
export default class CounterComp extends React.Component{
    constructor(props){
        super(props)
        this.state={
            counter:0
        }
        this.increment = this.increment.bind(this)
    }
    increment(){
        this.setState(
            {counter : this.state.counter+1}
        );
    }
    render(){
        return(
            <div>
                <h2>Counter example</h2>
                <h3>counter value {this.state.counter}</h3>
                <h4>Increased by {this.props.user}</h4>
                <button onClick={this.increment}>Click here</button>
            </div>
        )
    }
}