import React, { useState, useEffect } from "react"
import axios from "axios"
import { Table, Row, Col } from 'react-bootstrap';
import { TableHead, TableRow, Search } from '../components map/Components'


function Datatable() {
    // eslint-disable-next-line
    const [allData, setallData] = useState([])
    const [tableData, settableData] = useState([])

    useEffect(() => {
        axios.get(`https://restcountries.eu/rest/v2/all`)
            .then(function ({ data }) {
                // eslint-disable-next-line
                const allRadio = document.getElementById("allRadio")
                const capitalRadio = document.getElementById("capitalRadio")
                const searchInput = document.getElementById("searchInput")
                // eslint-disable-next-line
                const harfDuyarli = document.getElementById("harfDuyarli")
                const tableDataTemp = []

                setallData(data)

                /* console.log(data) */
                data.forEach((e, i) => {
                    const temp = <TableRow key={i} name={e.name} capital={e.capital} flag={e.flag} />
                    tableDataTemp.push(temp)
                });
                settableData(tableDataTemp)

                /* console.dir(allRadio) */

                searchInput.addEventListener("input", function () {
                    if (capitalRadio.checked) {
                        if (harfDuyarli.checked)
                            settableData(capitalFilter(data, searchInput.value, true))
                        else
                            settableData(capitalFilter(data, searchInput.value))
                    }
                    else {
                        alert("Lüften arama türünü seçin.")
                        searchInput.value = ""
                    }
                })

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


function capitalFilter(data, value, harfduyar) {
    const tableDataTemp = []
    if (harfduyar) {
        value = value.toLowerCase()
        data.filter(name => name.capital.toLowerCase().includes(value)).forEach((e, i) => {
            const temp = <TableRow key={i} name={e.name} capital={e.capital} flag={e.flag} />
            tableDataTemp.push(temp)
        })
    }
    else {
        data.filter(name => name.capital.includes(value)).forEach((e, i) => {
            const temp = <TableRow key={i} name={e.name} capital={e.capital} flag={e.flag} />
            tableDataTemp.push(temp)
        })
    }

    return tableDataTemp
}


export default Datatable