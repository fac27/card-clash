import SubmitButton from "./SubmitButton.jsx";

export default function CardFront(props) {
    const card = props.card;
    const keys = Object.keys(card)
    const skillNamesArr = keys.slice(1)
    const values = Object.values(card)
    const skillValuesArr = values.slice(1)

    const { setSelectedValue, selectedValue, handleSubmission, computerResponse, setComputerResponse, className } = props;

    
    return (
      <div className="card-container col">
        <div className={`${props.player}-card card-front column ${className}`}>
          <h2 className="card__title card-text no-top-margin">{card.name}</h2>
          <img className="card__img" src=""></img>
          
          {skillNamesArr.map((skill, index) => {
            const getValueBySkillIndex = skillValuesArr[index];
            return (
              <div className="card__skill row space-between" key={index}>
                <label className="card__skill-name card-text">{skill}
                  <span className="card__skill-value cardplayer-text">{getValueBySkillIndex}</span>
                </label>
                <input name="skill" type="radio" className="card__skill-button" value={getValueBySkillIndex} onChange={(event) => setSelectedValue({[skill]: event.target.value})}></input>
               
              </div>
            );
          })}
          </div>
        </div> 

        
      );
      
}




