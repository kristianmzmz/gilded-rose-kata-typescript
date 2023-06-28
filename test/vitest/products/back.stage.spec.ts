import {Product} from "@/products/product";
import {BackStage} from "@/products/backStage";
import {BACK_STAGE_PASS} from "@/products/product-type-names";

describe('Back Stage Product', () => {
  it('should create the product named Back Stage', () => {
    const backStage: Product = new BackStage(3, 6);
    expect(backStage.name).toBe(BACK_STAGE_PASS);
  });

  it('should decrease its sell in date by one when its sell in date is updated', () => {
    let initialSellIn: number = 3;
    const backStage: Product = new BackStage(initialSellIn, 6);
    backStage.updateSellIn()

    expect(backStage.sellIn).toBe(initialSellIn - 1);
  });

  it('should increase quality by one if it is not expiring in less than 10 days', () => {
    let initialQuality: number = 6;
    let expiresIn: number = 20;
    const backStage: Product = new BackStage(expiresIn, initialQuality);
    backStage.updateQuality()

    expect(backStage.quality).toBe(initialQuality + 1);
  });

  it('should increase quality by two if it is expiring in less than 10 days and more than 5', () => {
    let initialQuality: number = 6;
    let expiresIn: number = 6;
    const backStage: Product = new BackStage(expiresIn, initialQuality);
    backStage.updateQuality()

    expect(backStage.quality).toBe(initialQuality + 2);
  });

  it('should increase quality by two if it is expiring in less than 5', () => {
    let initialQuality: number = 6;
    let expiresIn: number = 4;
    const backStage: Product = new BackStage(expiresIn, initialQuality);
    backStage.updateQuality()

    expect(backStage.quality).toBe(initialQuality + 3);
  });

  it('should increase quality not above the maximum quality', () => {
    let maximumQuality: number = 50;
    const backStage: Product = new BackStage(20, maximumQuality);
    backStage.updateQuality()

    expect(backStage.quality).toBe(maximumQuality);
  });

  it('should increase quality not above the maximum quality even if it has expired', () => {
    let maximumQuality: number = 50;
    let almostMaximumQuality: number = 49;
    let expired: number = -1;
    const backStage: Product = new BackStage(expired, almostMaximumQuality);
    backStage.updateQuality()

    expect(backStage.quality).toBe(maximumQuality);
  });
});
