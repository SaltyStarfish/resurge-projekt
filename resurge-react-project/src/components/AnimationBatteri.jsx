import batteristyles from "./animationbatteri.module.css";
import macbook from "../assets/images/macbook.svg";
import tombatteri from "../assets/images/empty-battery.svg";
import lyn from "../assets/images/lightning.svg";

//dette er en komponent
export default function AnimationBatteri() {

  return (
  <div id={batteristyles.colordisplayandbatterydrain}>
    <div className={batteristyles.battery}>
      <img width="92" height="296" src={tombatteri} alt="Batteri"/>
      <div className={batteristyles.batteryfill}>
        <div className={batteristyles.batteryfillgood}></div>
        <img src={lyn} alt="lyn"/>
      </div>
    </div>
    
    <div className={batteristyles.screenwithcolors}>
      <img width="486" height="329" className={batteristyles.screenframe} src={macbook} alt="illustration af en skærm, som viser en lys side og en mørk side"/>
      
      <div className={batteristyles.screenhalfdark}>
      </div>
      
      <div className={batteristyles.screenhalflight}>
      </div>
    </div>
    
    <div className={batteristyles.battery}>
      <div className={batteristyles.batteryfill}>
        <div className={batteristyles.batteryfillbad}></div>
         <img src={lyn} alt="lyn"/>
      </div>
      <img width="92" height="296" src={tombatteri} alt="Batteri"/>
    </div>
  </div>
  )
}


