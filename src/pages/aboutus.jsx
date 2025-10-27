import Definitionmodel from '../components/definitionmodel.jsx';
import '../styling/details.css';

export default function Aboutus(){
    return(
        <div>
            <img src='../src/pictures/sesclogo.png' className='logo'/>
            <h1>Who are we?</h1>
            <Definitionmodel
            title={"Setifian Scientific Club (SeSC)"}
            description={"Our scientific club, established on April 29, 2013, in the Faculty of Sciences (UFAS1), is a lively place for students from different disciplines. Born from the shared ambition of diverse minds, we're dedicated to fostering intellectual growth and enriching academic experiences. Through seminars, workshops, and field expeditions, we bridge theory with practice, empowering members to excel in their studies and beyond. Yet, we're more than an academic forum; we're a close-knit community, fostering friendships and nurturing creativity. Our club is a dynamic space where curiosity thrives, and members embark on transformative journeys of discovery, shaping the future of science and society."}
            />
            
            
            <a href='https://linktr.ee/setifian.scientific.club' id='socialmedia'>Contact us</a>
           
        </div>
    );
}