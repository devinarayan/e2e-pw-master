import { test, expect } from '@playwright/test'

test.describe('Verify content on the templates page', () => {

test('Open templates page as not authorized user', async({page})=>{

  await page.goto('https://www.kittl.com/templates')
  await page.waitForURL('https://www.kittl.com/templates')
  await expect(page).toHaveTitle('Find your perfect design')

  const usecasesCategoryAll = '[data-testid^="usecases-category--all"]'
  const usecasesCategoryLocator = page.locator(usecasesCategoryAll);
  await expect(usecasesCategoryLocator).toBeVisible();
  const templatesCategoryAll = '[data-testid^="usecases-useCase--all"]'
  const templatesCategoryLocator = page.locator(templatesCategoryAll);
  await expect(templatesCategoryLocator).toBeVisible();
  const searchInput = '[data-testid="design-posts--search"] [data-testid="text-input--input"]'
  const searchInputLocator = page.locator(searchInput);
  await expect(searchInputLocator).toBeVisible();

  const logoSelector = 'a[href="/"]'
  await page.click(logoSelector)
  await page.waitForURL('https://www.kittl.com/')
  await expect(page).toHaveURL('https://www.kittl.com/')
  await expect(page).toHaveTitle('Kittl - Unleash Your Creative Power')
  
    })

})
