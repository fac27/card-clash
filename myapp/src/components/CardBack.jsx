export default function CardBack({ player }) {
    return (
        <div className={`${player}-card card-back`}>
            <p className="card-back__question-mark">?</p>
        </div>
    )
}