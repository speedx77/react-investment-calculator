import ResultRow from "./ResultRow";

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
} */
const EXAMPLE_ROWS = [{
    year: 1,
    investment:10,
    interest: 2,
    total: 4,
    capital: 6,
}, {
    year: 2,
    investment: 20,
    interest: 3,
    total: 6,
    capital: 7,
}]

function createRow(row){
    return(
        <tr>
            <td>{row.investment}</td>
            <td>6</td>
            <td>7</td>
            <td>8</td>
            <td>9</td>
        </tr> 
    )
}

/* function createRows(rows){
    rows.map(row => {
        return(
            <ResultRow rows={rows}/>
        )
    })
} */


function Result(props){
    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Investment Capital</th>
                </tr>
            </thead>
            <tbody>
{/*                 <tr>
                    <td>{props.year}</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                    <td>5</td>
                </tr> */}
{/*                 {props.rows} */}
{/*                 <ResultRow 
                    rows = {props.rows}
                /> */}
{/*                   {EXAMPLE_ROWS.map(row => {
                    return (
                        <ResultRow 
                            year = {row.year}
                            investment = {row.investment}
                            interest = {row.interest}
                            total = {row.total}
                            capital = {row.capital}
                        />
                    )
                  })} */}
                {props.rows.map(row => {
                    return (
                        <ResultRow 
                            key = {row.year}
                            year = {row.year}
                            investment = {row.investment}
                            interest = {row.interest}
                            total = {row.total}
                            capital = {row.capital}
                        />
                    )
                })} 
            </tbody>
        </table>
    )
}

export default Result;