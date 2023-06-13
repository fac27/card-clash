import Skill from "./Skill.jsx"

export default function CardFront(props) {
    const card = props.card;
    const keys = Object.keys(card)
    const skillNamesArr = keys.slice(1)
    const values = Object.values(card)
    const skillValuesArr = values.slice(1)
  

    return (
        <div className={`${props.player}-card card-front column`}>
          <h2 className="card__title card-text no-top-margin">{card.name}</h2>
          <img className="card__img"></img>
          
          {skillNamesArr.map((skill, index) => {
            const getValueBySkillIndex = skillValuesArr[index];
            return (
              <div className="card__skill row space-between" key={index}>
                <label className="card__skill-name card-text">{skill}
                  <span className="card__skill-value cardplayer-text">{getValueBySkillIndex}</span>
                </label>
                <input type="radio" className="card__skill-button"></input>
              </div>
            );
          })}
        </div> 
      );
      
}




        /* <div className="card__skill row space-between">
          <label className="card__skill-name card-text">laserPower
            <span className="card__skill-value card-text">{card.laserPower}</span>
          </label>
          <input type="radio" className="card__skill-button"></input>
        </div>
        <div className="card__skill row space-between">
          <label className="card__skill-name card-text">telepathy
            <span className="card__skill-value card-text">{card.telepathy}</span>
          </label>
          <input type="radio" className="card__skill-button"></input>
        </div>
        <div className="card__skill row space-between">
          <label className="card__skill-name card-text">Agility
            <span className="card__skill-value card-text">{card.agility}</span>
          </label>
          <input type="radio" className="card__skill-button"></input>
        </div> */