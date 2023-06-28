import {Item} from "@/item";

export abstract class Product extends Item {
  private readonly MAX_QUALITY: number = 50;

  updateQuality(): void {
    this.increaseQuality()
  }

  updateSellIn(): void {
    this.sellIn--
  }

  protected hasReachedMaximumQuality() {
    return this.quality >= this.MAX_QUALITY;
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

  protected resetQualityToMaximum() {
    this.quality = this.MAX_QUALITY
  }
}
