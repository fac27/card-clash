export default function CardFront(props) {
    const card = props.card
    return (
        <div className={`${props.player}-card card-front column`}>
        <h2 className="card__title card-text no-top-margin">{card.name}</h2>
        <img className="card__img"></img>
        <div className="card__skill row space-between stack-sm">
          <label className="card__skill-name card-text">Slimefactor
            <span className="card__skill-value cardplayer-text">{card.slimeFactor}</span>
          </label>
          <input type="radio" className="card__skill-button"></input>
        </div>
        <div className="card__skill row space-between">
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
        </div>
      </div> 
    )
}