import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import RidersPage from "./pages/RidersPage";

export default function App() {
    return (
        <div>
            <NavBar />
            <Routes>
                <Route path="/" element={<RidersPage />} />
                <Route path="/about" element={<h1>Med dig</h1>} />
            </Routes>
        </div>
    );
}
