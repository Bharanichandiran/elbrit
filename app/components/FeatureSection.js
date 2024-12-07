import styles from '../styles/FeatureSection.module.scss';
import Image from 'next/image';
import StudyIcon from '../images/icon4.png'; // Replace with actual icon paths
import VegIcon from '../images/icon5.png';
import IndiaIcon from '../images/icon6.png';
import ShippingIcon from '../images/icon7.png';
import RiskIcon from '../images/icon8.png';
import GMOIcon from '../images/icon9.png';

export default function GreenContainer() {
  const features = [
    {
      icon: StudyIcon,
      title: 'Clinically Studied',
      description: 'All products that we offer have undergone lab and safety tests.',
    },
    {
      icon: VegIcon,
      title: 'Vegetarian Friendly',
      description: 'We have a wide selection of vegetarian products to meet your needs.',
    },
    {
      icon: IndiaIcon,
      title: 'Made in India',
      description: 'Shop local and explore health products made right here in India.',
    },
    {
      icon: ShippingIcon,
      title: 'Free Shipping',
      description: 'We deliver to your door with no shipping costs on your orders.',
    },
    {
      icon: RiskIcon,
      title: 'No Risk',
      description: 'We ensure that all products are safe and within their shelf life.',
    },
    {
      icon: GMOIcon,
      title: 'GMO Free',
      description: 'Natural, no modified products and derivatives for those who need it.',
    },
  ];

  return (
    <div className={styles.container}>
    <div className={styles.greenContainer}>
      {features.map((feature, index) => (
        <div key={index} className={styles.featureItem}>
          <Image src={feature.icon} alt={feature.title} width={40} height={40} />
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </div>
    </div>
  );
}
