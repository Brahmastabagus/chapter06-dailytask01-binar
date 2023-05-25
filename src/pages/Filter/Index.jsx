import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Form, Modal, Row, Stack } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Siswa from './Siswa/Index'
import AddSiswa from './AddSiswa/Index'
import FilterSiswa from './FilterSiswa/Index'
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../actions/productAction';
import ProductsReducer from '../../reducers/index'

const dataDummy = [
  {
    id: 'e1',
    name: 'Fadhlan',
    nim: 102030,
    date: "2020-08-03"
  },
  {
    id: 'e2',
    name: 'Kenny',
    nim: 201030,
    date: "2020-02-03"
  },
  {
    id: 'e3',
    name: 'Shiffly',
    nim: 103020,
    date: "2021-09-03"
  },
  {
    id: 'e4',
    name: 'Oryza',
    nim: 302010,
    date: "2023-06-22"
  },
];

const Index = () => {
  const [defaultData, setDefaultData] = useState(dataDummy);
  const [tempData, setTempData] = useState([]);
  const [tempYear, setTempYear] = useState(true);

  const addSiswa = (siswa) => {
    setDefaultData((prevSiswas) => {
      return [siswa, ...prevSiswas];
    });
  };

  const getYear = (date) => {
    return new Date(date).toLocaleString('en-US', { year: "numeric" })
  }

  const filteredSiswa = (year) => {
    let filterData = defaultData.filter((data) => {
      const dataYear = getYear(data.date)
      const filterYear = getYear(year)
      return dataYear === filterYear
    })

    setTempData(filterData)
    setTempYear(year === "0")
  };

  const dispatch = useDispatch()

  const { products } = useSelector((state) => state.ProductsReducer)

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])
  return (
    <>
      <Container fluid={"xl"} style={{ height: "100vh" }} className='d-flex justify-content-center align-items-center'>
        <Card style={{ width: "700px" }}>
          <Card.Body>
            <AddSiswa addSiswa={addSiswa} />
            <FilterSiswa filteredSiswa={filteredSiswa} />
            <Row lg={4}>
              {tempData.length === 0
                ?
                tempYear
                  ?
                  defaultData.map((data) => {
                    return (
                      <Siswa data={data} />
                    )
                  })
                  :
                  <Col style={{ width: "100%" }} lg={12}>
                    <Card>
                      <Card.Body>
                        <Card.Title>Data Not Found</Card.Title>
                      </Card.Body>
                    </Card>
                  </Col>
                :
                tempData.map((data) => {
                  return (
                    <Siswa data={data} />
                  )
                })}
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </>
  )
}

export default Index