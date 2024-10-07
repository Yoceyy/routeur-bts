import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from "../pages/accueil";  // Import de votre page Accueil
import Home from "../pages/home";        // Import de votre page Home

// Renommer la fonction pour éviter le conflit avec l'import Accueil
export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Accueil />}>
                    <Route index element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
// Utiliser le nom correct du composant avec une majuscule
root.render(<AppRouter />);
