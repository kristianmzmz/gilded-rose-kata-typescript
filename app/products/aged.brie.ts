import {AGED_BRIE} from "@/gilded-rose";


import {Product} from "@/products/product";

export class AgedBrie extends Product{
  constructor(sellIn: number, quality: number) {
    super(AGED_BRIE, sellIn, quality);
  }

  updateQuality(): void {
    if (this.hasLessThanMaximumQuality()) {
      this.quality = this.quality + 1
      if (this.sellInDateHasPassed()) {
        this.quality = this.quality + 1
      }
    }
  }
}
