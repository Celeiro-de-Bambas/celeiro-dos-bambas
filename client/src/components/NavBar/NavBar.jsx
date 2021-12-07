import React, { useState, useEffect  } from "react";
import styles from "./navBar.module.css";
import apiAxios from "../../services/api-axios";

function NavBar( {menu, setMenu} ) {
  const [navbar, setNavBar] = useState([]);
  const [Logo, setLogo] = useState([]);

  const loadNavBar = async () => {
    const res = await apiAxios.get('navbar');
    setNavBar(res.data);
    setLogo(res.data.Logo.url);

  };

  useEffect(
    () => {loadNavBar()}, [],
  );

  return (
    <div>

      <header className="fontNavbar" id={styles.Navbar}>
          <nav className={`container ${styles.Menu}`}>
            <div className={styles.LogoNav}>
              <img className={styles.LogoImg} src = {Logo} alt="Logo Celeiro"/>
            </div>

            <div className={styles.UlButton}>
            <ul className={styles.NavBarList}>
              <li><a className = {styles.Assoc} href= "#Associacao" >A associação</a></li>
              <li ><a className = {styles.Impac} href= "#Impacto" >Impacto</a></li>
              <li ><a className = {styles.Parc} href= "#Parceiro" >Parceiros</a></li>
              <li ><a className = {styles.Contat} href= "#Contato" >Contato</a></li>
            </ul>
             <a className={styles.buttonDonate} href="">Doe Agora ♥</a>
             </div>
          </nav>



      </header>
    </div>
  );
}

export default NavBar;
