import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { InventoryPage } from '../../pages/InventoryPage';
import { testUsers } from '../../utils/testData';

test.describe('Login functionality', () => {
  test('valid user can log in successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await loginPage.goto();
    await loginPage.assertLoginPageLoaded();

    await loginPage.login(
      testUsers.validUser.username,
      testUsers.validUser.password
    );

    await inventoryPage.assertInventoryPageLoaded();
    await expect(page).toHaveURL(/inventory/);
  });

  test('locked user sees an error message', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.assertLoginPageLoaded();

    await loginPage.login(
      testUsers.lockedUser.username,
      testUsers.lockedUser.password
    );

    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toContainText('Sorry, this user has been locked out');
  });
});