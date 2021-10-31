import React from "react";
import ExpenseList from './espenseList';
import ExpenseListFilter from './ExpenseListFilters'
const home = ()=>( // 100 time have error here
    <div>
        <ExpenseListFilter />
        <ExpenseList />
    </div>
)
export default home;