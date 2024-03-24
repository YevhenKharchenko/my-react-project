import { useEffect, useState, useMemo, useRef, useContext } from "react";
import ArticleList from "./components/ArticleList";
import SearchForm from "./components/SearchForm";
import Loader from "./components/Loader";
import Error from "./components/Error";
import { fetchArticlesWithTopic } from "./articles-api.js";
import CustomButton from "./components/CustomButton.jsx";
import { useToggle } from "./hooks/useToggle.js";
import Modal from "./components/Modal.jsx";
import { myContext } from "./main.jsx";
import { useMyContext } from "./hooks/useMyContext.js";
import { UserMenu } from "./components/UserMenu.jsx";

const App = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [planets, setPlanets] = useState(["Earth", "Mars", "Jupiter", "Venus"]);

  const filteredPlanets = useMemo(
    () => planets.filter((planet) => planet.includes("")),
    [planets]
  );

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

  const btnRef = useRef();

  useEffect(() => btnRef.current.focus(), []);

  const { isOpen, open, close } = useToggle();

  const [isModal, setIsModal] = useState(false);

  return (
    <div>
      <SearchForm onSearch={handleSearch} />
      {loading && <Loader />}
      {error && <Error />}
      {articles.length > 0 && <ArticleList items={articles} />}

      <CustomButton ref={btnRef}>Button with forwarded ref</CustomButton>

      {!isOpen && <button onClick={open}>Open modal</button>}
      <Modal isOpen={isOpen} onClose={close} />

      <UserMenu />

      <ul>
        {filteredPlanets.map((planet) => (
          <li key={planet}>{planet}</li>
        ))}
      </ul>

      <button
        onClick={() => {
          setIsModal(!isModal);
        }}
      >
        {isModal ? "Close" : "Open"}
      </button>
      {isModal && <h1>Hello</h1>}
    </div>
  );
};

export default App;
