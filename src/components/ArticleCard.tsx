import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import SingleArticle from "../ts/SingleArticle";

interface CardProps {
    content: SingleArticle
}

function ArticleCard({ content }: CardProps) {
  return (
    <Link to={`/${content.id}`}>
      <Card style={{ maxWidth: "24rem" }}>
        <Card.Img variant="top" src={content.image_url} />
        <Card.Body className="d-flex flex-column justify-content-between">
          <div>
            <Card.Title>{content.title}</Card.Title>
            <Card.Text>{content.summary}</Card.Text>
          </div>
          <div>
            <p>{content.news_site}</p>
            <p>{content.published_at.split("T", 10)[0]}</p>
          </div>
        </Card.Body>
      </Card>
    </Link>
  );
}

export default ArticleCard;
