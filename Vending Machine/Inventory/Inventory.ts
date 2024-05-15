import { Product } from "./Product";

export class Inventory{

  aisleToProductMap: Map<number,Product>;
  productCountMap: Map<Product,number>;
  availableAisles: number[]
}