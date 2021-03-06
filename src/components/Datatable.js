import React, { useState, useEffect } from "react"
import axios from "axios"
import { Table } from 'react-bootstrap';
import { TableHead, TableRow } from '../components map/Components'


function Datatable() {
    const [AllData, setAllData] = useState([])

    useEffect(() => {
        axios.get(`https://restcountries.eu/rest/v2/all`)
            .then(function ({ data }) {
                /* console.log(data) */
            })
            .catch(function (error) {
                console.log(error)
            })
    }, [])

    return (
        <Table striped bordered hover>
            <TableHead />
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td colSpan="2">Larry the Bird</td>
                    <td>@twitter</td>
                </tr>
            </tbody>
        </Table>
    )
}

export default Datatable