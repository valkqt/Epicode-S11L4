import { Container } from "react-bootstrap"
import { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";
import Article from "../ts/Article";

function HomeArticles() {
    const [results, setResults] = useState<Article>({
        count: 0,
        next: "",
        previous: "",
        results: [],
      });
      const defaultEndpoint =
        "https://api.spaceflightnewsapi.net/v4/articles/?has_launch=true&is_featured=true";
    
      useEffect(() => {
        fetch(defaultEndpoint)
          .then((res) => res.json())
          .then((data) => setResults(data));
      }, []);
    
    return (
        <Container className="contentWrapper">
        {results.results.slice(0, 9).map((article) => {
          return <ArticleCard key={article.id} content={article} />;
        })}
      </Container>
)

}

export default HomeArticles