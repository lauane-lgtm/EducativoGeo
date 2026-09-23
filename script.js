function filtrar(categoria) {

    const cards = document.querySelectorAll(".card");

    cards.forEach(function(card) {

        if (
            categoria === "todos" ||
            card.dataset.categoria === categoria
        ) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

}


const campoPesquisa =
    document.getElementById("campoPesquisa");


campoPesquisa.addEventListener("input", function() {

    const pesquisa =
        campoPesquisa.value.toLowerCase();

    const cards =
        document.querySelectorAll(".card");


    cards.forEach(function(card) {

        const texto =
            card.innerText.toLowerCase();


        if (texto.includes(pesquisa)) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

});