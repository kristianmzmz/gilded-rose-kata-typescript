import {Product} from "@/products/product";
import {BACK_STAGE_PASS} from "@/products/product-type-names";

export class BackStage extends Product {
  private readonly FIRST_THRESHOLD: number = 10;
  private readonly SECOND_THRESHOLD: number = 5;

  constructor(sellIn: number, quality: number) {
    super(BACK_STAGE_PASS, sellIn, quality);
  }

  updateQuality() {
    this.increaseQuality();

    if (this.hasReachedFirstThreshold()) {
      this.increaseQuality();
    }

    if (this.hasReachedSecondThreshold()) {
      this.increaseQuality();
    }

    if (this.sellInDateHasPassed()) {
      this.resetQualityToMinimum()
    }

    if (this.hasReachedMaximumQuality()) {
      this.resetQualityToMaximum()
    }
  }


  private hasReachedFirstThreshold(): boolean {
    return this.sellIn < this.FIRST_THRESHOLD;
  }

  private hasReachedSecondThreshold(): boolean {
    return this.sellIn < this.SECOND_THRESHOLD;
  }
}
