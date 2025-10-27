import "../styling/examcancer.css";

export default function Examcontent({title,description}) {
  return (
      <div className="exam-box">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    
  );
}
