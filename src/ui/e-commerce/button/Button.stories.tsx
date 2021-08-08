import { Button } from "./Button";
import PriceTagIcon from "../../assets/price-tag-button";

export default {
  title: "E-commerce/Button",
};

export const Primary = () => (
  <Button icon={<PriceTagIcon />} title="Click me!" />
);
