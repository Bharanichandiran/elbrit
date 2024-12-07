import Image from 'next/image';
import elbritLogo from '../images/image.png';

const Header = () => {
  return (
    <header className="bg-white p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Image src={elbritLogo} alt="Elbrit Logo" width={1000} height={500} />
      </div>
    </header>
  );
};

export default Header;
