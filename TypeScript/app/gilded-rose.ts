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

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      if (this.isConjuredItem(i)) {
        this.decreaseSellInDate(i);
        this.updateConjuredItemQuality(i);
      } else if (this.isAgedBrie(i)) {
        this.decreaseSellInDate(i);
        this.updateAgedBrieQuality(i);
      } else if (this.isBackStagePass(i)) {
        this.updateBackStagePassQuality(i);
        this.decreaseSellInDate(i);
        this.resetQualityToZero(i);
      } else {
        if (!this.isAgedBrie(i) && !this.isBackStagePass(i)) {
          if (this.items[i].quality > 0 && !this.isSulfuras(i)) {
            this.items[i].quality = this.items[i].quality - 1
          }
        } else if (this.hasLessThanMaximumQuality(i)) {
          this.items[i].quality = this.items[i].quality + 1
          if (this.isBackStagePass(i)) {
            if (this.items[i].sellIn < 11 && this.hasLessThanMaximumQuality(i)) {
              this.items[i].quality = this.items[i].quality + 1
            }
            if (this.items[i].sellIn < 6 && this.hasLessThanMaximumQuality(i)) {
              this.items[i].quality = this.items[i].quality + 1
            }
          }
        }
        if (!this.isSulfuras(i)) {
          this.items[i].sellIn = this.items[i].sellIn - 1;
        }
        if (this.sellInDateHasPassed(i) && !(this.isAgedBrie(i))) {
          if (this.isBackStagePass(i)) {
            this.items[i].quality = this.items[i].quality - this.items[i].quality
          } else {
            if (this.items[i].quality > 0 && !this.isSulfuras(i)) {
              this.items[i].quality = this.items[i].quality - 1
            }
          }
        }
      }
    }

    return this.items;
  }

  private resetQualityToZero(i: number) {
    if (this.sellInDateHasPassed(i)) {
      this.items[i].quality = 0
    }
  }

  private updateBackStagePassQuality(i: number) {
    if (this.hasLessThanMaximumQuality(i)) {
      this.items[i].quality = this.items[i].quality + 1
      if (this.items[i].sellIn < 11 && this.hasLessThanMaximumQuality(i)) {
        this.items[i].quality = this.items[i].quality + 1
      }
      if (this.items[i].sellIn < 6 && this.hasLessThanMaximumQuality(i)) {
        this.items[i].quality = this.items[i].quality + 1
      }
    }
  }

  private isSulfuras(i: number) {
    return this.items[i].name == 'Sulfuras, Hand of Ragnaros';
  }

  private isBackStagePass(i: number) {
    return this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert';
  }

  private isConjuredItem(i: number) {
    return this.items[i].name.startsWith('Conjured');
  }

  private isAgedBrie(i: number) {
    return this.items[i].name == 'Aged Brie';
  }

  private updateAgedBrieQuality(i: number) {
    if (this.hasLessThanMaximumQuality(i)) {
      this.items[i].quality = this.items[i].quality + 1
      if (this.sellInDateHasPassed(i)) {
        this.items[i].quality = this.items[i].quality + 1
      }
    }
  }

  private sellInDateHasPassed(i: number) {
    return this.items[i].sellIn < 0;
  }

  private hasLessThanMaximumQuality(i: number) {
    return this.items[i].quality < 50;
  }

  private decreaseSellInDate(i: number) {
    this.items[i].sellIn = this.items[i].sellIn - 1
  }

  private updateConjuredItemQuality(i: number) {
    if (this.items[i].quality > 0) {
      this.items[i].quality = this.items[i].quality - 2
    }

    if (this.items[i].quality < 0) {
      this.items[i].quality = 0
    }
  }
}
