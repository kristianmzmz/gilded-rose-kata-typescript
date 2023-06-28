import {GildedRose} from "@/gilded-rose";
import {Item} from "@/item";
import {Sulfuras} from "@/products/sulfuras";
import {Conjured} from "@/products/conjured";
import {AgedBrie} from "@/products/aged.brie";
import {BackStage} from "@/products/backStage";

describe('Gilded Rose', () => {
  it('should execute the app and match the golden master output', () => {
    debugger;
    let result = appTest();
    let expectedResult = goldenMaster();
    expect(result).toEqual(expectedResult)
  });
});


function appTest(): string {
  const items = [
    new Item("+5 Dexterity Vest", 10, 20), //
    new AgedBrie(2, 0), //
    new Item("Elixir of the Mongoose", 5, 7), //
    new Sulfuras(0), //
    new Sulfuras(-1),
    new BackStage(15, 20),
    new BackStage(10, 49),
    new BackStage(5, 49),
    new Conjured("Mana Cake", 3, 6)];


  const gildedRose = new GildedRose(items);

  let days: number = 10;

  let output = ''

  for (let i = 0; i < days; i++) {
    output += i != 0 ? "\n" : '';

    output += "-------- day " + i + " --------\n";
    output += "name, sellIn, quality\n";
    items.forEach(element => {
      output += element.name + ' ' + element.sellIn + ' ' + element.quality;
      output += "\n";
    });

    gildedRose.updateQuality();
  }
  output += "\n";

  return output
}

