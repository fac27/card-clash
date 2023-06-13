function PlayerCard() {
  return (
    <div className="card-front column">
      <h2 className="card__title card-text">Gronk</h2>
      <img className="card__img"></img>
      <div className="row">
        <label className="card__skill-name card-text">Shapeshifting
          <span className="card__skill-value card-text">92</span>
        </label>
        <input type="radio" className="card__skill-button"></input>
      </div>

    </div>
  )
}

export default PlayerCard