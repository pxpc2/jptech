import { styles } from '@/styles';

export default function CTA() {
  return (
    <div className={`${styles.sectionWidth} ${styles.sectionPadding}`}>
      <div className="flex flex-row flex-nowrap items-center gap-20 justify-between">
        <div className="flex flex-col flex-nowrap w-full">
          <div>
            <h1 className="text-gray-800 text-[18px] md:text-[28px] font-semibold leading-[80px]">
              Entre em contato com nossa equipe.
            </h1>
          </div>
          <div>
            <p>
              Tome sua decisão agora de falar com nois e não irá se arrepender
              malandro.
            </p>
          </div>
        </div>
        <button
          className="w-[500px] h-[38px] rounded-sm
          text-sm bg-blue-600 mt-8 text-white"
        >
          Saiba Mais!
        </button>
      </div>
    </div>
  );
}
