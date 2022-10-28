
import { useNavigate } from "react-router-dom";
import { Button } from "../../components"



export const Home = () => {

 

  
  const navigate = useNavigate();
  return (
    <div className="home">
      <h1>Welcome!</h1>

     

      <Button onClick={() => navigate("users")}>Click to see users</Button>
    </div>
  );
}
