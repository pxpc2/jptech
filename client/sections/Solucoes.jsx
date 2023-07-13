import Image from 'next/image';

export default function Solucoes() {
  return (
    <div className={`${styles.sectionWidth} ${styles.sectionPadding}`}>
      <div className="flex flex-row flex-nowrap items-center gap-20">
        <div className="SOLUCOES__IMAGEM">
          <Image
            src={'/Triangle.png'}
            alt="triangle"
            width={700}
            height={700}
          />
        </div>
        <div className="SOLUCOES__TEXTOS">
          <h1>
            Levamos a inovação tecnológica para
            <span className="underline">todo</span> o Brasil.
          </h1>
        </div>
      </div>
    </div>
  );
}
