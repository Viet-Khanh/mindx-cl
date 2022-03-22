import React from 'react';
import './index.css'

const ExpensiveItem = () => {
    return (
        <div className='expensiveItem-container'>
            <ExpensiveDate />
            <div className='expensiveItem-title'>
                Some Book
            </div>
            <div className='expensiveItem-amount'>
                $ 50
            </div>
        </div>
    );
};


const ExpensiveDate = () => {
    const date = new Date('2022-11-10')
    const day = date.toLocaleString("en-US" , {day : '2-digit'})
    const month = date.toLocaleString('en-US' , {month : 'long'})
    const year = date.getFullYear()
    console.log('now' , {day , month , year});

    return (
        <div>
            <div>
                {month}
            </div>
            <div>
                {year}
            </div>
            <div>
                {day}
            </div>
        </div>
    )
}

export default ExpensiveItem;