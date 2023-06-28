import {Product} from "@/item";
import {CONJURED} from "@/gilded-rose";

export class Conjured extends Product {
  constructor(name: string, sellIn: number, quality: number) {
    super(CONJURED + name, sellIn, quality)
  }

  updateQuality(): void {
    if (this.quality > 0) {
      this.quality = this.quality - 2
    }

    if (this.quality < 0) {
      this.quality = 0
    }
  }

  updateSellIn(): void {
    this.sellIn--
  }

}
