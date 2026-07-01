import { test, expect } from '@playwright/test';
import { InventoryPage } from '../../pages/InventoryPage';

test.describe('Product sorting', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/inventory.html');
  });

  test('user can sort products by price low to high', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);

    await inventoryPage.assertInventoryPageLoaded();
    await inventoryPage.sortProducts('lohi');

    const prices = await inventoryPage.getAllProductPrices();
    const sortedPrices = [...prices].sort((a, b) => a - b);

    expect(prices).toEqual(sortedPrices);
  });

  test('user can sort products by name z to a', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);

    await inventoryPage.assertInventoryPageLoaded();
    await inventoryPage.sortProducts('za');

    const productNames = await inventoryPage.getAllProductNames();
    const sortedNames = [...productNames].sort((a, b) => b.localeCompare(a));

    expect(productNames).toEqual(sortedNames);
  });
});