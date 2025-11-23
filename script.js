let cardContainer = document.querySelector(".card-container");
let dados = [];

async function iniciarBusca() {
    try {
        const resposta = await fetch("data.json");
        dados = await resposta.json();

        const query = document.querySelector("#searchInput").value.trim().toLowerCase();
        let resultados = dados;
        if (query) {
            resultados = dados.filter(d => {
                const nome = d.nome ? d.nome.toLowerCase() : "";
                const descricao = d.descricao ? d.descricao.toLowerCase() : "";
                return nome.includes(query) || descricao.includes(query);
            });
        }

        renderizarCards(resultados);
        mostrarInfoBusca(query, resultados.length);
    } catch (err) {
        console.error("Erro ao buscar dados:", err);
        const info = document.querySelector("#resultsInfo");
        if (info) info.textContent = "Erro ao carregar dados.";
    }
}

function renderizarCards(dados) {
    cardContainer.innerHTML = "";
    if (!dados || dados.length === 0) {
        cardContainer.innerHTML = '<p class="no-results">Nenhum resultado encontrado.</p>';
        return;
    }

    for (let dado of dados) {
        let article = document.createElement("article");
        article.classList.add("card");
        article.innerHTML = `
        <h2>${dado.nome}</h2>
        <p>${dado.descricao}</p>
        <a href="${dado.link}" target="_blank">Saiba mais</a>
        `;
        cardContainer.appendChild(article);
    }
}

function mostrarInfoBusca(query, count) {
    let info = document.querySelector("#resultsInfo");
    if (!info) {
        info = document.createElement("div");
        info.id = "resultsInfo";
        cardContainer.parentNode.insertBefore(info, cardContainer);
    }

    if (query) {
        info.textContent = `Resultados para "${query}" — ${count} encontrado(s).`;
    } else {
        info.textContent = `Exibindo todas — ${count} item(ns).`;
    }
}