const leitor = require('fs');
const bcrypt = require('bcrypt');

const caminhoTexto = './arquivo_para_leitura.txt';
const caminhoDB = './BancodeDados.json';

async function salvaBloco(conteudo) {
    const rodada = 10;
    let corrente = [];

    try {
        if (leitor.existsSync(caminhoDB)) {
            const conteudoDB = leitor.readFileSync(caminhoDB, 'utf8');
            if (conteudoDB.trim() !== "") {
                corrente = JSON.parse(conteudoDB);
            }
        }

        const hashAnterior = corrente.length > 0 ? corrente[corrente.length - 1].hash : "0";
        const hashAtual = await bcrypt.hash(conteudo + hashAnterior, rodada);

        const novoBloco = {
            index: corrente.length,
            data: "22-01-2026",
            hash: hashAtual,
            hashAnterior: hashAnterior
        };

        corrente.push(novoBloco);

        leitor.writeFileSync(caminhoDB, JSON.stringify(corrente, null, 2));
        console.log(`Bloco #${novoBloco.index} salvo com sucesso!`);
    } catch (erro) {
        console.log("Erro ao salvar bloco", erro);
    }
}

async function validarCorrente() {
    try {
        if (!leitor.existsSync(caminhoDB)) return true;
        
        const conteudoRaw = leitor.readFileSync(caminhoDB, 'utf8');
        
        if (!conteudoRaw || conteudoRaw.trim() === "" || conteudoRaw === "[]") {
            return true;
        }

        const corrente = JSON.parse(conteudoRaw);
        
        console.log("Verificando integridade da corrente");
        
        for (let i = 1; i < corrente.length; i++) {
            const blocoAtual = corrente[i];
            const blocoAnterior = corrente[i - 1];

            if (blocoAtual.hashAnterior !== blocoAnterior.hash) {
                console.log(`!!! ERRO NA CORRENTE NO BLOCO ${i} !!!`);
                return false;
            }
        }
        console.log("Blockchain 100% íntegra.");
        return true;
    } catch (e) {
        console.log("Erro na validação", e);
        return false;
    }
}

leitor.watch(caminhoTexto, async (evento) => {
    if (evento === 'change') {
        setTimeout(async () => {
            const conteudoNovo = leitor.readFileSync(caminhoTexto, 'utf8');
            const integro = await validarCorrente();

            if (integro) {
                console.log("Adicionando nova mudança à corrente");
                await salvaBloco(conteudoNovo);
            } else {
                console.log("--------------------------------------------------");
                console.log("ALERTA: A CORRENTE DE DADOS FOI VIOLADA!");
                console.log("--------------------------------------------------");
            }
        }, 100); 
    }
});

if (!leitor.existsSync(caminhoDB)) {
    const inicial = leitor.readFileSync(caminhoTexto, 'utf8');
    salvaBloco(inicial);
}