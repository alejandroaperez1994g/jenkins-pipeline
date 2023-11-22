import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "../views/Home.tsx";
import About from "../views/About.tsx";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
            </Routes>
        </BrowserRouter>
    );
}
