import {Item} from "@/item";

export const SULFURAS_HAND_OF_RAGNAROS = 'Sulfuras, Hand of Ragnaros';
export const CONJURED = 'Conjured ';

export const AGED_BRIE = 'Aged Brie';

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
        if (this.sellInDateHasPassed(i)) {
          this.items[i].quality = 0
        }
      } else if (this.isSulfuras(i)) {

      } else {
        if (this.hasQuality(i)) {
          this.decreaseQuality(i);
        }
        this.decreaseSellInDate(i);

        if (this.sellInDateHasPassed(i) && this.hasQuality(i)) {
          this.decreaseQuality(i);
        }
      }
    }

    return this.items;
  }

  private decreaseQuality(i: number) {
    this.items[i].quality--
  }

  private hasQuality(i: number) {
    return this.items[i].quality > 0;
  }
  private updateBackStagePassQuality(i: number) {
    if (this.hasLessThanMaximumQuality(i)) {
      this.increaseQuality(i);
      if (this.items[i].sellIn < 11 && this.hasLessThanMaximumQuality(i)) {
        this.increaseQuality(i);
      }
      if (this.items[i].sellIn < 6 && this.hasLessThanMaximumQuality(i)) {
        this.increaseQuality(i);
      }
    }
  }

  private increaseQuality(i: number) {
    this.items[i].quality++
  }

  private isSulfuras(i: number) {
    return this.items[i].name == SULFURAS_HAND_OF_RAGNAROS;
  }

  private isBackStagePass(i: number) {
    return this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert';
  }

  private isConjuredItem(i: number) {
    return this.items[i].name.startsWith(CONJURED);
  }

  private isAgedBrie(i: number) {
    return this.items[i].name == AGED_BRIE;
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
    this.items[i].sellIn--
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
