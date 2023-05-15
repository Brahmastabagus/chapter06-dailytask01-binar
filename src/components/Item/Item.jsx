// import Date from './Date';
import { useState } from 'react';
import Card from './Card';
import Dates from './Dates';
import './Item.css';

function Item(props) {
  // const [title, setTitle] = useState(props.title)
  const [title, setTitle] = useState(true)
  // console.log(title)
  // console.log(title)
  // const expenseDate = new Date(2023, 5, 10);
  // const expenseTitle = 'Car Priceeeeeeee';
  // const expenseAmount = 20.000;

  // function makeid(length) {
  //   let result = '';
  //   const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  //   const charactersLength = characters.length;
  //   let counter = 0;
  //   while (counter < length) {
  //     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  //     counter += 1;
  //   }
  //   return result;
  // }

  const handleClick = (e) => {
    e.preventDefault()

    // setTitle("Mobil Jadul")
    setTitle(!title)
  }

  return (
    <Card className="expense-item">
      {/* <div className="expense-item"> */}
      <Dates date={props.date} />
      {/* <div>{props.date.toLocaleString()}</div> */}
      {/* <div>{makeid(5)}</div> */}
      <div className='expense-item__description'>
        <h2>{title ? props.title : "Mobil Jadul"}</h2>
        <div className='expense-item__price'>Rp. {props.price}</div>
      </div>
      {/* </div> */}
      <button onClick={handleClick}>Change Title</button>
    </Card>
  )
}

export default Item;