import {Product} from "@/products/product";

export class GildedRose {
  items: Array<Product>;

  constructor(items: Product[] = [] as Array<Product>) {
    this.items = items;
  }

  updateQuality(): Product[] {
    this.items.forEach((product: Product) => {
      product.updateSellIn()
      product.updateQuality()
    })

    return this.items;
  }
}
