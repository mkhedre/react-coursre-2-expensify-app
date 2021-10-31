import React from "react";
import { connect } from "react-redux";
import ExpenseForm from './ExpenseForm';
import {addExpense} from '../actions/expenses';//الغلطه هنا كانت فى الكوسين  الططططططططم
const AddExpenses =(props)=>( 
    <div>
        <h1>AddExpensePage</h1>
        <ExpenseForm 
            onSubmit={(expense)=>{
                props.dispatch(addExpense(expense))
                props.history.push('./')
            }}
        />

    </div>
)
export default connect()(AddExpenses);