const goldenMaster = (): string =>{
  return "-------- day 0 --------\n" +
    "name, sellIn, quality\n" +
    "+5 Dexterity Vest 10 20\n" +
    "Aged Brie 2 0\n" +
    "Elixir of the Mongoose 5 7\n" +
    "Sulfuras, Hand of Ragnaros 0 80\n" +
    "Sulfuras, Hand of Ragnaros -1 80\n" +
    "Backstage passes to a TAFKAL80ETC concert 15 20\n" +
    "Backstage passes to a TAFKAL80ETC concert 10 49\n" +
    "Backstage passes to a TAFKAL80ETC concert 5 49\n" +
    "Conjured Mana Cake 3 6\n" +
    "\n" +
    "-------- day 1 --------\n" +
    "name, sellIn, quality\n" +
    "+5 Dexterity Vest 9 19\n" +
    "Aged Brie 1 1\n" +
    "Elixir of the Mongoose 4 6\n" +
    "Sulfuras, Hand of Ragnaros 0 80\n" +
    "Sulfuras, Hand of Ragnaros -1 80\n" +
    "Backstage passes to a TAFKAL80ETC concert 14 21\n" +
    "Backstage passes to a TAFKAL80ETC concert 9 50\n" +
    "Backstage passes to a TAFKAL80ETC concert 4 50\n" +
    "Conjured Mana Cake 2 4\n" +
    "\n" +
    "-------- day 2 --------\n" +
    "name, sellIn, quality\n" +
    "+5 Dexterity Vest 8 18\n" +
    "Aged Brie 0 2\n" +
    "Elixir of the Mongoose 3 5\n" +
    "Sulfuras, Hand of Ragnaros 0 80\n" +
    "Sulfuras, Hand of Ragnaros -1 80\n" +
    "Backstage passes to a TAFKAL80ETC concert 13 22\n" +
    "Backstage passes to a TAFKAL80ETC concert 8 50\n" +
    "Backstage passes to a TAFKAL80ETC concert 3 50\n" +
    "Conjured Mana Cake 1 2\n" +
    "\n" +
    "-------- day 3 --------\n" +
    "name, sellIn, quality\n" +
    "+5 Dexterity Vest 7 17\n" +
    "Aged Brie -1 4\n" +
    "Elixir of the Mongoose 2 4\n" +
    "Sulfuras, Hand of Ragnaros 0 80\n" +
    "Sulfuras, Hand of Ragnaros -1 80\n" +
    "Backstage passes to a TAFKAL80ETC concert 12 23\n" +
    "Backstage passes to a TAFKAL80ETC concert 7 50\n" +
    "Backstage passes to a TAFKAL80ETC concert 2 50\n" +
    "Conjured Mana Cake 0 0\n" +
    "\n" +
    "-------- day 4 --------\n" +
    "name, sellIn, quality\n" +
    "+5 Dexterity Vest 6 16\n" +
    "Aged Brie -2 6\n" +
    "Elixir of the Mongoose 1 3\n" +
    "Sulfuras, Hand of Ragnaros 0 80\n" +
    "Sulfuras, Hand of Ragnaros -1 80\n" +
    "Backstage passes to a TAFKAL80ETC concert 11 24\n" +
    "Backstage passes to a TAFKAL80ETC concert 6 50\n" +
    "Backstage passes to a TAFKAL80ETC concert 1 50\n" +
    "Conjured Mana Cake -1 0\n" +
    "\n" +
    "-------- day 5 --------\n" +
    "name, sellIn, quality\n" +
    "+5 Dexterity Vest 5 15\n" +
    "Aged Brie -3 8\n" +
    "Elixir of the Mongoose 0 2\n" +
    "Sulfuras, Hand of Ragnaros 0 80\n" +
    "Sulfuras, Hand of Ragnaros -1 80\n" +
    "Backstage passes to a TAFKAL80ETC concert 10 25\n" +
    "Backstage passes to a TAFKAL80ETC concert 5 50\n" +
    "Backstage passes to a TAFKAL80ETC concert 0 50\n" +
    "Conjured Mana Cake -2 0\n" +
    "\n" +
    "-------- day 6 --------\n" +
    "name, sellIn, quality\n" +
    "+5 Dexterity Vest 4 14\n" +
    "Aged Brie -4 10\n" +
    "Elixir of the Mongoose -1 0\n" +
    "Sulfuras, Hand of Ragnaros 0 80\n" +
    "Sulfuras, Hand of Ragnaros -1 80\n" +
    "Backstage passes to a TAFKAL80ETC concert 9 27\n" +
    "Backstage passes to a TAFKAL80ETC concert 4 50\n" +
    "Backstage passes to a TAFKAL80ETC concert -1 0\n" +
    "Conjured Mana Cake -3 0\n" +
    "\n" +
    "-------- day 7 --------\n" +
    "name, sellIn, quality\n" +
    "+5 Dexterity Vest 3 13\n" +
    "Aged Brie -5 12\n" +
    "Elixir of the Mongoose -2 0\n" +
    "Sulfuras, Hand of Ragnaros 0 80\n" +
    "Sulfuras, Hand of Ragnaros -1 80\n" +
    "Backstage passes to a TAFKAL80ETC concert 8 29\n" +
    "Backstage passes to a TAFKAL80ETC concert 3 50\n" +
    "Backstage passes to a TAFKAL80ETC concert -2 0\n" +
    "Conjured Mana Cake -4 0\n" +
    "\n" +
    "-------- day 8 --------\n" +
    "name, sellIn, quality\n" +
    "+5 Dexterity Vest 2 12\n" +
    "Aged Brie -6 14\n" +
    "Elixir of the Mongoose -3 0\n" +
    "Sulfuras, Hand of Ragnaros 0 80\n" +
    "Sulfuras, Hand of Ragnaros -1 80\n" +
    "Backstage passes to a TAFKAL80ETC concert 7 31\n" +
    "Backstage passes to a TAFKAL80ETC concert 2 50\n" +
    "Backstage passes to a TAFKAL80ETC concert -3 0\n" +
    "Conjured Mana Cake -5 0\n" +
    "\n" +
    "-------- day 9 --------\n" +
    "name, sellIn, quality\n" +
    "+5 Dexterity Vest 1 11\n" +
    "Aged Brie -7 16\n" +
    "Elixir of the Mongoose -4 0\n" +
    "Sulfuras, Hand of Ragnaros 0 80\n" +
    "Sulfuras, Hand of Ragnaros -1 80\n" +
    "Backstage passes to a TAFKAL80ETC concert 6 33\n" +
    "Backstage passes to a TAFKAL80ETC concert 1 50\n" +
    "Backstage passes to a TAFKAL80ETC concert -4 0\n" +
    "Conjured Mana Cake -6 0\n" +
    "\n"
}
