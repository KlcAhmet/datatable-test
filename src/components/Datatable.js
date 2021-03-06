import React, { useState, useEffect } from "react"
import axios from "axios"
import { Table, Row, Col } from 'react-bootstrap';
import { TableHead, TableRow, Search } from '../components map/Components'


function Datatable() {
    const [tableData, settableData] = useState([])

    useEffect(() => {
        axios.get(`https://restcountries.eu/rest/v2/all`)
            .then(function ({ data }) {
                const allRadio = document.getElementById("allRadio")
                const capitalRadio = document.getElementById("capitalRadio")
                const searchInput = document.getElementById("searchInput")
                const harfDuyarli = document.getElementById("harfDuyarli")
                const tableDataTemp = []

                data.forEach((e, i) => {
                    const temp = <TableRow key={i} name={e.name} capital={e.capital} flag={e.flag} />
                    tableDataTemp.push(temp)
                });
                settableData(tableDataTemp)


                searchInput.addEventListener("input", function () {
                    if (capitalRadio.checked) {
                        if (harfDuyarli.checked)
                            settableData(capitalFilter(data, searchInput.value, true))
                        else
                            settableData(capitalFilter(data, searchInput.value))
                    }
                    else if (allRadio.checked) {
                        if (harfDuyarli.checked)
                            settableData(allFilter(data, searchInput.value, true))
                        else
                            settableData(allFilter(data, searchInput.value))

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
        data.filter(name => name.capital.includes(value)).forEach((e, i) => {
            const temp = <TableRow key={i} name={e.name} capital={e.capital} flag={e.flag} />
            tableDataTemp.push(temp)
        })
    }
    else {
        value = value.toLowerCase()
        data.filter(name => name.capital.toLowerCase().includes(value)).forEach((e, i) => {
            const temp = <TableRow key={i} name={e.name} capital={e.capital} flag={e.flag} />
            tableDataTemp.push(temp)
        })
    }

    if (tableDataTemp.length === 0) { return <TableRow name={"İçerik bulunamadı"} /> }
    else { return tableDataTemp }
}
function allFilter(data, value, harfduyar) {
    const tableDataTemp = []
    if (harfduyar) {
        data.forEach((e, i) => {
            const tt = JSON.stringify(e)
            if (tt.includes(value)) {
                tableDataTemp.push(<TableRow key={i} name={e.name} capital={e.capital} flag={e.flag} />)
            }
        })
    }
    else {
        value = value.toLowerCase()
        data.forEach((e, i) => {
            const tt = JSON.stringify(e).toLowerCase()
            if (tt.includes(value)) {
                tableDataTemp.push(<TableRow key={i} name={e.name} capital={e.capital} flag={e.flag} />)
            }
        })
    }
    if (tableDataTemp.length === 0) { return <TableRow name={"İçerik bulunamadı"} /> }
    else { return tableDataTemp }
}


export default Datatable