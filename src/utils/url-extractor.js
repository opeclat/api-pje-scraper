/**
 * Extrai a URL base de uma URL completa
 * Exemplo: https://pje.tjmg.jus.br/pje/login.seam?state=... 
 * Retorna: https://pje.tjmg.jus.br/pje/
 */
export function extractBaseUrl(url) {
  const urlObj = new URL(url);
  const pathParts = urlObj.pathname.split('/').filter(Boolean);
  
  // Remove o último segmento (login.seam)
  pathParts.pop();
  
  return `${urlObj.origin}/${pathParts.join('/')}/`;
}

/**
 * Extrai o domínio principal
 */
export function extractDomain(url) {
  const urlObj = new URL(url);
  return urlObj.origin;
}
