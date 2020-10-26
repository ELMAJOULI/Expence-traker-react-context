import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export default function IncomExpences() {
    const {transactions} = useContext(GlobalContext);
    const expense = transactions.filter(tr => tr.amount < 0 ).reduce((ac,cn) => ac + Number(cn.amount),0);
    const income = transactions.filter(tr => tr.amount >= 0).reduce((ac,cn) => ac + Number(cn.amount),0);
    return (
        <div className="incomExpences">
            <div className="incomExpences__card incomExpences__left">
                <h4>Income</h4>
                <p className="money plus">+{income} MAD</p>
            </div>
            <div className="incomExpences__card">
                <h4>Expense</h4>
                <p className="money minus">{expense} MAD</p>
            </div>
        </div>
    )
}
