import Button from '@/components/Button';
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
        <Button
          width={500}
          msg={'Agende já uma solução!'}
          textColor={'indigo-600'}
        />
      </div>
    </div>
  );
}
