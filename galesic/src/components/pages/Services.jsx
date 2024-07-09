import ServiceDataProvider from "../ServiceDataProvider";
import serviceData from "../ServiceData";
import "../styles/Services.css";

const Services = () =>{
    return <div className="services-container">
        <h1>Naše Usluge</h1>
        <ServiceDataProvider servicesData={serviceData}/>
       
    </div>
}

export default Services;