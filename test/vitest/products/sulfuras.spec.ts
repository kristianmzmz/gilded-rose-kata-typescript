import {Product} from "@/products/product";
import {Sulfuras} from "@/products/sulfuras";
import {SULFURAS_HAND_OF_RAGNAROS} from "@/products/product-type-names";

describe('Aged brie Item', () => {
  it('should create the product named Sulfuras, hand of Ragnaros', () => {
    const sulfuras: Product = new Sulfuras(3);
    expect(sulfuras.name).toBe(SULFURAS_HAND_OF_RAGNAROS);
  });

  it('should have always a quality of 80', () => {
    const sulfuras: Product = new Sulfuras(20);

    sulfuras.updateQuality()

    expect(sulfuras.quality).toBe(80);
  });

  it('should not decrease in date when its sell in date is updated', () => {
    let initialSellIn: number = 20;
    const sulfuras: Product = new Sulfuras(initialSellIn);

    sulfuras.updateSellIn()

    expect(sulfuras.sellIn).toBe(initialSellIn);
  });
});
