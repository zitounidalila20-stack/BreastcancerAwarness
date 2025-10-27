import "../styling/define.css";

export default function Definitionmodel({title,description}) {
  return (
      <div className="box">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
  );
}
