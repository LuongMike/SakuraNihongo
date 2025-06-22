import { Routes, Route } from "react-router-dom";
import AppLayout from "../components/AppLayout";
import Home from "../pages/Home";
import HiraganaChart from "../pages/HiraganaChart";
import HiraganaPractice from "../pages/HiraganaPractice";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<AppLayout><Home /></AppLayout>} />
            <Route path="/hiragana" element={<AppLayout><HiraganaChart /></AppLayout>} />
            <Route path="/hiragana/practice" element={<AppLayout><HiraganaPractice /></AppLayout>} />
        </Routes>
    );
}
