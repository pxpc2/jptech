import { styles } from '@/styles';

export default function CTA() {
  return (
    <div className={`${styles.sectionPadding} ${styles.sectionWidth}`}>
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
              MEU AMIGO.
            </p>
          </div>
        </div>
        <button
          className="w-[500px] h-[38px] rounded-sm
          text-sm bg-white border-blue-600 border-[1px] mt-8 text-blue-600"
        >
          Agenda já uma solução
        </button>
      </div>
    </div>
  );
}
