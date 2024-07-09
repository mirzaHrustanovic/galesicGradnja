import image1 from "./imageForService/milivoj-kuhar-Te48TPzdcU8-unsplash.jpg";
import image2 from "./imageForService/maho-Fotoliacom-e1528276176982.jpg";
import image3 from "./imageForService/1_5chE0lyPtaDbsONQnA2qoQ.jpg";
import image4 from "./imageForService/image-1-1-768x513.jpg";
import image5 from "./imageForService/images.jpg";
import image6 from "./imageForService/house-surrounding-arrangement-construction-worker-260nw-1504997090.jpg";
import image7 from "./imageForService/postavljanje-keramickih-plocica.jpg";
import image8 from "./imageForService/oblaganje-podova.jpg";
import { Link } from "react-router-dom";
const serviceData = [{
    id:1,
    thumb:image1,
    title:"Adaptacije",
    text:"Adaptacije stana ili kuće",
    link:<Link to="/adaptacije"/>

},{
    id:2,
    thumb:image2,
    title:"Elektroinstalerski radovi",
    text:"Sve vrste elektro radova u stanu ili kući",
    link:<Link to="/adaptacije"/>

},{
    id:3,
    thumb:image3,
    title:"Vodoinstalerski radovi",
    text:"Sve vrste sitnih vodoinstalarerski radova",
    link:<Link to="/adaptacije"/>

},{
    id:4,
    thumb:image4,
    title:"Suha gradnja",
    text:"Sve vrste suhe gradnje",
    link:<Link to="/adaptacije"/>

},{
    id:5,
    thumb:image5,
    title:"Molerski radovi",
    text:"Sve vrste molerskih radova",
    link:<Link to="/adaptacije"/>

},{
    id:6,
    thumb:image6,
    title:"Radovi oko kuće",
    text:"Sve vrste radova oko kuće",
    link:<Link to="/adaptacije"/>

},{
    id:7,
    thumb:image7,
    title:"Keramičarski radovi",
    text:"Sve vrste keramičarskih radova",
    link:<Link to="/adaptacije"/>

},{
    id:8,
    thumb:image8,
    title:"Podopolagački radovi",
    text:"Sve vrste podopolagačkih poslova",
    link:<Link to="/adaptacije"/>

},]

export default serviceData;