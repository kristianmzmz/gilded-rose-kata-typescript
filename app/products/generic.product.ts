import {Product} from "@/products/product";

export class GenericProduct extends Product {
  updateQuality(): void {
    if(this.sellInDateHasPassed()){
      this.decreaseQuality()
    }

    super.updateQuality()
  }

  updateSellIn(): void {
    super.updateSellIn();
  }
}
