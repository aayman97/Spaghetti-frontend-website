import menu from './images/menu.png'
import spaghetti from './images/spaghetti.png'
import facebook from './images/fb.png'
import instagram from './images/instagram.png'
import twitter from './images/twitter.png'
import youtube from './images/youtube.png'
import './App.css';

function App() {
  return (
    <div className="app">
        <div className="navbar">
          <h1>Foodies</h1>
          <div className="rightSideContainer" >
          <nav className="navnav" id="menubar">
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Products</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </nav>
          <img src={menu} className="menuLogo" id="menu" onClick={()=>{
            // console.log(window.screen.width)
            console.log(document.getElementById('menubar').offsetWidth)
            if(document.getElementById('menubar').offsetWidth === 200){
              document.getElementById("menubar").style.width="0px"
            }
            else{
              document.getElementById("menubar").style.width="200px"
            }
            
          }}></img>
          </div>
        </div>

        <div className="spaghettiSection">
          <div className="leftside">
              <h1>Spaghetti</h1>
              <p>Spaghetti and meatballs or Spaghetti with meatballs ia an Italian American dish consisting of spaghetti, tomato sauce and meatballs
              </p>
              <button>Order your food</button>
          </div>
          <div className="rigthside">
            <img src={spaghetti} className="spaghetti"/>
          </div>  
        </div>

        <div className="socialContainer">
            <img src={facebook} className="socialmedialogo"/>
            <img src={twitter} className="socialmedialogo"/>
            <img src={instagram} className="socialmedialogo"/>
            <img src={youtube} className="socialmedialogo"/>
        </div>
    </div>
  );
}

export default App;
