import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import SingleArticle from "../ts/SingleArticle";
import { Container } from "react-bootstrap";
import css from "./ArticleDetails.module.css";

function ArticleDetail() {
  const params = useParams();
  const [content, setContent] = useState<SingleArticle>({
    id: 0,
    title: "",
    url: "",
    image_url: "",
    news_site: "",
    summary: "",
    published_at: "",
    updated_at: "",
    featured: false,
    launches: [
      {
        launch_id: "",
        provider: "",
      },
    ],
    events: [
      {
        event_id: 0,
        provider: "",
      },
    ],
  });

  useEffect(() => {
    fetch(`https://api.spaceflightnewsapi.net/v4/articles/${params.article}`)
      .then((res) => res.json())
      .then((data) => setContent(data));
  }, []);

  return (
    <Container>
      <h1>{content.title}</h1>
      <img className={css.image} src={content.image_url} />
      <p>{content.summary}</p>
      <p>{content.news_site}</p>
      <p>{content.published_at.split("T", 10)[0]}</p>
      <a className="btn btn-info" href={content.url}>
        Read more
      </a>
    </Container>
  );
}

export default ArticleDetail;
