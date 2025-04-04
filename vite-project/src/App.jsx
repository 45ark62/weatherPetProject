import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./index.css"
import Layout from "./components/Layout";
import MainPage from "./pages/MainPage";
import SearchHistoryPage from "./pages/SearchHistoryPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="search-history" element={<SearchHistoryPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
