# Base K-pop - Imersão DEV

## 📋 Descrição

Projeto educativo que funciona como uma **base de conhecimento interativa** sobre idols, grupos e empresas do universo K-pop. A aplicação permite buscar e explorar informações rápidas sobre artistas e agências.

---

## ✨ Funcionalidades

- **🔍 Busca por artistas/empresas**: Procure por nome ou parte da descrição
- **💾 Base de Dados JSON**: Lista de idols, grupos e empresas com descrição e link
- **📱 Design Responsivo**: Interface adaptada para diferentes tamanhos de tela
- **🎨 Tema K-pop**: Paleta mais vibrante (rosa e ciano) com tema escuro
- **⚡ Carregamento automático**: A lista é carregada ao abrir a página

---

## 🏗️ Estrutura do Projeto

```
ImersãoDEV/
├── index.html       # Estrutura HTML da página
├── style.css        # Estilos e tema visual
├── script.js        # Lógica de busca e renderização
├── data.json        # Base de dados com idols, grupos e empresas
└── README.md        # Este arquivo
```


### Conteúdo atual da Base de Dados

- **Grupos:** BTS, BLACKPINK, TWICE, SEVENTEEN, EXO, Red Velvet, NCT (e unidades como NCT 127/NCT Dream/WayV), Stray Kids, ATEEZ, Girls' Generation, BIGBANG, SHINee, GOT7, MAMAMOO, (G)I-DLE, ITZY, TXT, ENHYPEN, LOONA
- **Solos:** IU, Taeyeon
- **Empresas / Labels:** HYBE (BigHit), SM Entertainment, JYP Entertainment, YG Entertainment, Pledis Entertainment, Cube Entertainment, Starship Entertainment, Woollim Entertainment, FNC Entertainment, P NATION, DSP Media, Belift Lab, KQ Entertainment, Kakao Entertainment, Fantagio

> Observação: a lista acima reflete os itens atualmente presentes em `data.json`.

---

## 🚀 Como Usar

1. Abra o arquivo `index.html` em um navegador web
2. A página carrega automaticamente a lista de itens
3. Digite o nome de um idol, grupo ou empresa no campo de busca
4. Clique em "Buscar K-pop" ou pressione Enter para filtrar os resultados
5. Clique em "Saiba mais" em um card para visitar o link de referência

---

## 🛠️ Detalhes Técnicos

- `data.json`: cada item tem `nome`, `descricao` e `link` (pode ser estendido com `tipo`)
- `script.js`: carrega `data.json`, filtra por `nome` e `descricao`, renderiza cards
- `style.css`: variáveis de tema, responsividade e estilos para cards

---

## ✍️ Como Contribuir / Adicionar Itens

- Para adicionar um novo artista/empresa, edite o arquivo `data.json` e acrescente um objeto com `nome`, `descricao` e `link`.
- Opcional: inclua um campo `tipo` com os valores `"grupo"`, `"solo"` ou `"empresa"` para habilitar filtros por tipo (podemos implementar o filtro visual na interface se desejar).

---

## ✅ Estado atual

- `logo.svg` adicionado e exibido no header (letra "K").
- `data.json` contém uma lista ampliada de grupos/solos/empresas.
- Filtro por `tipo` ainda não implementado (próxima etapa sugerida).

---

## 👥 Autor

- **GitHub**: [tetedoceara](https://github.com/tetedoceara)
- **LinkedIn**: [Maria Ester Alves Bezerra](https://www.linkedin.com/in/maria-ester-alves-bezerra-139674367/)

---

Versão: 1.0 — Atualizado para tema K-pop

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
- **HTML5**: Estrutura semântica

# Base K-pop - Imersão DEV

## 📋 Descrição

Projeto educativo que funciona como uma **base de conhecimento interativa** sobre idols, grupos e empresas do universo K-pop. A aplicação permite buscar e explorar informações rápidas sobre artistas e agências.

---

## ✨ Funcionalidades

- **🔍 Busca por artistas/empresas**: Procure por nome ou parte da descrição
- **💾 Base de Dados JSON**: Lista de idols, grupos e empresas com descrição e link
- **📱 Design Responsivo**: Interface adaptada para diferentes tamanhos de tela
- **🎨 Tema K-pop**: Paleta mais vibrante (rosa e ciano) com tema escuro
- **⚡ Carregamento automático**: A lista é carregada ao abrir a página

---

## 🏗️ Estrutura do Projeto

```
ImersãoDEV/
├── index.html       # Estrutura HTML da página
├── style.css        # Estilos e tema visual
├── script.js        # Lógica de busca e renderização
├── data.json        # Base de dados com idols, grupos e empresas
└── README.md        # Este arquivo
```


### Conteúdo atual da Base de Dados

- **Grupos:** BTS, BLACKPINK, TWICE, SEVENTEEN, EXO, Red Velvet, NCT (e unidades como NCT 127/NCT Dream/WayV), Stray Kids, ATEEZ, Girls' Generation, BIGBANG, SHINee, GOT7, MAMAMOO, (G)I-DLE, ITZY, TXT, ENHYPEN, LOONA
- **Solos:** IU, Taeyeon
- **Empresas / Labels:** HYBE (BigHit), SM Entertainment, JYP Entertainment, YG Entertainment, Pledis Entertainment, Cube Entertainment, Starship Entertainment, Woollim Entertainment, FNC Entertainment, P NATION, DSP Media, Belift Lab, KQ Entertainment, Kakao Entertainment, Fantagio

> Observação: a lista acima reflete os itens atualmente presentes em `data.json`.

---

## 🚀 Como Usar

1. Abra o arquivo `index.html` em um navegador web
2. A página carrega automaticamente a lista de itens
3. Digite o nome de um idol, grupo ou empresa no campo de busca
4. Clique em "Buscar K-pop" ou pressione Enter para filtrar os resultados
5. Clique em "Saiba mais" em um card para visitar o link de referência

---

## 🛠️ Detalhes Técnicos

- `data.json`: cada item tem `nome`, `descricao` e `link` (pode ser estendido com `tipo`)
- `script.js`: carrega `data.json`, filtra por `nome` e `descricao`, renderiza cards
- `style.css`: variáveis de tema, responsividade e estilos para cards

---

## ✍️ Como Contribuir / Adicionar Itens

- Para adicionar um novo artista/empresa, edite o arquivo `data.json` e acrescente um objeto com `nome`, `descricao` e `link`.
- Opcional: inclua um campo `tipo` com os valores `"grupo"`, `"solo"` ou `"empresa"` para habilitar filtros por tipo (podemos implementar o filtro visual na interface se desejar).

---

Versão: 1.0 — Atualizado para tema K-pop
---

## 👥 Autor

- **GitHub**: [tetedoceara](https://github.com/tetedoceara)
- **LinkedIn**: [Maria Ester Alves Bezerra](https://www.linkedin.com/in/maria-ester-alves-bezerra-139674367/)

---

Versão: 1.0 — Atualizado para tema K-pop
