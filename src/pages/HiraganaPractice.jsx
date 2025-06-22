import { useState, useEffect } from "react";
import "../styles/HiraganaPractice.css";

const hiraganaList = [
    { char: "あ", romaji: "a" },
    { char: "い", romaji: "i" },
    { char: "う", romaji: "u" },
    { char: "え", romaji: "e" },
    { char: "お", romaji: "o" },
];

export default function HiraganaPractice() {
    const [index, setIndex] = useState(0);
    const [input, setInput] = useState("");
    const [result, setResult] = useState(null);
    const [correct, setCorrect] = useState(false);
    const current = hiraganaList[index];

    useEffect(() => {
        let timer;
        if (correct) {
            timer = setTimeout(() => {
                next();
            }, 2000);
        }
        return () => clearTimeout(timer);
    }, [correct]);

    const check = () => {
        if (input.toLowerCase() === current.romaji) {
            setResult("✅ Đúng!");
            setCorrect(true);
        } else {
            setResult("❌ Sai! Nhập lại nhé.");
            setCorrect(false);
        }
    };

    const next = () => {
        setIndex((prev) => (prev + 1) % hiraganaList.length);
        setInput("");
        setResult(null);
        setCorrect(false);
    };

    return (
        <div className="practice-page">
            <div className="practice-box">
                <h2>Luyện tập Hiragana</h2>
                <div className="hiragana-char">{current.char}</div>
                <input
                    className="romaji-input"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    disabled={correct}
                    placeholder="Nhập romaji..."
                />
                <div className="buttons">
                    <button onClick={check} disabled={correct}>Kiểm tra</button>
                    <button onClick={next}>Bỏ qua</button>
                </div>
                {result && <p className={`result ${correct ? "correct" : "wrong"}`}>{result}</p>}
            </div>
        </div>
    );
}
