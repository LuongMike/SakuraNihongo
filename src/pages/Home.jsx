import { Link } from "react-router-dom";
import "../styles/home.css";

export default function Home() {
  return (
    <div className="home">
      <div className="home-box">
        <h1>🌸 Học tiếng Nhật cùng Sakura 🌸</h1>
        <p>
          Hành trình học tập ngọt ngào với Hiragana, Katakana, Kanji và JLPT.
        </p>

        <section className="intro-section">
          <h2>📚 Bạn sẽ học được gì?</h2>
          <ul>
            <li>👉 Ghi nhớ bảng chữ cái Hiragana và Katakana dễ dàng</li>
            <li>👉 Luyện tập hàng ngày với quiz tương tác</li>
            <li>👉 Học từ vựng, ngữ pháp và Kanji theo trình độ</li>
          </ul>
        </section>

        <section className="features-section">
          <h2>✨ Tính năng nổi bật</h2>
          <div className="features">
            <div className="feature-card">
              <h3>🧠 Ghi nhớ thông minh</h3>
              <p>
                Ứng dụng kỹ thuật lặp lại ngắt quãng giúp nhớ nhanh và lâu hơn.
              </p>
            </div>
            <div className="feature-card">
              <h3>📝 Luyện tập hàng ngày</h3>
              <p>Bạn sẽ được kiểm tra đều đặn với các bài luyện đọc và viết.</p>
            </div>
            <div className="feature-card">
              <h3>🎯 Chuẩn JLPT</h3>
              <p>Học đúng trình độ, đúng hướng, từ N5 đến N1.</p>
            </div>
          </div>
        </section>

        <section className="call-to-action">
          <h2>🚀 Sẵn sàng bắt đầu?</h2>
          <p>Khám phá bảng chữ cái Hiragana đầu tiên!</p>
          <Link className="cta-button" to="/hiragana">
            Bắt đầu học
          </Link>
        </section>
      </div>
    </div>
  );
}
