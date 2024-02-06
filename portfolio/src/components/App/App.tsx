import { useEffect, useState } from 'react';
import Header from '../Header/Header';

import './App.scss';
import ContactForm from '../ContactForm/ContactForm';

function App() {
  // const [activeSection, setActiveSection] = useState(null);

  // const handleScroll = () => {
  //   const scrollY = window.scrollY || window.pageYOffset;

  //   // Mettez à jour l'état en fonction de la section visible
  //   const foundSection = sectionRefs.find((sectionRef, index) => {
  //     const sectionTop = sectionRef.current.offsetTop - 50;
  //     const sectionBottom = sectionTop + sectionRef.current.offsetHeight;

  //     return scrollY >= sectionTop && scrollY < sectionBottom;
  //   });

  //   setActiveSection(foundSection?.current.id);
  // };

  // useEffect(() => {
  //   // Ajoutez un écouteur d'événements scroll lors du montage du composant
  //   window.addEventListener('scroll', handleScroll);

  //   // Nettoyez l'écouteur d'événements lors du démontage du composant
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);
  return (
    <div className="App">
      <Header />
      <main>
        <section className="container section section__height" id="accueil">
          <div className="presentation">
            <img src="./picture.jpeg" alt="portrait de Lilian Marechau" />
            <div className="presentation__infos">
              <h2>Bonjour et bienvenue sur mon portfolio !</h2>
              <p>
                Je m&apos;appelle <span>Lilian Marechau</span>. <br />
                Je suis <span>développeur front-end</span> passionné !
              </p>
              <p>scroll pour en découvrir plus !</p>
              <div className="mouse" />
            </div>
          </div>
        </section>

        <section className="container section section__height" id="about">
          <h2 className="section__title">À propos de moi</h2>
          <div className="a-propos">
            <p>
              Comme dit plus haut, je m&apos;appelle <span>Lilian</span>.
            </p>
            <p>
              Avant d&apos;être développeur web, j&apos;étudiais dans le milieu
              du spéctacle. J&apos;aspirais à devenir un grand
              <span> régisseur son</span> !
            </p>
            <p>
              Cependant, il arrive que l&apos;on se trompe complêtement
              d&apos;orientation... et après être resté quelques années dans ce
              milieu, j&apos;ai préféré faire quelque chose qui
              m&apos;épanouisse vraiment et qui me fasse vibrer !
            </p>
            <p>
              Alors, j&apos;ai arrêté mes études précédentes, j&apos;ai suivi
              une formation de développeur web et web mobile et me voici
              aujourd&apos;hui
              <span> Développeur Web React</span> ! <br /> Trop cool !!
            </p>
            <p>
              Je suis encore jeune dans le milieu du développement web, mais les
              différents projets que j&apos;ai pu réalisé n&apos;ont fait que
              confirmer mon envie d&apos;exercer ce beau métier qu&apos;est
              développeur web !
            </p>
          </div>
        </section>

        <section className="container section section__height" id="skills">
          <h2 className="section__title">Compétences</h2>
          <div className="competences">
            <div className="competences__techno">
              <h3>Technologies</h3>
              <ul>
                <li>
                  <i className="bx bxl-html5" /> - HTML
                </li>
                <li>
                  <i className="bx bxl-css3" /> - CSS
                </li>
                <li>
                  <i className="bx bxl-javascript" /> - JavaScript
                </li>
                <li>
                  <i className="bx bxl-typescript" /> - TypeScript
                </li>
                <li>
                  <i className="bx bxl-php" /> - PHP
                </li>
              </ul>
            </div>
            <div className="competences__framework">
              <h3>Bibliothèques et Framework</h3>
              <ul>
                <li>
                  <i className="bx bx-cube" /> - Laravel
                </li>
                <li>
                  <i className="bx bxl-react" /> - React
                </li>
                <li>
                  <i className="bx bxl-redux" /> - Rédux-toolkit
                </li>
                <li>
                  <i className="bx bxl-bootstrap" /> - Bootstrap
                </li>
              </ul>
            </div>
            <div className="competences__tools">
              <h3>Outils</h3>
              <ul>
                <li>
                  <i className="bx bxl-wordpress" /> - CMS Wordpress
                </li>
                <li>
                  <i className="bx bxl-git" /> - Versionning Git
                </li>
                <li>
                  <i className="bx bxl-figma" /> - Maquettage Figma
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="container section section__height" id="projets">
          <h2 className="section__title">Projets</h2>
          {/* <Carousel /> */}
          <div className="projets">
            <div className="projets__card lsba">
              <img
                src="./lets-be-afraid-site.png"
                alt="interface du site internet Let's Be Afraid"
              />
              <h4>Let&apos;s Be Afraid!</h4>
              <p>
                Réseau social dédié à l&apos;horreur ! Le back est en Laravel et
                le front en React
              </p>
              <a href="#toto">Visiter le site</a>
            </div>
            <div className="projets__card johanna">
              <img
                src="./johanna-bouheret-site.png"
                alt="interface du site internet de johanna bouheret"
              />
              <h4>Giovanna Broschi • portfolio</h4>
              <p>
                Site vitrine d&apos;une amie dans la musique et la photographie.
                Le site est en full react
              </p>
              <a href="#toto">Visiter le site</a>
            </div>
            <div className="projets__card portfolio">
              <img src="./portfolio-site.png" alt="Interface de ce portfolio" />
              <h4>Ce Portfolio</h4>
              <p>Site vitrine de mon travail, développé en react.</p>
              <a href="#toto">Visiter le site</a>
            </div>
          </div>
        </section>

        <section className="container section section__height" id="contact">
          <h2 className="section__title">Me contacter</h2>
          <ContactForm />
        </section>
      </main>
    </div>
  );
}

export default App;
