import logo from './logo.svg';
import './App.css';
import Monprofile from "./Profile/Monprofile";
import imageDepuisSrc from "./imageSrc.png";


function App() {

  const styles = {
    textAlign: "center", color: "#252525", 
    marginTop: "60px", fontSize: "18px",
    margin: "auto", display: "block"
  }

  const alertMyInput = name => alert(name);

  return (

    <div>

      <div style={styles}>

        <Monprofile 
        
        fullname = "Mon nom est Adama"
        bio = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dapibus sit amet felis eget accumsan. Aliquam erat volutpat. Phasellus pretium "
        profession = "Et je suis Web developer"
        children = {<img src={imageDepuisSrc} className="mesImages" alt ='imageSrc' />}
        alertMyInput={alertMyInput}
        
        Monprofile/>

      </div>

    </div>

  )

} 


/*const App = () => {
  const handleName = name => alert(name);
  return (
    <div>
      <Monprofile name="Adama" handleName={handleName} />
    </div>
  );
 };
 */


export default App;