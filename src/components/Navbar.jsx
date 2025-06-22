import { Link } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">🌸 Nihongo</div>
            <ul className="navbar-links">
                <li><Link to="/">Trang chủ</Link></li>
                <li><Link to="/hiragana">Hiragana</Link></li>
                <li><Link to="/hiragana/practice">Luyện Tập Hiragana</Link></li>
                <li><Link to="/katakana">Katakana</Link></li>
                <li><Link to="/kanji">Kanji</Link></li>
                <li><Link to="/grammar">Ngữ pháp</Link></li>
                <li><Link to="/test">Kiểm tra</Link></li>
                <li><Link to="/login">Đăng nhập</Link></li>
            </ul>
        </nav>
    );
}
