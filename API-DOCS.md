# 🚀 API PJE Scraper - Documentação

## 📋 Endpoints

### 1. Health Check
```
GET /
GET /api/health
```

### 2. Iniciar Scraping (Primeira Requisição)
```
POST /api/scrape/start
```

**Request:**
```json
{
  "searches": [
    {"numeroOAB": "175722", "letraOAB": "", "ufOAB": "MG"},
    {"numeroOAB": "123456", "letraOAB": "A", "ufOAB": "SP"},
    {"numeroOAB": "789012", "letraOAB": "", "ufOAB": "RJ"}
  ],
  "otpCode": "123456"
}
```

**Resposta:**
```json
{
  "success": true,
  "sessionId": "session_1234567890_abc123",
  "timestamp": "2024-11-18T00:00:00.000Z",
  "duration": "45.23s",
  "currentSearch": 1,
  "totalSearches": 3,
  "hasMore": true,
  "result": {
    "numeroOAB": "175722",
    "ufOAB": "MG",
    "count": 312,
    "data": [...]
  }
}
```

### 3. Buscar Próximo Resultado
```
POST /api/scrape/next
```

**Request:**
```json
{
  "sessionId": "session_1234567890_abc123"
}
```

**Resposta (ainda há mais):**
```json
{
  "success": true,
  "sessionId": "session_1234567890_abc123",
  "timestamp": "2024-11-18T00:00:00.000Z",
  "duration": "38.12s",
  "currentSearch": 2,
  "totalSearches": 3,
  "hasMore": true,
  "result": {
    "numeroOAB": "123456",
    "ufOAB": "SP",
    "count": 150,
    "data": [...]
  }
}
```

**Resposta (última pesquisa):**
```json
{
  "success": true,
  "sessionId": "session_1234567890_abc123",
  "completed": true,
  "message": "Todas as pesquisas foram concluídas",
  "totalSearches": 3,
  "allResults": [...]
}
```

### 4. Status da Sessão
```
GET /api/scrape/status/:sessionId
```

**Resposta:**
```json
{
  "success": true,
  "sessionId": "session_1234567890_abc123",
  "currentSearch": 2,
  "totalSearches": 3,
  "completed": false,
  "resultsCount": 2,
  "createdAt": "2024-11-18T00:00:00.000Z"
}
```

## 🔄 Fluxo de Uso

### Exemplo com 3 pesquisas:

```javascript
// 1. Inicia scraping (envia todas as pesquisas + OTP)
const start = await fetch('http://localhost:3001/api/scrape/start', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    searches: [
      { numeroOAB: "175722", letraOAB: "", ufOAB: "MG" },
      { numeroOAB: "123456", letraOAB: "A", ufOAB: "SP" },
      { numeroOAB: "789012", letraOAB: "", ufOAB: "RJ" }
    ],
    otpCode: "123456"
  })
});

const data1 = await start.json();
console.log('Resultado 1:', data1.result);
console.log('Tem mais?', data1.hasMore); // true

// 2. Busca segundo resultado
const next1 = await fetch('http://localhost:3001/api/scrape/next', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ sessionId: data1.sessionId })
});

const data2 = await next1.json();
console.log('Resultado 2:', data2.result);
console.log('Tem mais?', data2.hasMore); // true

// 3. Busca terceiro resultado (último)
const next2 = await fetch('http://localhost:3001/api/scrape/next', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ sessionId: data1.sessionId })
});

const data3 = await next2.json();
console.log('Resultado 3:', data3.result);
console.log('Tem mais?', data3.hasMore); // false

// 4. Tenta buscar mais (retorna completed: true)
const next3 = await fetch('http://localhost:3001/api/scrape/next', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ sessionId: data1.sessionId })
});

const final = await next3.json();
console.log('Completo:', final.completed); // true
console.log('Todos os resultados:', final.allResults);
```

## 💡 Vantagens

- ✅ **Não bloqueia**: Retorna resultado imediatamente
- ✅ **Controle total**: Cliente decide quando buscar próximo
- ✅ **Sessão mantida**: Navegador fica aberto entre requisições
- ✅ **Sem timeout**: Cada requisição é independente
- ✅ **Escalável**: Múltiplas sessões simultâneas

## 🔒 Segurança

- Sessões em memória (limpas ao reiniciar)
- SessionId único e aleatório
- Navegador fechado automaticamente ao finalizar
- Timeout de sessão (implementar se necessário)

## 🚀 Deploy no Render

Mesmas configurações anteriores. A API gerencia sessões automaticamente.
