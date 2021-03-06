import React, { useState, useEffect } from "react"
import axios from "axios"
import { Table, Row, Col } from 'react-bootstrap';
import { TableHead, TableRow, Search } from '../components map/Components'


function Datatable() {
    const [allData, setallData] = useState([])
    const [tableData, settableData] = useState([])

    useEffect(() => {
        axios.get(`https://restcountries.eu/rest/v2/all`)
            .then(function ({ data }) {
                const tableDataTemp = []
                setallData(data)
                /* console.log(data) */
                data.forEach((e, i) => {
                    const temp = <TableRow key={i} name={e.name} capital={e.capital} flag={e.flag} />
                    tableDataTemp.push(temp)
                });
                settableData(tableDataTemp)
            })
            .catch(function (error) {
                console.log(error)
            })

    }, [])

    return (
        <div className="datatable">
            <Row>
                <Col>
                    <Search />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Table striped bordered hover>
                        <TableHead name={"Name"} capital={"Capital"} flag={"Flag"} />
                        <tbody>
                            {tableData}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </div>
    )
}



function test() {

}

export default Datatable