import { initBrowser, closeBrowser } from './browser.js';
import { performLoginWithOTP } from './1-login.js';
import { navigateToTarget } from './2-navigation.js';
import { extractData } from './3-extraction.js';
import fs from 'fs/promises';

async function main() {
  console.log('🚀 Iniciando scraper completo...\n');
  
  const { browser, page } = await initBrowser();
  
  try {
    // Etapa 1: Login
    const { page: loggedPage } = await performLoginWithOTP(page);
    
    // Etapa 2: Navegação
    await navigateToTarget(loggedPage);
    
    // Etapa 3: Extração
    const data = await extractData(loggedPage);
    
    // Salva os dados
    await fs.writeFile('output.json', JSON.stringify(data, null, 2));
    console.log('\n💾 Dados salvos em output.json');
    
    console.log('\n✅ Scraping concluído com sucesso!');
    
    await closeBrowser(browser);
  } catch (error) {
    console.error('\n❌ Erro durante o scraping:', error.message);
    await closeBrowser(browser);
    process.exit(1);
  }
}

main();
