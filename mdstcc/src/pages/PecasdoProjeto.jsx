import styles from "../styles/PecasdoProjeto.module.css";
import { Link } from "react-router-dom"

import Logo from "../imgs/iconepyrobot.png"

import buzzer from "../imgs/buzzer.jpg"
import modulomq2 from "../imgs/modulomq2.jpg"
import led from "../imgs/led.jpg"
import jumper_macho_femea from "../imgs/jumper-macho-femea.jpg"
import moduloGSMSIM800l from "../imgs/moduloGSMSIM800l.webp"
import protoboard from "../imgs/protoboard.jpg"
import jumperf from "../imgs/jumperf.jpg"
import resistoor from "../imgs/resistoor.jpg"
import arduino from "../imgs/arduino.jpg"
import resistor from "../imgs/resistor.jpg"
import _20cmmxm_3 from "../imgs/20cmmxm_3.jpg"
import botao from "../imgs/botao.jpg"







// const PecasdoProjeto = () => {
//   const handleIconePyroBotImageClick = () => {
//     // Please sync "Inicio" to the project
//   };
function PecasdoProjeto() {
  return (
    <div className={styles.index}>
      <div className={styles.div}>
        <div className={styles.text_wrapper}>PyroBot</div>
        <div className={styles.logod}>
        <Link to={"/Inicio"}>
        <img
            className={styles.icone_pyro_bot}
            alt="Icones de vetor de"
            src={Logo}
          />
        </Link>
        </div>
        <div className={styles.overlap_group}>
          <div className={styles.text_wrapper_2}>Peças do projeto</div>
          <img
            className={styles.buzzer}
            alt="Buzzer"
            src={buzzer}
          />
          <img
            className={styles.modulomq}
            alt="Modulomq"
            src={modulomq2}
          />
          <img
            className={styles.led}
            alt="Led"
            src={led}
          />
          <img
            className={styles.jumper_macho_femea}
            alt="Jumper macho femea"
            src={jumper_macho_femea}
          />
          <img
            className={styles.modulo}
            alt="Modulo"
            src={moduloGSMSIM800l}
          />
          <img
            className={styles.protoboard}
            alt="Protoboard"
            src={protoboard}
          />
          <img
            className={styles.jumperf}
            alt="Jumperf"
            src={jumperf}
          />
          <img
            className={styles.resistoor}
            alt="Resistoor"
            src={resistoor}
          />
          <img
            className={styles.arduino}
            alt="Arduino"
            src={arduino}
          />
          <img
            className={styles.resistor}
            alt="Resistor"
            src={resistor}
          />
          <img
            className={styles.element}
            alt="Element"
            src={_20cmmxm_3}
          />
          <img
            className={styles.botao}
            alt="Botao"
            src={botao}
          />
        </div>
      </div>
    </div>
  );
}

export default PecasdoProjeto;
