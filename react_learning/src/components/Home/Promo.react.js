import ReactPlayer from "react-player";
import SAudio from "./Audio.react";

function Promo50() {
  return (
    <div className="promo-section">
      <div>
        <h1>Don't miss this deal!</h1>
      </div>
    </div>
  );
}

function PromoWeekend() {
  return (
    <div className="promo-section">
      <div>
        <h1>Don't miss weekend deal!</h1>
      </div>
    </div>
  );
}

export default function Promo() {
  const day = new Date().getDay();
  const isWeekend = day === 0 || day === 6;
  return (
    <div className="promo-section">
      <ReactPlayer src="https://www.youtube.com/watch?v=dQw4w9WgXcQ" controls />
      {isWeekend ? <PromoWeekend /> : <Promo50 />}
      <SAudio />
    </div>
  );
}
