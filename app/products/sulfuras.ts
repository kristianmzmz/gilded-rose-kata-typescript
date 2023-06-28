import {Product} from "@/products/product";
import {SULFURAS_HAND_OF_RAGNAROS} from "@/products/product-type-names";
const SULFURAS_QUALITY = 80;

export class Sulfuras extends Product {
  constructor(sellIn) {
    super(SULFURAS_HAND_OF_RAGNAROS, sellIn, SULFURAS_QUALITY);
  }

  updateQuality(): void {}

  updateSellIn(): void {}
}
