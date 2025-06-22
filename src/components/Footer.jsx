import "../styles/Footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} Nihongo Sakura. All rights reserved.</p>
        </footer>
    );
}
