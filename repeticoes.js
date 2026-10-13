const prompt = require('prompt-sync')();

let time = [];
let continuar = true;

function mostrarOpcoes() {
    console.log("\n---------------------------------------------------");
    console.log("------- Sistema de Gamers -------");
    console.log("1 - Cadastrar jogador");
    console.log("2 - Deletar jogador");
    console.log("3 - Mostrar equipe");
    console.log("4 - Cálculo de média da equipe");
    console.log("5 - Atualizar pontos do jogador");
    console.log("6 - Sair");
    console.log("---------------------------------------------------");
}

function cadastrarJogador() {
    let nomeJogador = prompt("Digite o nome do jogador: ").trim();

    if (!nomeJogador) {
        console.log("Nome inválido.");
        return;
    }

    let funcaoJogador = prompt("Digite a função do jogador: ").trim();
    let pontuacaoJogador = Number(prompt("Digite a pontuação do jogador: "));

    if (!funcaoJogador || isNaN(pontuacaoJogador)) {
        console.log("Dados inválidos. Verifique nome, função e pontuação.");
        return;
    }

    let jogador = {
        nome: nomeJogador,
        funcao: funcaoJogador,
        pontuacao: pontuacaoJogador
    };

    time.push(jogador);
    console.log("Jogador " + nomeJogador + " foi cadastrado com sucesso!");
}

function mostraEquipe() {
    if (time.length === 0) {
        console.log("A equipe está vazia.");
        return;
    }

    for (let i = 0; i < time.length; i++) {
        let jogador = time[i];
        console.log("Jogador " + (i + 1) + ": " + jogador.nome + " | Função: " + jogador.funcao + " | Pontuação: " + jogador.pontuacao);
    }
}

function deletarJogador() {
    if (time.length === 0) {
        console.log("Jogador não encontrado!");
        return;
    }

    let nomeDeletado = prompt("Digite o nome a ser deletado: ").trim();
    let indexDeletado = -1;

    for (let i = 0; i < time.length; i++) {
        if (time[i].nome === nomeDeletado) {
            indexDeletado = i;
            break;
        }
    }

    if (indexDeletado === -1) {
        console.log("Jogador não encontrado.");
        return;
    }

    time.splice(indexDeletado, 1);
    console.log("Jogador deletado com sucesso!");
    console.log("--------------------------------------------------");
}

function calcularMediaEquipe() {
    if (time.length === 0) {
        console.log("A equipe está vazia.");
        return;
    }

    let totalPontuacao = 0;

    for (let i = 0; i < time.length; i++) {
        totalPontuacao += time[i].pontuacao;
    }

    let media = totalPontuacao / time.length;
    console.log("A média da equipe é: " + media.toFixed(2));
}

function atualizarPontosJogador() {
    if (time.length === 0) {
        console.log("A equipe está vazia.");
        return;
    }

    let nomeAtualizar = prompt("Digite o nome do jogador a ser atualizado: ").trim();
    let jogadorEncontrado = false;

    for (let i = 0; i < time.length; i++) {
        if (time[i].nome === nomeAtualizar) {
            let novaPontuacao = Number(prompt("Digite a nova pontuação do jogador: "));
            if (isNaN(novaPontuacao)) {
                console.log("Pontuação inválida.");
                return;
            }
            time[i].pontuacao = novaPontuacao;
            console.log("Pontuação do jogador " + nomeAtualizar + " atualizada com sucesso!");
            jogadorEncontrado = true;
            break;
        }
    }

    if (!jogadorEncontrado) {
        console.log("Jogador não encontrado.");
    }
}

while (continuar === true) {
    mostrarOpcoes();
    let opcao = prompt("Digite sua opção: ");

    if (opcao === "1") {
        cadastrarJogador();
    } else if (opcao === "2") {
        deletarJogador();
    } else if (opcao === "3") {
        mostraEquipe();
    } else if (opcao === "4") {
        console.log("Calculando média da equipe...");
        calcularMediaEquipe();
    } else if (opcao === "5") {
        atualizarPontosJogador();
    } else if (opcao === "6") {
        console.log("Saindo do programa...");
        continuar = false;
    } else {
        console.log("Opção inválida. Tente novamente.");
    }
}