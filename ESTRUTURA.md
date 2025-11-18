# 📁 Estrutura do Projeto - Web Scraper PJE

## ✅ Fase 1: CONCLUÍDA - Sistema de Login com 2FA

```
.
├── src/
│   ├── config.js                 # ⚙️  Configurações centralizadas
│   ├── browser.js                # 🌐 Puppeteer em modo stealth
│   ├── 1-login.js                # 🔐 Autenticação com 2FA
│   ├── 2-navigation.js           # 🧭 Navegação (próxima fase)
│   ├── 3-extraction.js           # 📊 Extração de dados (próxima fase)
│   ├── index.js                  # 🎯 Orquestrador completo
│   └── utils/
│       ├── input.js              # ⌨️  Input do terminal
│       ├── cookies.js            # 🍪 Gerenciamento de cookies
│       └── url-extractor.js      # 🔗 Utilitários de URL
├── cookies.json                  # 💾 Cookies salvos (gerado)
├── package.json                  # 📦 Dependências
└── README.md                     # 📖 Documentação

```

## 🎯 Comandos Disponíveis

```bash
# Testar login com 2FA
npm run test:login

# Testar navegação (próxima fase)
npm run test:navigation

# Testar extração (próxima fase)
npm run test:extraction

# Executar fluxo completo
npm start
```

## ✅ Fase 1 - Login (CONCLUÍDA)

### Funcionalidades Implementadas:
- ✅ Navegador em modo stealth (não detectável)
- ✅ JavaScript sempre habilitado
- ✅ Preenchimento automático de credenciais
- ✅ Autenticação 2FA via terminal
- ✅ Aguarda navegação após OTP
- ✅ Aguarda 2 segundos para estabilização
- ✅ Atualiza página (mitigação de erros)
- ✅ Salva cookies automaticamente
- ✅ Navega para URL base do sistema
- ✅ Pronto para transformação em API

### Fluxo de Execução:
1. Abre navegador (modo stealth)
2. Navega para página de login
3. Preenche username e password
4. Clica no botão de login
5. Aguarda tela de 2FA
6. Solicita código OTP no terminal
7. Preenche e confirma OTP
8. **Aguarda URL mudar (navegação)**
9. **Aguarda 2 segundos**
10. **Atualiza página**
11. Salva cookies
12. Navega para URL base

## 🔜 Próximas Fases

### Fase 2 - Navegação
- [ ] Definir página/seção alvo
- [ ] Implementar cliques em menus/links
- [ ] Aguardar carregamento de elementos

### Fase 3 - Extração de Dados
- [ ] Definir seletores dos dados
- [ ] Implementar extração
- [ ] Salvar em JSON

### Fase 4 - API REST
- [ ] Criar endpoints
- [ ] Sistema de notificação para 2FA
- [ ] Gerenciamento de sessões
