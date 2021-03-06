import { Flag } from '../components map/Components'

function TableRow({ name, capital, flag }) {
    return (
        <tr >
            <td>{name}</td>
            <td>{capital}</td>
            <td><Flag src={flag} cls="" /></td>
        </tr>
    )
}

export default TableRow