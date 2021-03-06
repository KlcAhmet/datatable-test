# About The Project
**Data Table Test**

 -  [View Demo on Github](https://klcahmet.github.io/datatable-test/)
## Overview
![enter image description here](https://raw.githubusercontent.com/KlcAhmet/datatable-test/master/screenshot/Screenshot_4.png)

![enter image description here](https://raw.githubusercontent.com/KlcAhmet/datatable-test/master/screenshot/Screenshot_5.png)

## Get Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

```
npm install axios
npm install --save react-router-dom
npm install --save bootstrap
npm install react-bootstrap bootstrap
```

## Database

 - https://restcountries.eu/
 - https://restcountries.eu/rest/v2/all


## Search Functions
```
/* Capital search function */
function  capitalFilter(data, value, harfduyar) {
const  tableDataTemp = []
if (harfduyar) {
data.filter(name  =>  name.capital.includes(value)).forEach((e, i) => {
const  temp = <TableRow  key={i}  name={e.name}  capital={e.capital}  flag={e.flag}  />
tableDataTemp.push(temp)})
}
else {
value = value.toLowerCase()
data.filter(name  =>  name.capital.toLowerCase().includes(value)).forEach((e, i) => {
const  temp = <TableRow  key={i}  name={e.name}  capital={e.capital}  flag={e.flag}  />
tableDataTemp.push(temp)
})
}
if (tableDataTemp.length === 0) { return  <TableRow  name={"İçerik bulunamadı"}  /> }
else { return  tableDataTemp }
}
```
```
/* all search function */
function  allFilter(data, value, harfduyar) {
const  tableDataTemp = []
if (harfduyar) {
data.forEach((e, i) => {
const  tt = JSON.stringify(e)
if (tt.includes(value)) {
tableDataTemp.push(<TableRow  key={i}  name={e.name}  capital={e.capital}  flag={e.flag}  />)
}})
}
else {
value = value.toLowerCase()
data.forEach((e, i) => {
const  tt = JSON.stringify(e).toLowerCase()
if (tt.includes(value)) {
tableDataTemp.push(<TableRow  key={i}  name={e.name}  capital={e.capital}  flag={e.flag}  />)}})
}
if (tableDataTemp.length === 0) { return  <TableRow  name={"İçerik bulunamadı"}  /> }
else { return  tableDataTemp }
}
```

## Search Selection

 - **All:** Searching all keys
 - **Capital:** Searching only on capital
 - **Harf Duyarlı:** Letter sensivity
