import Image from "next/image";
import logo from "../../../public/images/logo.webp";
import basket from "../../../public/images/basket.svg";
import { useBuy } from "../../hooks/useBuy";

export const Header = () => {
  const { buy } = useBuy();

  return (
    <header className="flex justify-between mb-8">
      <Image src={logo} alt="Octopus Energy" width={180} height={56} />
      <div className="flex">
        <Image src={basket} alt="Basket" width={24} height={24} />
        <span className="relative top-7 right-3 text-sm rounded-full h-5 w-5 text-center bg-[#f151f1]">
          {buy}
        </span>
      </div>
    </header>
  );
};
