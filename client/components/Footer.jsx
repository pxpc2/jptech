import { styles } from '@/styles';

export default function Footer() {
  return (
    <div className={`${styles.sectionWidth} ${styles.paddingX} h-[250px] py-2`}>
      <div className="flex flex-nowrap items-center justify-center w-full">
        <h1 className="uppercase mt-24 text-white">nosso footer</h1>
      </div>
    </div>
  );
}
