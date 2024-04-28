import Table from './Components/Table';
import './App.css';
import SearchTransaction from './Components/Search';
import { useState } from 'react';
import Form from './Components/Form';
import Header from './Components/Header';

function App() {
  const newTransaction=[
    {
   
      date:"2019/12/01",
      description:"Paycheck",
      category:"Income",
      amount:"1000",
       },
       
     {
     
     date:"2019/09/20",
     description:"Pizza",
     category:"Food",
     amount:"250",
     },
     {
    
     date:"2023/10/26",
     description:"Sunglasses",
     category:"Fashion",
     amount:"100",
     },
     {
     
     date:"2024/07/09",
     description:"Games",
     category:"Entertainment",
     amount:"150",
     },
     
     ]

  
 
   

const [transactions,setTransactions]=useState(newTransaction)

    
  return (
  <div className='container'>
   <Header/>
  <SearchTransaction transactions={transactions} setTransactions={setTransactions} newTransaction={newTransaction}/>
  <Form transactions={transactions} setTransactions={setTransactions}/>
  <Table transactions={transactions} setTransactions={setTransactions}/>
  </div>
  );

}
export default App;
