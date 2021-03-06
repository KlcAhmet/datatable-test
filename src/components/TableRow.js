function TableRow({ key, name, capital, flag }) {
    return (
        <tr key={key}>
            <td>{name}</td>
            <td>{capital}</td>
            <td>{flag}</td>
        </tr>
    )
}

export default TableRow