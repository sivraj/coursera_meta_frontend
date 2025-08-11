export default function Card({num}) {
    return (
        <div className="card">
            <h1>This card's value is {num}</h1>
            <p>This card is: {num > 50 ? "High" : "Low"}</p>
        </div>
    );
}