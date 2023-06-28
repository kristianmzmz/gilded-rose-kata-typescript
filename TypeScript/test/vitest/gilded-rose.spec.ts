import { Item, GildedRose } from '@/gilded-rose';

describe('Gilded Rose', () => {
  it('should update quality and sell in date for Conjured item', () => {
    const gildedRose = new GildedRose([new Item("Conjured Mana Cake", 3, 6)]);
    let items = gildedRose.updateQuality();
    expect(items[0].name).toBe('Conjured Mana Cake');
    expect(items[0].sellIn).toBe(2);
    expect(items[0].quality).toBe(4);
  });
  it('should update quality and sell in date for Backstage passes item', () => {
    const gildedRose = new GildedRose([new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20)]);
    let items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).toBe(14);
    expect(items[0].quality).toBe(21);
  });
  it('should update quality and sell in date for Backstage passes item and less than 10 days to sell in', () => {
    const gildedRose = new GildedRose([new Item("Backstage passes to a TAFKAL80ETC concert", 10, 20)]);
    let items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).toBe(9);
    expect(items[0].quality).toBe(22);
  });
  it('should update quality and sell in date for Backstage passes item and less than 5 days to sell in', () => {
    const gildedRose = new GildedRose([new Item("Backstage passes to a TAFKAL80ETC concert", 5, 20)]);
    let items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).toBe(4);
    expect(items[0].quality).toBe(23);
  });
});
