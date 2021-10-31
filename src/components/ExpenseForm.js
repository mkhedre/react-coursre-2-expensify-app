import React from "react";
import moment from "moment";
import 'react-dates/initialize';
import { SingleDatePicker } from "react-dates";
import 'react-dates/lib/css/_datepicker.css';

export default class ExpenseForm extends React.Component{
    state ={
        description : '',
        note :'',
        amount :'',
        createdAt : moment(),
        focused : false,
        error : '' 
    }
    onchangeDescription =(e)=>{
        const description = e.target.value;
        this.setState(()=>({description}))
    }
    onChangeNote=(e)=>{
        const note = e.target.value
        this.setState(()=>({note})) 
    }
    onamountChange=(e)=>{
        const amount = e.target.value
        if(amount.match(/^\d{1,}(\.\d{0,2})?$/)){
            this.setState(()=>({amount}))
        }
    }
    onDateChange=(createdAt)=>{
        if(createdAt){
            this.setState(()=>({createdAt}))
        }    
    }
    onFocusedChange=(focused)=>{
        this.setState({focused})
    }
    onsubmit = (e)=>{
        e.preventDefault()

        if(!this.state.description || !this.state.amount){
            this.setState({error :'please provide description and amount'})
        }else{
            this.setState(()=>({error : ''}))
            this.props.onSubmit({
                description : this.state.description,
                amount : parseFloat(this.state.amount,10) *100, // return will be string so i will use
                createdAt : this.state.createdAt.valueOf(),
                note : this.state.note
            })
        }
    }
    render() {
        return(
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit = {this.onsubmit}>
                    <input 
                    type = "text"
                    placeholder = "description"
                    autoFocus
                    value = {this.state.description}
                    onChange = {this.onchangeDescription}
                    />
                    <input 
                    type ="text"
                    placeholder = "amount"
                    value={this.state.amount}
                    onChange = {this.onamountChange}
                    />
                   <SingleDatePicker
                        date={this.state.createdAt} // momentPropTypes.momentObj or null
                        onDateChange={this.onDateChange} // PropTypes.func.isRequired
                        focused={this.state.focused} // PropTypes.bool
                        onFocusChange={this.onFocusedChange} // PropTypes.func.isRequired
                    />

                    <textarea 
                    placeholder = "Add a note for your expense(optional)"
                    value = {this.state.note}
                    onChange = {this.onChangeNote}
                    />
                    <button> save expense</button>
                </form>
            </div>
        )
    }
}