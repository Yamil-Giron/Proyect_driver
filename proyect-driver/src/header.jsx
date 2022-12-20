import "./header.css"
import logo from "./recursos/img.jpg"

export default function header(){
    return  <header className="headerContent">
                <img src={logo} alt="logo" className="logo"/>
                <h1 className="titulo">Driver Proyect</h1>
                <form className="ingresar">
                    <input type="text" />
                    <input type="password" />
                    <button className="button"> Ingresar </button>
                </form>
            </header>
}
