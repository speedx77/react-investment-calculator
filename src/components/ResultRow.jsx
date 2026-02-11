/* function createRows(rows){
    rows.map(row => {
        return(
            <tr>
                <td>{row.year}</td>
                <td>{row.investment}</td>
                <td>{row.interest}</td>
                <td>{row.total}</td>
                <td>{row.capital}</td>

            </tr>
        )
    })
}

function ResultRow(props){
    return(
        createRows(props.rows)
    )
} */

function ResultRow(props){
    return(
        <tr>
            <td>{props.year}</td>
            <td>{props.investment}</td>
            <td>{props.interest}</td>
            <td>{props.total}</td>
            <td>{props.capital}</td>
        </tr>
    )
}

export default ResultRow;