import { lusitana } from "../fonts/fonts";
import { FC } from "react";

interface DescriptionProps {
  description: string;
}

export const Description: FC<DescriptionProps> = ({ description }) => (
  <div className="description bg-[#170048] mb-4 p-4">
    <h2 className={`${lusitana.className} text-2xl mb-2`}>Description</h2>
    <p className="font-medium mb-2">{description}</p>
  </div>
);
