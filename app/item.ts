export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export abstract class Product extends Item {
  updateQuality(): void {
    this.quality++
  }
  updateSellIn(): void{
    this.sellIn--
  }
}

