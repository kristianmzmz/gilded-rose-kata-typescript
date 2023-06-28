import {SULFURAS_HAND_OF_RAGNAROS} from "@/gilded-rose";


import {Product} from "@/products/product";
import {Sulfuras} from "@/products/sulfuras";

describe('Aged brie Item', () => {
  it('should create the product named Sulfuras, hand of Ragnaros', () => {
    const sulfuras: Product = new Sulfuras(3, 6);
    expect(sulfuras.name).toBe(SULFURAS_HAND_OF_RAGNAROS);
  });

  it('should have always a quality of 80', () => {
    let quality: number = 20;
    const conjuredItem: Product = new Sulfuras(20, quality);

    conjuredItem.updateQuality()

    expect(conjuredItem.quality).toBe(80);
  });

  it('should have always a quality of 80', () => {
    let quality: number = 20;
    const conjuredItem: Product = new Sulfuras(20, quality);

    conjuredItem.updateQuality()

    expect(conjuredItem.quality).toBe(80);
  });
});
