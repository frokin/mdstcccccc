import styles from "../styles/QuemSomos.module.css";
import { Link } from "react-router-dom"
import Logo from "../imgs/iconepyrobot.png"
import iconeinsta from "../imgs/iconeinsta.png"
import sofia from "../imgs/sofia.jpeg"
import iza from "../imgs/iza.jpeg"
import andre from "../imgs/andre.jpeg"


function QuemSomos () {
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
        <a href="https://www.instagram.com/izabela.luz.a_/"rel="noopener" >
        <img
            className={styles.iconeinsta}
            alt="Iconeinsta"
            src={iconeinsta}
          />        
        </a>
        
        <a href="https://www.instagram.com/soso.scss/"rel="noopener" >
        <img
            className={styles.img}
            alt="Iconeinsta"
            src={iconeinsta}
          />      
        </a>

        <a href="https://www.instagram.com/andre.ngb/"rel="noopener" >
        <img
            className={styles.iconeinsta_2}
            alt="Iconeinsta"
            src={iconeinsta}
          />   
        </a>
      
          <div className={styles.text_wrapper_2}>Quem somos?</div>
          <img
            className={styles.sofia}
            alt="Sofia"
            src={sofia}
          />
          <img
            className={styles.iza}
            alt="Iza"
            src={iza}
          />
          <img
            className={styles.andre}
            alt="Andre"
            src={andre}/>
        </div>
      </div>
    </div>
  );
}

export default QuemSomos;