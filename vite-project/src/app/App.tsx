import { Routes, Route } from "react-router-dom";
import Layout from "@app/layouts/Layout";
import '@app/styles/index.css';
import MainPage from "@pages/main";
import SearchHistoryPage from "@pages/searchHistory";
import NotFoundPage from "@pages/notFound";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="search-history" element={<SearchHistoryPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
