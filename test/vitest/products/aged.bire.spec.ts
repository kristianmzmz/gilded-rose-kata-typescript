import {AgedBrie} from "@/products/aged.brie";
import {Product} from "@/products/product";
import {AGED_BRIE} from "@/products/product-type-names";

describe('Aged brie Item', () => {
  it('should create the product named Aged Brie', () => {
    const agedBrie: Product = new AgedBrie(3, 6);
    expect(agedBrie.name).toBe(AGED_BRIE);
  });

  it('should decrease its sell in date by one when its sell in date is updated', () => {
    let initialSellIn: number = 3;
    const agedBrie: Product = new AgedBrie(initialSellIn, 6);

    agedBrie.updateSellIn()

    expect(agedBrie.sellIn).toBe(initialSellIn - 1);
  });

  it('should increase quality by one if it is not expired', () => {
    let initialQuality: number = 6;
    let notExpired: number = 3;

    const agedBrie: Product = new AgedBrie(notExpired, initialQuality);

    agedBrie.updateQuality()

    expect(agedBrie.quality).toBe(initialQuality + 1);
  });

  it('should increase quality by two if it is expired', () => {
    let initialQuality: number = 6;
    let expired: number = -1;

    const agedBrie: Product = new AgedBrie(expired, initialQuality);

    agedBrie.updateQuality()

    expect(agedBrie.quality).toBe(initialQuality + 2);
  });

  it('should increase quality not above the maximum quality', () => {
    let maximumQuality: number = 50;
    const agedBrie: Product = new AgedBrie(20, maximumQuality);
    agedBrie.updateQuality()

    expect(agedBrie.quality).toBe(maximumQuality);
  });

  it('should increase quality not above the maximum quality even if it has expired', () => {
    let maximumQuality: number = 50;
    let almostMaximumQuality: number = 49;
    let expired: number = -1;
    const agedBrie: Product = new AgedBrie(expired, almostMaximumQuality);
    agedBrie.updateQuality()

    expect(agedBrie.quality).toBe(maximumQuality);
  });

});
