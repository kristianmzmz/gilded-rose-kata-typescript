import {Product} from "@/products/product";
import {GenericProduct} from "@/products/generic.product";

describe('Generic Product', () => {
  it('should create the product with the given name', () => {
    let aRandomProductName = "A random product name";
    const genericProduct: Product = new GenericProduct(aRandomProductName, 3, 6);
    expect(genericProduct.name).toBe(aRandomProductName);
  });

  it('should decrease its sell in date by one when its sell in date is updated', () => {
    let aRandomProductName = "A random product name";
    let initialSellIn: number = 3;
    const genericProduct: Product = new GenericProduct(aRandomProductName, initialSellIn, 6);

    genericProduct.updateSellIn()

    expect(genericProduct.sellIn).toBe(initialSellIn - 1);
  });

  it('should decrease sell in by one even if it is expired', () => {
    let aRandomProductName = "A random product name";
    let expiredSellIn: number = -1;

    const genericProduct: Product = new GenericProduct(aRandomProductName, expiredSellIn, 6);

    genericProduct.updateSellIn()

    expect(genericProduct.sellIn).toBe(expiredSellIn - 1);
  });

  it('should decrease quality by one', () => {
    let aRandomProductName = "A random product name";
    let initialQuality: number = 6;

    const genericProduct: Product = new GenericProduct(aRandomProductName, 10, initialQuality);

    genericProduct.updateQuality()

    expect(genericProduct.quality).toBe(initialQuality - 1);
  });

  it('should decrease quality not below the minimum quality', () => {
    let aRandomProductName = "A random product name";
    let minimumQualiy: number = 0;
    const genericProduct: Product = new GenericProduct(aRandomProductName, 20, minimumQualiy);
    genericProduct.updateQuality()

    expect(genericProduct.quality).toBe(minimumQualiy);
  });
});
