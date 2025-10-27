import '../styling/boxmodelsupport.css';

export default function Elements({title,description}){
    return(
        <div className="myexamelement">
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
}