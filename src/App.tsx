import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomeArticles from "./components/HomeArticles";
import ArticleDetail from "./components/ArticleDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Link to="/"className="link">
          <h1 className="text-center p-4">Spaceflight News</h1>
        </Link>
        <Routes>
          <Route path="/" Component={() => <HomeArticles />}></Route>
          <Route path="/:article" Component={() => <ArticleDetail />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
