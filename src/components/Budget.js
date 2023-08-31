import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { TotalExpense } from './ExpenseTotal';

const Budget = () => {
    const { budget } = useContext(AppContext);
    const [ updatebudget, setUpdatebudget] = useState(budget);
    const totalExpenses = TotalExpense();

    const handleUpdate = (event) => {
        const newBudget = event.target.value;
        if(newBudget > 20000) {
            alert('Upper limit value of budget is 20000');
            setUpdatebudget(20000);
        } else if (newBudget < totalExpenses) {
            alert('The budget can not be lower than the spending ' + totalExpenses);
            setUpdatebudget(totalExpenses);
        } else {
            setUpdatebudget(newBudget);
        }  
    };

    return (
        <div className='alert alert-secondary'>
            <span>Budget: £
             <input
                        type='number'
                        id='budget'
                        value={updatebudget}
                        step='10'
                        onChange={handleUpdate}>
                        </input>
                        </span>
        </div>
    );
};
export default Budget;
