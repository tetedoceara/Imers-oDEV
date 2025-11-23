# Base de Conhecimento - Imersão DEV

## 📋 Descrição

Um projeto educacional que funciona como uma **base de conhecimento interativa** sobre linguagens de programação. A aplicação permite aos usuários buscar e explorar informações sobre diferentes linguagens de programação de forma rápida e intuitiva.

---

## ✨ Funcionalidades

- **🔍 Sistema de Busca**: Digite o nome de uma linguagem de programação ou parte de sua descrição para encontrar informações relevantes
- **💾 Base de Dados JSON**: 17 linguagens de programação com descrição detalhada e links de referência
- **📱 Design Responsivo**: Interface adaptada para diferentes tamanhos de tela
- **🎨 Tema Escuro Moderno**: Design visual atraente com tema dark-mode
- **⚡ Busca em Tempo Real**: Exibe resultados conforme você digita

---

## 🏗️ Estrutura do Projeto

```
ImersãoDEV/
├── index.html       # Estrutura HTML da página
├── style.css        # Estilos e tema visual
├── script.js        # Lógica de funcionamento (busca e renderização)
├── data.json        # Base de dados com informações das linguagens
└── README.md        # Este arquivo
```

### Linguagens na Base de Dados

1. **JavaScript** - Linguagem web interativa
2. **Python** - Propósito geral com sintaxe clara
3. **Java** - Orientada a objetos para sistemas empresariais
4. **C++** - Compilada com alto desempenho
5. **TypeScript** - JavaScript com tipagem estática
6. **C#** - Moderna da Microsoft para Windows e Unity
7. **PHP** - Server-side para aplicações web dinâmicas
8. **Go** - Compilada do Google para sistemas modernos
9. **Rust** - Segurança de memória sem garbage collector
10. **Ruby** - Dinâmica elegante para web (Ruby on Rails)
11. **Swift** - Moderna da Apple para iOS/macOS
12. **Kotlin** - Moderna para Android na JVM
13. **R** - Especializada em análise estatística e dados
14. **Dart** - Do Google para Flutter (multiplataforma)
15. **Scala** - Orientada a objetos e funcional na JVM
16. **Perl** - Poderosa para scripts e processamento de texto
17. **Elixir** - Funcional moderna na Máquina Virtual Erlang

---

## 🛠️ Como Funciona

### Frontend (HTML)
- **Header**: Contém o título e campo de busca com botão
- **Main**: Seção central onde os cards das linguagens são renderizados
- **Footer**: Links para GitHub e LinkedIn

### Estilos (CSS)
O projeto utiliza:
- **Variáveis CSS** para tema consistente:
  - `--bg`: Cor de fundo principal (#0f1724)
  - `--accent`: Roxo principal para destaques (#7c3aed)
  - `--accent-2`: Ciano secundário (#06b6d4)
  - `--white`: Branco suave (#f8fafc)

- **Layout Flexbox** para responsividade
- **Gradientes** para profundidade visual
- **Transições** suaves para interatividade

### JavaScript (Lógica)

#### Função Principal: `iniciarBusca()`
```
1. Busca dados do arquivo data.json
2. Obtém o valor do input de busca
3. Filtra os dados por nome ou descrição
4. Renderiza os resultados em cards
5. Exibe informações sobre a busca
```

#### Função: `renderizarCards(dados)`
- Limpa o container anterior
- Cria cards dinâmicos com HTML para cada linguagem
- Cada card contém: nome, descrição e link para saber mais

#### Função: `mostrarInfoBusca(query, count)`
- Exibe mensagem sobre quantidade de resultados
- Se houver busca ativa: "Resultados para 'X' — Y encontrado(s)"
- Se não houver busca: "Exibindo todas — Y item(ns)"

#### Tratamento de Erros
- Try/catch para capturar problemas no carregamento de dados
- Mensagem amigável ao usuário se houver erro

---

## 🚀 Como Usar

1. **Abrir a aplicação**
   - Abra o arquivo `index.html` em um navegador web

2. **Ver todas as linguagens**
   - A página carrega automaticamente todas as 17 linguagens ao abrir

3. **Buscar uma linguagem**
   - Digite o nome de uma linguagem no campo de entrada
   - Clique no botão "Buscar" ou pressione Enter
   - Os resultados aparecem dinamicamente

4. **Explorar detalhes**
   - Clique no link "Saiba mais" para ir ao site oficial da linguagem

### Exemplos de Buscas
- `"Python"` → Encontra Python
- `"web"` → Encontra JavaScript, PHP (contêm "web" na descrição)
- `"JVM"` → Encontra Java, Kotlin, Scala (rodam na JVM)
- `"orientada a objetos"` → Encontra várias linguagens OOP

---

## 🎨 Tema e Design

- **Paleta de Cores**: Tema dark-mode moderno e elegante
- **Tipografia**: Usa fontes do sistema para melhor performance
- **Espaçamento**: Padding e gaps consistentes para visual limpo
- **Responsividade**: Input e elementos se adaptam a telas menores
- **Animações**: Transições suaves no hover e focus dos elementos

---

## 🔧 Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Estilos avançados (flexbox, gradientes, variáveis)
- **JavaScript (ES6+)**: 
  - Fetch API para carregar dados JSON
  - Array methods (filter)
  - DOM manipulation

---

## 📊 Estrutura do data.json

Cada linguagem no arquivo `data.json` contém:

```json
{
    "nome": "Nome da Linguagem",
    "descricao": "Descrição detalhada da linguagem",
    "link": "URL do site oficial ou documentação"
}
```

---

## 👥 Autor

- **GitHub**: [tetedoceara](https://github.com/tetedoceara)
- **LinkedIn**: [Maria Ester Alves Bezerra](https://www.linkedin.com/in/maria-ester-alves-bezerra-139674367/)

---

## 📝 Notas

- O projeto foi desenvolvido como parte da **Imersão DEV**
- A busca é **case-insensitive** (não diferencia maiúsculas/minúsculas)
- A filtragem funciona em tempo real durante a digitação
- O projeto é estático e não requer backend ou banco de dados externo

---

## 🌟 Possíveis Melhorias Futuras

- [ ] Adicionar paginação para melhor navegação
- [ ] Implementar filtros por categorias (web, mobile, dados, etc)
- [ ] Adicionar ratings ou favoritos
- [ ] Criar página de detalhes expandida para cada linguagem
- [ ] Implementar armazenamento local para linguagens favoritas
- [ ] Adicionar modo claro (light theme)
- [ ] Integrar com API de documentação
- [ ] Criar versão mobile app com React Native ou Flutter

---

**Versão**: 1.0  
**Data**: Novembro de 2025  
**Status**: Completo e funcional ✅
