function SearchTransaction({transactions,setTransactions,newTransaction}){


    function Change(e){
        const alter=e.target.value
        if (alter.length>0){
        
        const filter=transactions.filter((transaction)=>{
         return transaction.description.toLowerCase().includes(alter.toLowerCase())
        })
        
        setTransactions([...filter])
       }
       else{
        setTransactions([...newTransaction])
       }
      }


return(
    <div className="m-4 p-4">
      <input onChange={Change} className="form-control form-control-sm"type="search" placeholder="Search Transaction"/>
    </div>
)


}

export default SearchTransaction