import { test } from '@playwright/test';
import { InventoryPage } from '../../pages/InventoryPage';
import { CartPage } from '../../pages/CartPage';
import { CheckoutPage } from '../../pages/CheckoutPage';
import { testUsers } from '../../utils/testData';

test.describe('Checkout flow', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/inventory.html');
  });

  test('user can complete checkout successfully', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    await inventoryPage.assertInventoryPageLoaded();
    await inventoryPage.addProductToCart('Sauce Labs Backpack');
    await inventoryPage.openCart();

    await cartPage.assertCartPageLoaded();
    await cartPage.clickCheckout();

    await checkoutPage.fillCheckoutInformation(
      testUsers.checkoutUser.firstName,
      testUsers.checkoutUser.lastName,
      testUsers.checkoutUser.postalCode
    );

    await checkoutPage.continueCheckout();
    await checkoutPage.assertCheckoutOverviewLoaded();
    await checkoutPage.finishCheckout();
    await checkoutPage.assertCheckoutComplete();
  });
});