import { Item, GildedRose } from '@/gilded-rose';

describe('Gilded Rose', () => {
  it('should foo', () => {
    const gildedRose = new GildedRose([new Item("Conjured Mana Cake", 3, 6)]);
    let items = gildedRose.updateQuality();
    expect(items[0].name).toBe('Conjured Mana Cake');
    expect(items[0].sellIn).toBe(2);
    expect(items[0].quality).toBe(4);
  });
});
