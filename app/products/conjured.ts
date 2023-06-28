import {Product} from "@/products/product";
import {CONJURED} from "@/products/product-type-names";

export class Conjured extends Product {
  constructor(name: string, sellIn: number, quality: number) {
    super(CONJURED + name, sellIn, quality)
  }

  updateQuality(): void {
    if (!this.qualityIsBelowZero()) {
      this.quality = this.quality - 2
    }

    if (this.qualityIsBelowZero()) {
      this.quality = 0
    }
  }

  updateSellIn(): void {
    this.sellIn--
  }

}
