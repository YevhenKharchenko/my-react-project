import { useEffect, useState, useMemo, useRef, useContext } from "react";
import ArticleList from "./components/ArticleList";
import SearchForm from "./components/SearchForm";
import Loader from "./components/Loader";
import Error from "./components/Error";
import { fetchArticlesWithTopic } from "./articles-api.js";
import { useToggle } from "./hooks/useToggle.js";
import Modal from "./components/Modal.jsx";
import { UserMenu } from "./components/UserMenu.jsx";
import { Routes, Route, Link, useParams, Outlet } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Products from "./pages/Products.jsx";
import NotFound from "./pages/NotFound.jsx";
import ProductDetails from "./pages/ProductDetails";
import Mission from "./components/Mission.jsx";
import Team from "./components/Team.jsx";
import Reviews from "./components/Reviews.jsx";
import AppBar from "./components/AppBar.jsx";

const App = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = async (topic) => {
    try {
      setArticles([]);
      setError(false);
      setLoading(true);
      const data = await fetchArticlesWithTopic(topic);
      setArticles(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const { isOpen, open, close } = useToggle();

  return (
    <div>
      <SearchForm onSearch={handleSearch} />
      {loading && <Loader />}
      {error && <Error />}
      {!!articles.length && <ArticleList items={articles} />}
      {!isOpen && <button onClick={open}>Open modal</button>}
      <Modal isOpen={isOpen} onClose={close} />
      <UserMenu />

      <AppBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="mission" element={<Mission />} />
          <Route path="team" element={<Team />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
