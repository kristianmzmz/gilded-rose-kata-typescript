import {Product} from "@/products/product";
import {BACK_STAGE_PASS} from "@/products/product-type-names";

export class BackStage extends Product {
  private readonly FIRST_THRESHOLD: number = 11;
  private readonly SECOND_THRESHOLD: number = 6;

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

  updateSellIn(): void {
    super.updateSellIn();
  }
}
