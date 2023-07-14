import Image from 'next/image';
import { styles } from '../styles';
import { pages } from '../utils/constants';

export default function Navbar() {
  return (
    <div className={`${styles.sectionWidth} ${styles.paddingX} h-[80px] py-2`}>
      <div className="flex flex-nowrap items-center justify-between">
        <div className="navbar-logo">
          <Image src={'/LOGO.svg'} alt="logo" width={150} height={150} />
        </div>
        <div className="navbar-menu">
          <ul className="w-full flex flex-row gap-8 items-center">
            {pages.map((page, index) => (
              <li key={index} className="">
                <a href={page.route} className="text-sm text-slate-200">
                  {page.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-social-buttons">
          <button
            className="w-[120px] h-[38px] rounded-sm
          text-sm bg-slate-200 border-blue-600 border-[1px]  text-blue-600"
          >
            Contato
          </button>
        </div>
      </div>
    </div>
  );
}
