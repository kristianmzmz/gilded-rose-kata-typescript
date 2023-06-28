import {SULFURAS_HAND_OF_RAGNAROS} from "@/gilded-rose";
import {Product} from "@/products/product";

export class Sulfuras extends Product {
  constructor(sellIn, quality) {
    super(SULFURAS_HAND_OF_RAGNAROS, sellIn, quality);
  }

  updateQuality(): void {
  }

  updateSellIn(): void {
  }
}
