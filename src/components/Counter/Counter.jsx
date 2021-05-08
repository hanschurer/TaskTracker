import React, { Component } from 'react'

export class Counter extends Component {
    state = {
        count: 0,
        tags:['tag1','tag2','tag3']
    }

    handleIncrement=(product)=>{
        console.log(product)
        this.setState({count:this.state.count+1})
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? 'Zero' : count
    }

    render() {
        
        return (
            <React.Fragment>
                <span className={this.getBadegeClasses()}>{this.formatCount()}</span>
                <button onClick={()=>this.handleIncrement({id:1})} className="btn btn-secondary btn-sm">Increment</button>
                {this.state.tags.length===0?<p>There is no tags</p>:<ul>{this.state.tags.map(tag=><li key={tag}>{tag}</li>)}</ul>}
            </React.Fragment>
        )
    }

    getBadegeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }
}

export default Counter

