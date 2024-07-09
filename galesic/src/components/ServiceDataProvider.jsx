import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./styles/ServiceDataProviderCard.css";

const ServiceDataProvider = ({servicesData}) =>{
    return (
        <div className="card-container">
        {servicesData.map((item) => (
          <Card key={item.id} style={{ width: '18rem' }} className="card">
            <Card.Img variant="top" src={item.thumb} className="card-img-top"/>
            <Card.Body className="card-body">
              <Card.Title className="card-title">{item.title}</Card.Title>
              <Card.Text className="card-text">{item.text}</Card.Text>
              <Card.Link as={Link} to={item.link.props.to} className="card-link">Pogledaj više</Card.Link>
            </Card.Body>
          </Card>
        ))}
      </div>
  
    )
}
export default ServiceDataProvider;