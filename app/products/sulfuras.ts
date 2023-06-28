import {SULFURAS_HAND_OF_RAGNAROS} from "@/gilded-rose";

import {Product} from "@/products/product";

const SULFURAS_QUALITY = 80;

export class Sulfuras extends Product {
  constructor(sellIn) {
    super(SULFURAS_HAND_OF_RAGNAROS, sellIn, SULFURAS_QUALITY);
  }

  updateQuality(): void {}

  updateSellIn(): void {}
}
