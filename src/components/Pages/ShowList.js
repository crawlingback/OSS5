import "./App.css";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Header from "../Common/Header";
import URLhdl from "../Common/Handler";
function ShowList() {
    const handler = URLhdl();
    return (
        <BrowserRouter>
            <div className="App">
                <header className="container">
                    <div className="">
                        <Header />
                        {handler["list"]["route"]}
                    </div>
                </header>
            </div>
        </BrowserRouter>
    );
}

export default ShowList;
