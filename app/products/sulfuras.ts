import {SULFURAS_HAND_OF_RAGNAROS} from "@/gilded-rose";
import {Item, Product} from "@/item";

export class Sulfuras extends Item implements Product {
  constructor(sellIn, quality) {
    super(SULFURAS_HAND_OF_RAGNAROS, sellIn, quality);
  }

  updateQuality(): void {}

  updateSellIn(): void {}
}
