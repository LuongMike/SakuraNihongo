import AppRoutes from "./routes/AppRoutes";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename="/SakuraNihongo">
      <AppRoutes />
    </BrowserRouter>
  );
}
export default App;