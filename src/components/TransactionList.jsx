import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import Transaction from './Transaction';

export default function TransactionList() {
    const {transactions} = useContext(GlobalContext);
    return (
        <div className="transactions__container">
            <h3 className="transactions__history">History</h3>
            <div className="transactions__list" >
                {
                    transactions.map(tr => <Transaction name={tr.text} amount={tr.amount} key={tr.id} id={tr.id}/>)
                }
                
            </div>
        </div>

    )
}
