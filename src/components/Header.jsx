import logo from "../assets/investment-calculator-logo.png"

function Header(){
    return(
    <header id="header">
      <img src={logo} alt="Investment Calculator"/>  
      <h1>React Investment Calculator</h1>
      <p>
        Deep dive into your investments with this calculator.
      </p>
    </header>
    )
}

export default Header;