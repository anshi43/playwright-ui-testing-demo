import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { InventoryPage } from '../../pages/InventoryPage';
import { CartPage } from '../../pages/CartPage';
import { testUsers } from '../../utils/testData';

test.describe('Add to cart functionality', () => {
  test('user can add a product to cart and see it in cart page', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);

    const productName = 'Sauce Labs Backpack';

    await loginPage.goto();
    await loginPage.login(
      testUsers.validUser.username,
      testUsers.validUser.password
    );

    await inventoryPage.assertInventoryPageLoaded();
    await inventoryPage.addProductToCart(productName);

    await expect(inventoryPage.shoppingCartBadge).toHaveText('1');

    await inventoryPage.openCart();
    await cartPage.assertCartPageLoaded();

    const cartItems = await cartPage.getCartItemNames();
    expect(cartItems).toContain(productName);
  });
});