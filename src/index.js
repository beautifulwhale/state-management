import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
import { RouterProvider } from "react-router-dom";
import router from "./router/dataAPI";

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//     <React.StrictMode>
//         <BrowserRouter>
//             <App />
//         </BrowserRouter>
//     </React.StrictMode>
// );
root.render(
    <RouterProvider router={router} />
)