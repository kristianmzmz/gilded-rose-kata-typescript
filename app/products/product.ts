import {Item} from "@/item";

export abstract class Product extends Item {
  private readonly MAX_QUALITY: number = 50;
  private readonly MINIMUM_SELL_IN: number = 0;
  private readonly MINIMUM_QUALITY: number = 0;

  updateQuality(): void {
    if(this.sellInDateHasPassed()){
      this.decreaseQuality()
    }

    this.decreaseQuality()

    if (this.qualityIsBelowMinimum()) {
      this.quality = this.MINIMUM_QUALITY;
    }
  }

  updateSellIn(): void {
    this.decreaseSellIn();
  }

  private decreaseSellIn(): void {
    this.sellIn--
  }

  protected hasReachedMaximumQuality(): boolean {
    return this.quality >= this.MAX_QUALITY;
  }

  protected sellInDateHasPassed(): boolean {
    return this.sellIn < this.MINIMUM_SELL_IN;
  }

  protected qualityIsBelowMinimum(): boolean {
    return this.quality < this.MINIMUM_QUALITY;
  }

  protected increaseQuality(): void {
    this.quality++
  }
  protected decreaseQuality(): void {
    this.quality--
  }

  protected resetQualityToMaximum(): void {
    this.quality = this.MAX_QUALITY
  }
}
