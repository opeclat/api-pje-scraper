import fs from 'fs/promises';

export async function saveCookies(page, cookiesPath) {
  const cookies = await page.cookies();
  await fs.writeFile(cookiesPath, JSON.stringify(cookies, null, 2));
  console.log(`✓ Cookies salvos em ${cookiesPath}`);
}

export async function loadCookies(page, cookiesPath) {
  try {
    const cookiesString = await fs.readFile(cookiesPath, 'utf-8');
    const cookies = JSON.parse(cookiesString);
    await page.setCookie(...cookies);
    console.log(`✓ Cookies carregados de ${cookiesPath}`);
    return true;
  } catch (error) {
    console.log('⚠️  Nenhum cookie salvo encontrado');
    return false;
  }
}
