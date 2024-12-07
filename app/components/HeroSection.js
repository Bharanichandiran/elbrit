import styles from '../styles/HeroSection.module.scss';
import Image from 'next/image';
import Vitamins from '../images/download.png';
import Icon1 from '../images/icon1.png'; // Example image for nav list item
import Icon2 from '../images/icon2.png';
import Icon3 from '../images/icon3.png';

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <h1>Essential Vitamins</h1>
      <div className={styles.textContainer}>
        
        <div className={styles.FeatutureItem}>
        <p>Online Medical Supplies</p>
        <p>Get Your Vitamins & Minerals</p>
        <button className={styles.exploreButton}>EXPLORE</button>
      </div>
      <div className={styles.FeatutureItem}>
      <div className={styles.imageContainer}>
        <Image src={Vitamins} alt="Vitamins" />
        </div>
        </div>
        <div className={styles.featureItem}>
          <nav className={styles.nav}>
            <ul className={styles.navList}>
              <li className={styles.navItem}>
                <Image src={Icon1} alt="Vitamins" width={40} height={40} />
                <p>Vitamins <br /><span>Increased Vitamins and<br />
                minerals in your diet</span></p>
              </li>
              <li className={styles.navItem}>
                <Image src={Icon2} alt="Weight Loss" width={40} height={40} />
                <p>Weight Loss<br /><span> Weight Loss <br />
                Find scientifically proven solutions</span></p>
              </li>
              <li className={styles.navItem}>
                <Image src={Icon3} alt="Functional Foods" width={40} height={40} />
              <p>Functional Foods<br /><span>Functional Foods<br />
              From protein powers to baby formula</span></p>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
}
