# 🚀 API PJE Scraper

API para extração de dados do PJE (Processo Judicial Eletrônico) com suporte a autenticação 2FA e busca em massa.

## 📋 Características

- ✅ Autenticação com 2FA
- ✅ Busca em massa (múltiplas OABs)
- ✅ Sistema de sessões
- ✅ Modo headless (pronto para produção)
- ✅ Paginação automática
- ✅ Extração completa de processos

## 🚀 Deploy no Render

### 1. Criar Web Service
- Conecte este repositório
- Build Command: `npm install`
- Start Command: `npm start`
- Environment: Node

### 2. Configurações
- **Auto-Deploy**: Sim
- **Health Check Path**: `/api/health`
- **Instance Type**: Starter ou superior

## 📖 Documentação

Veja [API-DOCS.md](./API-DOCS.md) para documentação completa da API.

## 🔧 Desenvolvimento Local

```bash
npm install
npm run api
```

## 📝 Endpoints

- `GET /api/health` - Health check
- `POST /api/scrape/start` - Inicia scraping
- `POST /api/scrape/next` - Próximo resultado
- `GET /api/scrape/status/:sessionId` - Status da sessão

## 🔒 Segurança

- Credenciais no servidor
- Sessões em memória
- CORS habilitado
- Código 2FA obrigatório
