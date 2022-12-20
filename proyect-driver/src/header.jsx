import "./header.css"

export default function header(){
    return  <header className="headerContent">
                <img src="C:\Users\Yamil\Documents\Proyect_driver\proyect-driver\recursos\img.jpg" className="logo"></img>
                <h1 className="titulo">Driver Proyect</h1>
                <form className="ingresar">
                    <input type="text" />
                    <input type="password" />
                    <button className="button"> Ingresar </button>
                </form>
            </header>
}
