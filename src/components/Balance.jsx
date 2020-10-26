import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export default function Balance() {
    const {transactions} = useContext(GlobalContext);
    const expense = transactions.filter(tr => tr.amount < 0 ).reduce((ac,cn) => ac +Number(cn.amount),0);
    const income = transactions.filter(tr => tr.amount >= 0).reduce((ac,cn) => ac + Number(cn.amount),0);
   
    return (
        <div className="balance">
            <h4>YOUR BALANCE</h4>
            <h2>{Number(income)+ Number(expense)} MAD</h2>
        </div>
    )
}
