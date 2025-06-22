import "../styles/HiraganaChart.css";

const hiraganaData = [
  ["あ", "い", "う", "え", "お"],
  ["か", "き", "く", "け", "こ"],
  ["さ", "し", "す", "せ", "そ"],
  ["た", "ち", "つ", "て", "と"],
  ["な", "に", "ぬ", "ね", "の"],
  ["は", "ひ", "ふ", "へ", "ほ"],
  ["ま", "み", "む", "め", "も"],
  ["や", "", "ゆ", "", "よ"],
  ["ら", "り", "る", "れ", "ろ"],
  ["わ", "", "", "", "を"],
  ["ん", "", "", "", ""],
];

export default function HiraganaChart() {
  return (
    <div className="chart-container">
      <div className="chart-box">
        <h1 className="chart-title">📝 Bảng Hiragana</h1>
        <div className="hiragana-grid">
          {hiraganaData.map((row, rowIndex) =>
            row.map((char, colIndex) => (
              <div
                key={`${rowIndex}-${colIndex}`}
                className={`chart-cell ${char === "" ? "empty" : ""}`}
              >
                {char || ""}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
