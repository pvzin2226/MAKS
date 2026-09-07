fetch("http://localhost:8080/produtos")
    .then(resposta => resposta.json())
    .then(produtos => {

        const lista = document.getElementById("lista-produtos");

        if (lista) {

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
        }

    })
    .catch(erro => {
        alert("ERRO: " + erro);
    });


const campoPreco = document.getElementById("preco");

if (campoPreco) {

    campoPreco.addEventListener("input", function () {

        let valor = campoPreco.value.replace(/\D/g, "");

        if (valor === "") {
            campoPreco.value = "0,00";
            return;
        }

        valor = parseInt(valor, 10);

        campoPreco.value = (valor / 100).toFixed(2).replace(".", ",");
    });
}
const formulario = document.getElementById("form-produto");

if (formulario) {

    formulario.addEventListener("submit", function(evento) {

        evento.preventDefault();

        const produto = {
            nome: document.getElementById("nome").value,
            preco: parseFloat(
                document.getElementById("preco").value.replace(",", ".")
            ),
            descricao: document.getElementById("descricao").value,
            imagem: document.getElementById("imagem").value
        };

        fetch("http://localhost:8080/produtos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(produto)
        })
        .then(resposta => {
            if (!resposta.ok) {
                throw new Error("Erro ao salvar produto");
            }

            return resposta.json();
        })
        .then(produtoSalvo => {
            alert("Produto cadastrado com sucesso! ID: " + produtoSalvo.id);
            formulario.reset();
        })
        .catch(erro => {
            alert("ERRO: " + erro);
        });

    });
}
const botaoMenu = document.getElementById("menu-botao");
const menuLateral = document.getElementById("menu-lateral");
const fecharMenu = document.getElementById("fechar-menu");

if (botaoMenu && menuLateral) {

    botaoMenu.addEventListener("click", function () {
        menuLateral.classList.add("aberto");
    });

}

if (fecharMenu && menuLateral) {

    fecharMenu.addEventListener("click", function () {
        menuLateral.classList.remove("aberto");
    });

}