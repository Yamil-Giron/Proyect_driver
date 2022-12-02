import "./header.css"

export default function header(){
    return  <header className="headerContent">
                <img src="/proyect-driver/recursos/img.jpg" className="imagen"></img>
                <h1 className="titulo">Driver Proyect</h1>
                <form>
                    <input type="text" />
                    <input type="text" />
                    <button className="button"> Ingresar </button>
                    <button className="button"> Registrarse </button>
                </form>
            </header>
}
