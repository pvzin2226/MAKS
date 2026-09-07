fetch("http://localhost:8080/produtos")
    .then(resposta => resposta.json())
    .then(produtos => {

        alert("Produtos recebidos: " + produtos.length);

        const lista = document.getElementById("lista-produtos");

        produtos.forEach(produto => {

            const card = document.createElement("div");

            card.classList.add("produto");

            card.innerHTML = `
                <img src="${produto.imagem}" alt="${produto.nome}">
                <h3>${produto.nome}</h3>
                <p>R$ ${produto.preco}</p>
                <h4>${produto.descricao}</h4>
            `;

            lista.appendChild(card);
        });
    })
    .catch(erro => {
        alert("ERRO: " + erro);
    });