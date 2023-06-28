import {Item} from "@/item";

export abstract class Product extends Item {
  updateQuality(): void {
    this.increaseQuality()
  }

  updateSellIn(): void {
    this.sellIn--
  }

  protected hasLessThanMaximumQuality() {
    return this.quality < 50;
  }

  protected sellInDateHasPassed() {
    return this.sellIn < 0;
  }

  protected qualityIsBelowZero() {
    return this.quality < 0;
  }

  protected increaseQuality() {
    this.quality++
  }
}
