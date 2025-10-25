import NavBar from './components/navbar.jsx';
import MainDiv from './components/main.jsx';
import Model from './components/model.jsx';
import Definitionmodel from './components/definitionmodel.jsx';
import './styling/mainbody.css';
export default function Main() {
  return(
   <div>
    <NavBar/>
    <MainDiv/>
    <Definitionmodel/>
    <Model/>
   </div>
   
  ) 
}
