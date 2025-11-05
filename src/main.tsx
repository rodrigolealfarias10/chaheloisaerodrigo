import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename="/chaheloisaerodrigo">
    <App />
  </BrowserRouter>
);
