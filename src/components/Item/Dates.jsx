import React from 'react'
import "./Dates.css"

const Dates = (props) => {
  const month = new Date(props.date.slice(0, 10)).toLocaleString('en-US', { month: "long" })
  const day = new Date(props.date.slice(0, 10)).toLocaleString('en-US', { day: "2-digit" })
  const year = new Date(props.date.slice(0, 10)).toLocaleString('en-US', { year: "numeric" })

  return (
    <>
      <div className='expense-date'>
        <div className='expense-date__month'>{month}</div>
        <div className='expense-date__day'>{day}</div>
        <div className='expense-date__year'>{year}</div>
      </div>
    </>
  )
}

export default Dates