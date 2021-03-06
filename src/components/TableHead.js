function TableHead({ name, capital, flag }) {
    return (
        <thead>
            <tr>
                <th>{name}</th>
                <th> {capital}</th>
                <th>{flag}</th>
            </tr>
        </thead>
    )
}

export default TableHead