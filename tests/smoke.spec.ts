import { expect, test } from '@playwright/test'

const pages = [
  { path: '/', heading: 'Lucca Strecker' },
  { path: '/work', heading: 'My Work' },
  { path: '/about', heading: 'Hey there!' },
  { path: '/contact', heading: "Let's Talk" },
  { path: '/sana', heading: 'sana – Future-Proofing Pharmacies Through Design' },
  {
    path: '/mara',
    heading: 'māra – Designing Connection Across Barriers in Urban Garden Communities',
  },
  { path: '/leverage-robotics', heading: 'RoboHive – Making Industrial Robotics Intuitive' },
  { path: '/dg', heading: 'DG Nexolution – Redesigning the Cooperative Publishing Module' },
  { path: '/aroya', heading: 'Aroya – Smart Irrigation for Precision Cultivation' },
  {
    path: '/parcitypate',
    heading: 'Parcitypate – Designing Participation in Urban Climate Adaptation',
  },
  {
    path: '/vs-interface',
    heading: 'Visual Programming for Robotics – Designing Simplicity into Complexity',
  },
]

for (const { path, heading } of pages) {
  test(`${path} renders`, async ({ page }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))
    const response = await page.goto(path)
    expect(response?.status()).toBe(200)
    await expect(page.getByRole('heading', { level: 1 })).toHaveText(heading)
    expect(errors).toEqual([])
  })
}

test('unknown pages return a 404', async ({ page }) => {
  const response = await page.goto('/does-not-exist')
  expect(response?.status()).toBe(404)
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Page Not Found')
})

test('case studies link to the next project, except the last', async ({ page }) => {
  await page.goto('/parcitypate')
  await expect(page.getByRole('link', { name: 'Next Project' })).toHaveAttribute(
    'href',
    '/vs-interface',
  )
  await page.goto('/vs-interface')
  await expect(page.getByRole('link', { name: 'Next Project' })).toHaveCount(0)
})

test('work filters narrow the grid', async ({ page }) => {
  await page.goto('/work')
  const cards = page.locator('main ul > li')
  await expect(cards).toHaveCount(7)
  await page.getByRole('button', { name: 'Strategy' }).click()
  await expect(cards).toHaveCount(3)
  await page.getByRole('button', { name: 'Case Studies' }).click()
  await expect(cards).toHaveCount(1)
  await page.getByRole('button', { name: 'Show All' }).click()
  await expect(cards).toHaveCount(7)
})

test('about accordion opens and closes', async ({ page }) => {
  await page.goto('/about')
  const toggle = page.getByRole('button', { name: 'Experience' })
  await expect(toggle).toHaveAttribute('aria-expanded', 'false')
  await toggle.click()
  await expect(toggle).toHaveAttribute('aria-expanded', 'true')
  await expect(page.getByText('4.5+ years in UX & Product Design')).toBeVisible()
  await toggle.click()
  await expect(toggle).toHaveAttribute('aria-expanded', 'false')
})

test('about carousel moves by one slide', async ({ page }) => {
  await page.goto('/about')
  const firstSlide = page
    .locator('[aria-roledescription="carousel"] li:not([aria-hidden="true"])')
    .first()
  const before = (await firstSlide.boundingBox())!.x
  await page.getByRole('button', { name: 'Next image' }).click()
  await expect
    .poll(async () => Math.round(before - (await firstSlide.boundingBox())!.x))
    .toBeGreaterThan(200)
})

test('theme toggle switches and remembers the theme', async ({ page }) => {
  await page.goto('/contact')
  const html = page.locator('html')
  const initial = await html.getAttribute('data-theme')
  await page.getByRole('button', { name: 'Toggle dark mode' }).filter({ visible: true }).click()
  const toggled = initial === 'dark' ? 'light' : 'dark'
  await expect(html).toHaveAttribute('data-theme', toggled)
  await page.reload()
  await expect(html).toHaveAttribute('data-theme', toggled)
})

test.describe('contact form', () => {
  async function fill(page: import('@playwright/test').Page) {
    await page.goto('/contact')
    await page.getByPlaceholder('Your Name').fill('Ada')
    await page.getByPlaceholder('Your Mail @').fill('ada@example.com')
    await page.getByPlaceholder('Your message').fill('Hello!')
  }

  test('shows "Thank you" after sending', async ({ page }) => {
    await page.route('https://api.web3forms.com/submit', (route) =>
      route.fulfill({ json: { success: true } }),
    )
    await fill(page)
    await page.getByRole('button', { name: 'Submit' }).click()
    await expect(page.getByText('Thank you')).toBeVisible()
  })

  test('shows an error when sending fails', async ({ page }) => {
    await page.route('https://api.web3forms.com/submit', (route) =>
      route.fulfill({ status: 400, json: { success: false } }),
    )
    await fill(page)
    await page.getByRole('button', { name: 'Submit' }).click()
    await expect(page.getByText('Something went wrong')).toBeVisible()
  })
})

test('mobile menu opens and navigates', async ({ page, isMobile }) => {
  test.skip(!isMobile, 'phone layout only')
  await page.goto('/contact')
  await page.getByRole('button', { name: 'Open menu' }).click()
  const menu = page.locator('#mobile-menu')
  await menu.getByRole('link', { name: 'Work' }).click()
  await expect(page).toHaveURL(/\/work$/)
  await expect(menu).toHaveCount(0)
})
