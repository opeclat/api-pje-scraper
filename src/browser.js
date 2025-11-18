import puppeteer from 'puppeteer';
import { config } from './config.js';

export async function initBrowser() {
  const browser = await puppeteer.launch(config.puppeteerOptions);
  const page = await browser.newPage();
  
  // Configurações úteis
  await page.setDefaultNavigationTimeout(60000);
  
  // Remove sinais de automação - faz o navegador parecer humano
  await page.evaluateOnNewDocument(() => {
    // Remove webdriver
    Object.defineProperty(navigator, 'webdriver', {
      get: () => false,
    });
    
    // Adiciona plugins
    Object.defineProperty(navigator, 'plugins', {
      get: () => [1, 2, 3, 4, 5],
    });
    
    // Adiciona languages
    Object.defineProperty(navigator, 'languages', {
      get: () => ['pt-BR', 'pt', 'en-US', 'en'],
    });
    
    // Chrome runtime
    window.chrome = {
      runtime: {},
    };
    
    // Permissions
    const originalQuery = window.navigator.permissions.query;
    window.navigator.permissions.query = (parameters) => (
      parameters.name === 'notifications' ?
        Promise.resolve({ state: Notification.permission }) :
        originalQuery(parameters)
    );
  });
  
  // User agent realista
  await page.setUserAgent(
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
  );
  
  // Headers extras
  await page.setExtraHTTPHeaders({
    'Accept-Language': 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    'Accept-Encoding': 'gzip, deflate, br',
    'Connection': 'keep-alive',
    'Upgrade-Insecure-Requests': '1'
  });
  
  // Habilita JavaScript (já é padrão, mas garantindo)
  await page.setJavaScriptEnabled(true);
  
  return { browser, page };
}

export async function closeBrowser(browser) {
  await browser.close();
}
