import {Routes, Route} from "react-router-dom";
import Accueil from "./pages/Accueil.jsx";
import Defaut from "./pages/Defaut.jsx";
import Page1 from "./pages/Page1.jsx";

export default function App() {
    return (
        <Routes>
            <Route index element={<Accueil />} />
            <Route path="test1" element={<Page1 />} />
            <Route path="*" element={<Defaut />} />
        </Routes>
    );
}