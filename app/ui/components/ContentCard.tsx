import { FC } from "react";
import Image from "next/image";
import { lusitana } from "../fonts/fonts";
import { useBuy } from "../../hooks/useBuy";
import { Content } from "@/app/lib/definitions";

interface ContentCardProps {
  content: Content;
}

export const ContentCard: FC<ContentCardProps> = ({ content }) => {
  const { buy, addBasket } = useBuy();

  return (
    <div className="container__cardmx-auto p-4 flex flex-col mb-4">
      <Image
        className="bg-white rounded-2xl mb-10"
        src={content.imageUrl}
        alt={`Imagen`}
        height={380}
        width={180}
        style={{ width: "auto", height: "auto" }}
      />
      <h2 className={`${lusitana.className} text-4xl mb-2`}>{content.title}</h2>
      <p className="text-[#ab9fcd] justify-items-start font-medium mb-4">
        {content.vatios}
      </p>
      <div className="flex flex-row justify-between">
        <span className="text-2xl font-semibold">{content.precie}</span>
        <div className="containt__qty">
          <p className="text-center mb-1 text-sm">Qty</p>
          <button
            onClick={() => addBasket(-1)}
            className="p-xl bg-[#5f0e6b] w-6 rounded-md"
          >
            -
          </button>
          <span className="px-2 font-semibold">{buy}</span>
          <button
            onClick={() => addBasket(+1)}
            className="p-xl bg-[#f151f1] w-6 rounded-md"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};
