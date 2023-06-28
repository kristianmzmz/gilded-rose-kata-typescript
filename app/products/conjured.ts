import {CONJURED} from "@/gilded-rose";
import {Product} from "@/products/product";

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
