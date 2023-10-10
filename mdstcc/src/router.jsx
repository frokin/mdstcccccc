import { Routes, Route } from "react-router-dom"

import Inicio from ".//pages/Inicio"
import Motivos from "./pages/Motivos"
import QuemSomos from "./pages/QuemSomos"
import PyroBot from "./pages/PyroBot"
import PecasdoProjeto from "./pages/PecasdoProjeto"
import Resultados from "./pages/Resultados"



function Router() {
    return (
        <Routes> 
            <Route path="/" element={<Inicio />} />
            <Route path="/Inicio" element={<Inicio />} />
            <Route path="/Motivos" element={<Motivos />} />
            <Route path="/QuemSomos" element={<QuemSomos />} />
            <Route path="/PyroBot" element={<PyroBot />} />
            <Route path="/PecasdoProjeto" element={<PecasdoProjeto />} />
            <Route path="/Resultados" element={<Resultados />} />
        </Routes>
    )
}

export default Router