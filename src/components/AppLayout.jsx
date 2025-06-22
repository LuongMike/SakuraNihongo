// src/components/Layout/AppLayout.jsx
import Header from "./Header";
import Footer from "./Footer";
import "../styles//AppLayout.css";

export default function AppLayout({ children }) {
    return (
        <div className="app-layout">
            <div className="sakura-background">
                <div className="overlay" />
                    <div className="content">
                    <Header />
                        <main>{children}</main>
                    <Footer />
                    </div>
            </div>
        </div>
    );
}
