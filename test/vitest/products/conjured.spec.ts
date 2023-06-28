import {Conjured} from "@/products/conjured";
import {Product} from "@/products/product";

describe('Conjured Item', () => {
  it('should decrease quality by two when its quality is updated', () => {
    let initialQuality: number = 6;
    const conjuredItem: Product = new Conjured("Mana Cake", 3, initialQuality);

    conjuredItem.updateQuality()

    expect(conjuredItem.name).toBe('Conjured Mana Cake');
    expect(conjuredItem.quality).toBe(initialQuality - 2);
  });

  it('should not decrease its quality under zero', () => {
    let zeroQuality: number = 0;
    const conjuredItem: Product = new Conjured("Mana Cake", 3, zeroQuality);

    conjuredItem.updateQuality()

    expect(conjuredItem.name).toBe('Conjured Mana Cake');
    expect(conjuredItem.quality).toBe(0);
  });


  it('should decrease its sell in date by one when its sell in date is updated', () => {
    let initialSellIn: number = 3;
    const conjuredItem: Product = new Conjured("Mana Cake", initialSellIn, 6);

    conjuredItem.updateSellIn()

    expect(conjuredItem.name).toBe('Conjured Mana Cake');
    expect(conjuredItem.sellIn).toBe(initialSellIn - 1);
  });

});
