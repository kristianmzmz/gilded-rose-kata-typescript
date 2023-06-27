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
      if (this.items[i].name.startsWith('Conjured')) {
        this.updateConjuredItemQuality(i);
        this.decreaseSellInDate(i);
      } else if (this.items[i].name == 'Aged Brie'){
        if (this.hasLessThanMaximumQuality(i)) {
          this.items[i].quality = this.items[i].quality + 1
        }

        this.decreaseSellInDate(i);

        if (this.hasLessThanMaximumQuality(i) && this.sellInDateHasPassed(i)) {
          this.items[i].quality = this.items[i].quality + 1
        }

      } else {
        if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
          if (this.items[i].quality > 0) {
            if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
              this.items[i].quality = this.items[i].quality - 1
            }
          }
        } else {
          if (this.hasLessThanMaximumQuality(i)) {
            this.items[i].quality = this.items[i].quality + 1
            if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
              if (this.items[i].sellIn < 11) {
                if (this.hasLessThanMaximumQuality(i)) {
                  this.items[i].quality = this.items[i].quality + 1
                }
              }
              if (this.items[i].sellIn < 6) {
                if (this.hasLessThanMaximumQuality(i)) {
                  this.items[i].quality = this.items[i].quality + 1
                }
              }
            }
          }
        }
        if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
          this.items[i].sellIn = this.items[i].sellIn - 1;
        }
        if (this.sellInDateHasPassed(i)) {
          if (this.items[i].name != 'Aged Brie') {
            if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
              if (this.items[i].quality > 0) {
                if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                  this.items[i].quality = this.items[i].quality - 1
                }
              }
            } else {
              this.items[i].quality = this.items[i].quality - this.items[i].quality
            }
          } else {
            if (this.hasLessThanMaximumQuality(i)) {
              this.items[i].quality = this.items[i].quality + 1
            }
          }
        }
      }
    }

    return this.items;
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
