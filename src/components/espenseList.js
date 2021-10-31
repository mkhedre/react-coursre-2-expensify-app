import React from "react";
import { connect } from "react-redux";
import ExpensesItems from "./ExpenseListitems";
import selectExpense from '../selectors/expenses';

//components
const ExpenseList =(Props)=>(
    <div>
        <h1>expense list</h1>
        {Props.expenses.map((expense)=>{
            return <ExpensesItems key={expense.id} {...expense}/>
        })}
    </div>
)
//store
const mapStateToProps = (state)=>{
    return {
        expenses :selectExpense(state.expenses ,state.filters)
    }
}
//as store changes our components will rerender with new values
export default connect(mapStateToProps)(ExpenseList)