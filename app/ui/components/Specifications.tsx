import { FC } from "react";
import { montserrat } from "../fonts/fonts";
import { Specifications as SpecificationsType } from "@/app/lib/definitions";

interface SpecificationsProps {
  specifications: SpecificationsType;
}

export const Specifications: FC<SpecificationsProps> = ({ specifications }) => (
  <div className="specifications mb-10 p-4">
    <h3 className={`${montserrat.className} text-2xl font-semibold mb-2`}>
      Specifications
    </h3>
    <ul className="font-medium">
      <li>
        <span className="">Brand:</span> {specifications.brand}
      </li>
      <li className="py-3">
        <span className="">Item Weight:</span> {specifications.itemWeight}
      </li>
      <li>
        <span className="">Item Model Number:</span>{" "}
        {specifications.itemModelNumber}
      </li>
      <li className="py-3">
        <span className="">Dimensions:</span> {specifications.dimensions}
      </li>
      <li>
        <span className="">Colour:</span> {specifications.colour}
      </li>
    </ul>
  </div>
);
