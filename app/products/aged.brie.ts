import {Product} from "@/products/product";
import {AGED_BRIE} from "@/products/product-type-names";

export class AgedBrie extends Product {
  constructor(sellIn: number, quality: number) {
    super(AGED_BRIE, sellIn, quality);
  }

  updateQuality(): void {
    if (this.sellInDateHasPassed()) {
      this.increaseQuality()
    }

    this.increaseQuality()

    if (this.hasReachedMaximumQuality()) {
      this.resetQualityToMaximum()
    }
  }
}
