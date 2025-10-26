import '../styling/boxmodelsupport.css';


export default function Supportmodel({title,description}){
    return(
        <div className="Boxmodelexplore">
            <h3>{title}</h3>
            <p>{description}</p>
            <button>Read more</button>
        </div>
    );
}