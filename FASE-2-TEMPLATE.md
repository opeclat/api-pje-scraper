# 🧭 Fase 2 - Template de Navegação

## 📋 Como Configurar as Ações

Edite o arquivo `src/config.js` na seção `navigation.actions` com a sequência de ações que deseja executar.

## 🎯 Tipos de Ações Disponíveis

### 1. Click (Clicar em elemento)
```javascript
{
  type: 'click',
  selector: '#botao-id',
  description: 'Clica no botão X',
  waitForNavigation: true,  // Opcional: aguarda navegação após o clique
  waitTime: 1000            // Opcional: aguarda X ms após o clique
}
```

### 2. Type (Digitar texto)
```javascript
{
  type: 'type',
  selector: '#campo-input',
  text: 'texto para digitar',
  description: 'Preenche o campo de busca',
  waitTime: 500  // Opcional: aguarda após digitar
}
```

### 3. Select (Selecionar opção em dropdown)
```javascript
{
  type: 'select',
  selector: '#dropdown',
  value: 'valor-da-opcao',
  description: 'Seleciona opção no dropdown',
  waitTime: 500  // Opcional
}
```

### 4. Goto (Navegar para URL)
```javascript
{
  type: 'goto',
  url: 'https://exemplo.com/pagina',
  description: 'Navega para página específica'
}
```

### 5. Wait (Aguardar)
```javascript
// Aguardar elemento aparecer
{
  type: 'wait',
  selector: '#elemento',
  description: 'Aguarda elemento carregar'
}

// Aguardar tempo fixo
{
  type: 'wait',
  time: 2000,
  description: 'Aguarda 2 segundos'
}
```

### 6. Evaluate (Executar JavaScript)
```javascript
{
  type: 'evaluate',
  script: 'document.querySelector("#elemento").scrollIntoView()',
  description: 'Executa script customizado'
}
```

## 📝 Exemplo Completo

```javascript
navigation: {
  actions: [
    {
      type: 'click',
      selector: '#menu-processos',
      description: 'Abre menu de processos',
      waitForNavigation: true
    },
    {
      type: 'wait',
      time: 1000,
      description: 'Aguarda menu carregar'
    },
    {
      type: 'click',
      selector: '#submenu-consulta',
      description: 'Clica em consulta',
      waitForNavigation: true
    },
    {
      type: 'type',
      selector: '#campo-busca',
      text: '123456',
      description: 'Digita número do processo'
    },
    {
      type: 'click',
      selector: '#btn-buscar',
      description: 'Clica no botão buscar',
      waitTime: 2000
    },
    {
      type: 'wait',
      selector: '.resultado-busca',
      description: 'Aguarda resultados aparecerem'
    }
  ]
}
```

## 🧪 Como Testar

Após configurar as ações, teste com:

```bash
npm run test:navigation
```

## 💡 Dicas

1. **Seletores**: Use IDs (#) quando possível, são mais rápidos e únicos
2. **Descrições**: Seja claro, ajuda no debug
3. **Timeouts**: Ajuste conforme a velocidade da página
4. **waitForNavigation**: Use quando o clique causa mudança de página
5. **waitTime**: Use para aguardar animações ou carregamentos parciais

## 🔍 Como Encontrar Seletores

1. Abra o navegador após o login (use `npm run test:login`)
2. Pressione F12 para abrir DevTools
3. Clique no ícone de seleção (ou Ctrl+Shift+C)
4. Clique no elemento desejado
5. No painel Elements, veja o HTML do elemento
6. Procure por `id`, `class`, `name` ou outros atributos únicos

### Exemplos de Seletores:
- Por ID: `#meu-id`
- Por classe: `.minha-classe`
- Por atributo: `[data-id="123"]`
- Por tag e classe: `button.btn-primary`
- Por hierarquia: `div.container > button`

## ✅ Pronto para Configurar

Agora me diga:
1. Qual página você precisa acessar?
2. Quais elementos precisa clicar?
3. Quais campos precisa preencher?
4. Qual é a sequência de ações?

Vou configurar tudo para você!
