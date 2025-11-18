# 📊 Fase 3 - Template de Extração com Loop

## 🎯 Objetivo

Realizar pesquisas com parâmetros dinâmicos e extrair os resultados correspondentes.

## 🔄 Fluxo de Execução

```
Para cada PARÂMETRO:
  1. Inserir parâmetro no campo de busca
  2. Clicar no botão de pesquisar
  3. Aguardar resultados carregarem
  4. Extrair dados dos resultados
  5. Salvar resultados com referência ao parâmetro
  6. Limpar/resetar para próxima pesquisa
```

## 📝 Configuração

### 1. Ações de Pesquisa (search.actions)

Define como realizar a pesquisa:

```javascript
search: {
  actions: [
    {
      type: 'type',
      selector: '#campo-busca',
      parameterKey: 'searchTerm',  // Será substituído pelo parâmetro
      description: 'Digita o parâmetro de busca'
    },
    {
      type: 'click',
      selector: '#btn-pesquisar',
      description: 'Clica no botão pesquisar',
      waitTime: 2000
    },
    {
      type: 'wait',
      selector: '.resultado-item',
      description: 'Aguarda resultados aparecerem'
    }
  ]
}
```

### 2. Seletores de Extração (extraction.selectors)

Define quais dados extrair:

```javascript
extraction: {
  resultContainer: '.lista-resultados',  // Container dos resultados
  resultItem: '.resultado-item',         // Cada item de resultado
  
  fields: [
    {
      name: 'numero',
      selector: '.numero-processo',
      attribute: 'textContent'  // ou 'href', 'value', etc
    },
    {
      name: 'data',
      selector: '.data-processo',
      attribute: 'textContent'
    },
    {
      name: 'status',
      selector: '.status',
      attribute: 'textContent'
    },
    {
      name: 'link',
      selector: 'a.ver-detalhes',
      attribute: 'href'
    }
  ],
  
  // Paginação (opcional)
  pagination: {
    enabled: false,
    nextButtonSelector: '.btn-proxima-pagina',
    maxPages: 10
  }
}
```

### 3. Ações de Reset (opcional)

Para limpar a busca antes da próxima:

```javascript
reset: {
  actions: [
    {
      type: 'click',
      selector: '#btn-limpar',
      description: 'Limpa o formulário'
    }
  ]
}
```

## 🧪 Exemplo Completo

```javascript
extraction: {
  // Parâmetros de teste (depois virão da API)
  testParameters: [
    '0024.20.123456-7',
    '0024.21.654321-3',
    '0024.22.111111-1'
  ],
  
  // Ações de pesquisa
  search: {
    actions: [
      {
        type: 'type',
        selector: '#numeroProcesso',
        parameterKey: 'searchTerm',
        description: 'Digita número do processo'
      },
      {
        type: 'click',
        selector: '#btnPesquisar',
        description: 'Clica em pesquisar',
        waitTime: 3000
      },
      {
        type: 'wait',
        selector: '.processo-resultado',
        description: 'Aguarda resultados'
      }
    ]
  },
  
  // Seletores de extração
  extraction: {
    resultContainer: '#listaProcessos',
    resultItem: '.processo-item',
    
    fields: [
      { name: 'numero', selector: '.numero', attribute: 'textContent' },
      { name: 'parte', selector: '.parte-nome', attribute: 'textContent' },
      { name: 'status', selector: '.status', attribute: 'textContent' },
      { name: 'data', selector: '.data-distribuicao', attribute: 'textContent' }
    ]
  },
  
  // Reset (opcional)
  reset: {
    actions: [
      {
        type: 'click',
        selector: '#btnLimpar',
        description: 'Limpa busca'
      }
    ]
  }
}
```

## 🚀 Como Usar

### Modo Teste (com parâmetros fixos):
```bash
npm run test:extraction
```

### Modo API (futuro):
```javascript
POST /api/scrape
{
  "parameters": ["param1", "param2", "param3"]
}

Response:
{
  "results": [
    {
      "parameter": "param1",
      "data": [...],
      "count": 5
    },
    {
      "parameter": "param2",
      "data": [...],
      "count": 3
    }
  ]
}
```

## 📊 Estrutura de Saída

```json
{
  "timestamp": "2024-01-01T10:00:00Z",
  "totalParameters": 3,
  "results": [
    {
      "parameter": "0024.20.123456-7",
      "success": true,
      "count": 2,
      "data": [
        {
          "numero": "0024.20.123456-7",
          "parte": "João Silva",
          "status": "Em andamento",
          "data": "01/01/2024"
        }
      ]
    },
    {
      "parameter": "0024.21.654321-3",
      "success": true,
      "count": 1,
      "data": [...]
    }
  ]
}
```

## 🔍 Próximos Passos

1. Me diga quais são os seletores da página de resultados
2. Quais dados você quer extrair de cada resultado
3. Como é o campo de busca (seletor)
4. Como é o botão de pesquisar (seletor)
5. Se há paginação nos resultados

Vou configurar tudo para você!
