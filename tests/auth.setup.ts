import { test as setup, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { testUsers } from '../utils/testData';

const authFile = 'playwright/.auth/user.json';

setup('authenticate', async ({ page }) => {
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

  await page.context().storageState({ path: authFile });
});