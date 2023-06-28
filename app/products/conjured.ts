import {Product} from "@/products/product";
import {CONJURED} from "@/products/product-type-names";

export class Conjured extends Product {
  constructor(name: string, sellIn: number, quality: number) {
    super(CONJURED + name, sellIn, quality)
  }

  updateQuality(): void {
    if (!this.qualityIsBelowMinimum()) {
      super.updateQuality()
    }

    super.updateQuality()
  }

  updateSellIn(): void {
    super.updateSellIn()
  }

}
