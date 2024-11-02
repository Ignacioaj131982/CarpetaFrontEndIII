import { compus } from "../../utils/compus";
import Card from "./Card";
console.log(compus);



const Home = () => {
return (
    <div className="list-container">
      {compus.map((compu) => {
        return (
          <Card key={compu.id} muestra={compu} />
        );  
      })}
    </div>
  );
};

export default Home;
