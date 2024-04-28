// 

import React from "react";

function Button({ children, setTransactions, transactions, index }) {
    function handleClick() {
        const filteredTransactions = transactions.filter((transaction, i) => i !== index);
        setTransactions(filteredTransactions);
    }

    return (
        <button onClick={handleClick} className="btn btn-md btn-danger">
            {children}
        </button>
    );
}

export default Button;
