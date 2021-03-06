import React, { useState, useEffect } from "react"
import axios from "axios"


function Datatable() {
    const [AllData, setAllData] = useState([])

    useEffect(() => {
        axios.get(`https://restcountries.eu/rest/v2/all`)
            .then(function ({ data }) {
                console.log(data)
            })
            .catch(function (error) {
                console.log(error)
            })
    }, [])

    return (
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae voluptatem distinctio quos laboriosam deleniti nostrum odit a asperiores. Aperiam ad nisi quos iusto quod? Vero aperiam cumque cum ratione quis?</p>
    )
}

export default Datatable