import React, { Component } from 'react';
class miscComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            task:['trial 1', 't2'],
            query:''
        };
        this.handleChange = this.handleChange.bind(this);
        this.updateData = this.updateData.bind(this);
    }
    handleChange(e){
        e.preventDefault();
        this.setState({query:e.target.value});
    }
    updateData(e){
        e.preventDefault();
        console.log(this.state.query);
        this.setState((state)=>{
           return {
                task:this.state.task.concat(this.state.query),
                query:''
           }
        });
        console.log(this.state.task);
    }
    render(){
        return (
            <div>
                <form onSubmit={this.updateData}>
                    <input name="task" type="text" onChange={this.handleChange} value={this.state.query}/>
                    <button type="submit">Submit {this.state.task.length}</button>
                </form>
                    {this.state.task.map((t)=>(
                        <h1 key={t}>{t}</h1>
                ))}
            </div>
        )
    }
}
export default miscComponent