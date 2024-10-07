import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppRouter from "./pages/accueil";  // Correction du nom de l'import

// Définition du routeur avec la page Accueil
const router = createBrowserRouter([
    {
        path: "/",
        element: <AppRouter />,  // Correction du composant utilisé
    },
]);

// Création de l'application React dans l'élément avec l'ID 'accueil'
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
