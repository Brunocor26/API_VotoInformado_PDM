const mongoose = require('mongoose');
const Candidate = require('./src/models/Candidate');
require('dotenv').config();

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/votoinformado');
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

const candidates = [
    {
        nome: "André Pestana",
        partido: "MAS",
        photoUrl: "/uploads/candidates/andre_pestana.png",
        profissao: "Político",
        cargosPrincipais: "Deputado",
        biografiaCurta: "André Pestana é um político português.",
        siteOficial: "",
        propostas: ["Proposta 1", "Proposta 2"]
    },
    {
        nome: "André Ventura",
        partido: "Chega",
        photoUrl: "/uploads/candidates/andre_ventura.jpg",
        profissao: "Advogado e Político",
        cargosPrincipais: "Presidente do Chega, Deputado",
        biografiaCurta: "André Ventura é advogado e líder do partido Chega.",
        siteOficial: "https://partidochega.pt",
        propostas: ["Proposta 1", "Proposta 2"]
    },
    {
        nome: "António Filipe",
        partido: "PCP",
        photoUrl: "/uploads/candidates/antonio_filipe.png",
        profissao: "Político",
        cargosPrincipais: "Deputado PCP",
        biografiaCurta: "António Filipe é um político do Partido Comunista Português.",
        siteOficial: "https://www.pcp.pt",
        propostas: ["Proposta 1", "Proposta 2"]
    },
    {
        nome: "António José Seguro",
        partido: "PS",
        photoUrl: "/uploads/candidates/antonio_jose_seguro.png",
        profissao: "Político",
        cargosPrincipais: "Ex-Secretário-Geral do PS",
        biografiaCurta: "António José Seguro foi secretário-geral do Partido Socialista.",
        siteOficial: "https://ps.pt",
        propostas: ["Proposta 1", "Proposta 2"]
    },
    {
        nome: "Catarina Martins",
        partido: "BE",
        photoUrl: "/uploads/candidates/catarina_martins.jpg",
        profissao: "Política",
        cargosPrincipais: "Ex-Coordenadora do Bloco de Esquerda",
        biografiaCurta: "Catarina Martins foi coordenadora do Bloco de Esquerda.",
        siteOficial: "https://www.bloco.org",
        propostas: ["Proposta 1", "Proposta 2"]
    },
    {
        nome: "Henrique Gouveia e Melo",
        partido: "Independente",
        photoUrl: "/uploads/candidates/henrique_gouveia_melo.jpg",
        profissao: "Militar",
        cargosPrincipais: "Almirante, Ex-coordenador da vacinação COVID-19",
        biografiaCurta: "Henrique Gouveia e Melo é almirante da Marinha Portuguesa.",
        siteOficial: "https://gouveiamelopresidente.pt",
        propostas: ["Proposta 1", "Proposta 2"]
    },
    {
        nome: "Joana Amaral Dias",
        partido: "ADN",
        photoUrl: "/uploads/candidates/joana_amaral_dias.jpg",
        profissao: "Psicóloga e Política",
        cargosPrincipais: "Líder do ADN",
        biografiaCurta: "Joana Amaral Dias é psicóloga e líder do partido ADN.",
        siteOficial: "",
        propostas: ["Proposta 1", "Proposta 2"]
    },
    {
        nome: "João Cotrim de Figueiredo",
        partido: "IL",
        photoUrl: "/uploads/candidates/joao_cotrim_figueiredo.jpg",
        profissao: "Economista e Político",
        cargosPrincipais: "Deputado da Iniciativa Liberal",
        biografiaCurta: "João Cotrim de Figueiredo é economista e deputado da IL.",
        siteOficial: "https://iniciativaliberal.pt",
        propostas: ["Proposta 1", "Proposta 2"]
    },
    {
        nome: "Jorge Pinto",
        partido: "Livre",
        photoUrl: "/uploads/candidates/jorge_pinto.png",
        profissao: "Político",
        cargosPrincipais: "Membro do Livre",
        biografiaCurta: "Jorge Pinto é político do partido Livre.",
        siteOficial: "https://partidolivre.pt",
        propostas: ["Proposta 1", "Proposta 2"]
    },
    {
        nome: "José Cardoso",
        partido: "Independente",
        photoUrl: "/uploads/candidates/jose_cardoso.png",
        profissao: "Empresário",
        cargosPrincipais: "Candidato Independente",
        biografiaCurta: "José Cardoso é empresário e candidato independente.",
        siteOficial: "",
        propostas: ["Proposta 1", "Proposta 2"]
    },
    {
        nome: "Luís Marques Mendes",
        partido: "PSD",
        photoUrl: "/uploads/candidates/luis_marques_mendes.jpg",
        profissao: "Advogado e Político",
        cargosPrincipais: "Ex-Presidente do PSD, Comentador Político",
        biografiaCurta: "Luís Marques Mendes é advogado e ex-presidente do PSD.",
        siteOficial: "https://www.psd.pt",
        propostas: ["Proposta 1", "Proposta 2"]
    },
    {
        nome: "Manuel João Vieira",
        partido: "Independente",
        photoUrl: "/uploads/candidates/manuel_joao_vieira.jpg",
        profissao: "Político",
        cargosPrincipais: "Candidato Independente",
        biografiaCurta: "Manuel João Vieira é candidato independente.",
        siteOficial: "",
        propostas: ["Proposta 1", "Proposta 2"]
    },
    {
        nome: "Manuela Magno",
        partido: "Independente",
        photoUrl: "/uploads/candidates/manuela_magno.jpg",
        profissao: "Política",
        cargosPrincipais: "Candidata Independente",
        biografiaCurta: "Manuela Magno é candidata independente.",
        siteOficial: "",
        propostas: ["Proposta 1", "Proposta 2"]
    },
    {
        nome: "Raul Perestrello",
        partido: "Independente",
        photoUrl: "/uploads/candidates/raul_perestrello.png",
        profissao: "Político",
        cargosPrincipais: "Candidato Independente",
        biografiaCurta: "Raul Perestrello é candidato independente.",
        siteOficial: "",
        propostas: ["Proposta 1", "Proposta 2"]
    },
    {
        nome: "Vitorino Silva",
        partido: "RIR",
        photoUrl: "/uploads/candidates/vitorino_silva.jpg",
        profissao: "Humorista e Político",
        cargosPrincipais: "Líder do RIR",
        biografiaCurta: "Vitorino Silva, conhecido como Tino de Rans, é humorista.",
        siteOficial: "",
        propostas: ["Proposta 1", "Proposta 2"]
    }
];

const seedDB = async () => {
    await connectDB();

    try {
        await Candidate.collection.drop();
        console.log('Candidates collection dropped');

        const createdCandidates = await Candidate.insertMany(candidates);
        console.log('Candidates imported!');

        process.exit();
    } catch (error) {
        console.error(`${error}`);
        process.exit(1);
    }
};

seedDB();
