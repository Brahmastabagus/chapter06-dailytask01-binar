import React, { useState } from 'react'
import { Form, Stack } from 'react-bootstrap'

const Index = ({ filteredSiswa }) => {
  // const [year, setYear] = useState()

  const handleFilter = (e) => {
    // setYear(e.target.value)
    filteredSiswa(e.target.value)
  }
  return (
    <>
      <Stack direction='horizontal'>
        <h3 className='my-4'>List Siswa:</h3>
        <Form.Select className='ms-auto' style={{ width: "150px" }} aria-label="Default select example" onChange={handleFilter}>
          <option selected value="0">Select Date</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
        </Form.Select>
      </Stack>
    </>
  )
}

export default Index