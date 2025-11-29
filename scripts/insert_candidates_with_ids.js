const mongoose = require('mongoose');
const Candidate = require('../src/models/Candidate');
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
    _id: new mongoose.Types.ObjectId('6929a611bcecdef81c2bbf08'),
    nome: 'André Pestana',
    partido: 'MAS',
    photoUrl: '/uploads/candidates/andre_pestana.png',
    propostas: ['Proposta 1', 'Proposta 2'],
    // _id removed for MongoDB to create new _id
    profissao: 'Político',
    cargosPrincipais: 'Deputado',
    biografiaCurta: 'André Pestana é um político português.',
    siteOficial: '',
    __v: 0,
    createdAt: new Date('2025-11-28T13:39:29.267Z'),
    updatedAt: new Date('2025-11-28T13:39:29.267Z')
  },
  {
    _id: new mongoose.Types.ObjectId('6929a611bcecdef81c2bbf09'),
    nome: 'André Ventura',
    partido: 'Chega',
    photoUrl: '/uploads/candidates/andre_ventura.jpg',
    propostas: ['Proposta 1', 'Proposta 2'],
    // _id removed for MongoDB to create new _id
    profissao: 'Advogado e Político',
    cargosPrincipais: 'Presidente do Chega, Deputado',
    biografiaCurta: 'André Ventura é advogado e líder do partido Chega.',
    siteOficial: 'https://partidochega.pt',
    __v: 0,
    createdAt: new Date('2025-11-28T13:39:29.268Z'),
    updatedAt: new Date('2025-11-28T13:39:29.268Z')
  },
  {
    _id: new mongoose.Types.ObjectId('6929a611bcecdef81c2bbf0a'),
    nome: 'António Filipe',
    partido: 'PCP',
    photoUrl: '/uploads/candidates/antonio_filipe.png',
    propostas: ['Proposta 1', 'Proposta 2'],
    // _id removed for MongoDB to create new _id
    profissao: 'Político',
    cargosPrincipais: 'Deputado PCP',
    biografiaCurta: 'António Filipe é um político do Partido Comunista Português.',
    siteOficial: 'https://www.pcp.pt',
    __v: 0,
    createdAt: new Date('2025-11-28T13:39:29.268Z'),
    updatedAt: new Date('2025-11-28T13:39:29.268Z')
  },
  {
    _id: new mongoose.Types.ObjectId('6929a611bcecdef81c2bbf0b'),
    nome: 'António José Seguro',
    partido: 'PS',
    photoUrl: '/uploads/candidates/antonio_jose_seguro.png',
    propostas: ['Proposta 1', 'Proposta 2'],
    // _id removed for MongoDB to create new _id
    profissao: 'Político',
    cargosPrincipais: 'Ex-Secretário-Geral do PS',
    biografiaCurta: 'António José Seguro foi secretário-geral do Partido Socialista.',
    siteOficial: 'https://ps.pt',
    __v: 0,
    createdAt: new Date('2025-11-28T13:39:29.268Z'),
    updatedAt: new Date('2025-11-28T13:39:29.268Z')
  },
  {
    _id: new mongoose.Types.ObjectId('6929a611bcecdef81c2bbf0c'),
    nome: 'Catarina Martins',
    partido: 'BE',
    photoUrl: '/uploads/candidates/catarina_martins.jpg',
    propostas: ['Proposta 1', 'Proposta 2'],
    // _id removed for MongoDB to create new _id
    profissao: 'Política',
    cargosPrincipais: 'Ex-Coordenadora do Bloco de Esquerda',
    biografiaCurta: 'Catarina Martins foi coordenadora do Bloco de Esquerda.',
    siteOficial: 'https://www.bloco.org',
    __v: 0,
    createdAt: new Date('2025-11-28T13:39:29.268Z'),
    updatedAt: new Date('2025-11-28T13:39:29.268Z')
  },
  {
    _id: new mongoose.Types.ObjectId('6929a611bcecdef81c2bbf0d'),
    nome: 'Henrique Gouveia e Melo',
    partido: 'Independente',
    photoUrl: '/uploads/candidates/henrique_gouveia_melo.jpg',
    propostas: ['Proposta 1', 'Proposta 2'],
    // _id removed for MongoDB to create new _id
    profissao: 'Militar',
    cargosPrincipais: 'Almirante, Ex-coordenador da vacinação COVID-19',
    biografiaCurta: 'Henrique Gouveia e Melo é almirante da Marinha Portuguesa.',
    siteOficial: 'https://gouveiamelopresidente.pt',
    __v: 0,
    createdAt: new Date('2025-11-28T13:39:29.268Z'),
    updatedAt: new Date('2025-11-28T13:39:29.268Z')
  },
  {
    _id: new mongoose.Types.ObjectId('6929a611bcecdef81c2bbf0e'),
    nome: 'Joana Amaral Dias',
    partido: 'ADN',
    photoUrl: '/uploads/candidates/joana_amaral_dias.jpg',
    propostas: ['Proposta 1', 'Proposta 2'],
    // _id removed for MongoDB to create new _id
    profissao: 'Psicóloga e Política',
    cargosPrincipais: 'Líder do ADN',
    biografiaCurta: 'Joana Amaral Dias é psicóloga e líder do partido ADN.',
    siteOficial: '',
    __v: 0,
    createdAt: new Date('2025-11-28T13:39:29.269Z'),
    updatedAt: new Date('2025-11-28T13:39:29.269Z')
  },
  {
    _id: new mongoose.Types.ObjectId('6929a611bcecdef81c2bbf0f'),
    nome: 'João Cotrim de Figueiredo',
    partido: 'IL',
    photoUrl: '/uploads/candidates/joao_cotrim_figueiredo.jpg',
    propostas: ['Proposta 1', 'Proposta 2'],
    // _id removed for MongoDB to create new _id
    profissao: 'Economista e Político',
    cargosPrincipais: 'Deputado da Iniciativa Liberal',
    biografiaCurta: 'João Cotrim de Figueiredo é economista e deputado da IL.',
    siteOficial: 'https://iniciativaliberal.pt',
    __v: 0,
    createdAt: new Date('2025-11-28T13:39:29.269Z'),
    updatedAt: new Date('2025-11-28T13:39:29.269Z')
  },
  {
    _id: new mongoose.Types.ObjectId('6929a611bcecdef81c2bbf10'),
    nome: 'Jorge Pinto',
    partido: 'Livre',
    photoUrl: '/uploads/candidates/jorge_pinto.png',
    propostas: ['Proposta 1', 'Proposta 2'],
    // _id removed for MongoDB to create new _id
    profissao: 'Político',
    cargosPrincipais: 'Membro do Livre',
    biografiaCurta: 'Jorge Pinto é político do partido Livre.',
    siteOficial: 'https://partidolivre.pt',
    __v: 0,
    createdAt: new Date('2025-11-28T13:39:29.269Z'),
    updatedAt: new Date('2025-11-28T13:39:29.269Z')
  },
  {
    _id: new mongoose.Types.ObjectId('6929a611bcecdef81c2bbf11'),
    nome: 'José Cardoso',
    partido: 'Independente',
    photoUrl: '/uploads/candidates/jose_cardoso.png',
    propostas: ['Proposta 1', 'Proposta 2'],
    // _id removed for MongoDB to create new _id
    profissao: 'Empresário',
    cargosPrincipais: 'Candidato Independente',
    biografiaCurta: 'José Cardoso é empresário e candidato independente.',
    siteOficial: '',
    __v: 0,
    createdAt: new Date('2025-11-28T13:39:29.269Z'),
    updatedAt: new Date('2025-11-28T13:39:29.269Z')
  },
  {
    _id: new mongoose.Types.ObjectId('6929a611bcecdef81c2bbf12'),
    nome: 'Luís Marques Mendes',
    partido: 'PSD',
    photoUrl: '/uploads/candidates/luis_marques_mendes.jpg',
    propostas: ['Proposta 1', 'Proposta 2'],
    // _id removed for MongoDB to create new _id
    profissao: 'Advogado e Político',
    cargosPrincipais: 'Ex-Presidente do PSD, Comentador Político',
    biografiaCurta: 'Luís Marques Mendes é advogado e ex-presidente do PSD.',
    siteOficial: 'https://www.psd.pt',
    __v: 0,
    createdAt: new Date('2025-11-28T13:39:29.269Z'),
    updatedAt: new Date('2025-11-28T13:39:29.269Z')
  },
  {
    _id: new mongoose.Types.ObjectId('6929a611bcecdef81c2bbf13'),
    nome: 'Manuel João Vieira',
    partido: 'Independente',
    photoUrl: '/uploads/candidates/manuel_joao_vieira.jpg',
    propostas: ['Proposta 1', 'Proposta 2'],
    // _id removed for MongoDB to create new _id
    profissao: 'Político',
    cargosPrincipais: 'Candidato Independente',
    biografiaCurta: 'Manuel João Vieira é candidato independente.',
    siteOficial: '',
    __v: 0,
    createdAt: new Date('2025-11-28T13:39:29.269Z'),
    updatedAt: new Date('2025-11-28T13:39:29.269Z')
  },
  {
    _id: new mongoose.Types.ObjectId('6929a611bcecdef81c2bbf14'),
    nome: 'Manuela Magno',
    partido: 'Independente',
    photoUrl: '/uploads/candidates/manuela_magno.jpg',
    propostas: ['Proposta 1', 'Proposta 2'],
    // _id removed for MongoDB to create new _id
    profissao: 'Política',
    cargosPrincipais: 'Candidata Independente',
    biografiaCurta: 'Manuela Magno é candidata independente.',
    siteOficial: '',
    __v: 0,
    createdAt: new Date('2025-11-28T13:39:29.269Z'),
    updatedAt: new Date('2025-11-28T13:39:29.269Z')
  },
  {
    _id: new mongoose.Types.ObjectId('6929a611bcecdef81c2bbf15'),
    nome: 'Raul Perestrello',
    partido: 'Independente',
    photoUrl: '/uploads/candidates/raul_perestrello.png',
    propostas: ['Proposta 1', 'Proposta 2'],
    // _id removed for MongoDB to create new _id
    profissao: 'Político',
    cargosPrincipais: 'Candidato Independente',
    biografiaCurta: 'Raul Perestrello é candidato independente.',
    siteOficial: '',
    __v: 0,
    createdAt: new Date('2025-11-28T13:39:29.269Z'),
    updatedAt: new Date('2025-11-28T13:39:29.269Z')
  },
  {
    _id: new mongoose.Types.ObjectId('6929a611bcecdef81c2bbf16'),
    nome: 'Vitorino Silva',
    partido: 'RIR',
    photoUrl: '/uploads/candidates/vitorino_silva.jpg',
    propostas: ['Proposta 1', 'Proposta 2'],
    // _id removed for MongoDB to create new _id
    profissao: 'Humorista e Político',
    cargosPrincipais: 'Líder do RIR',
    biografiaCurta: 'Vitorino Silva, conhecido como Tino de Rans, é humorista.',
    siteOficial: '',
    __v: 0,
    createdAt: new Date('2025-11-28T13:39:29.269Z'),
    updatedAt: new Date('2025-11-28T13:39:29.269Z')
  }
];

const run = async () => {
  await connectDB();

  try {
    // Drop collection if it exists
    const coll = mongoose.connection.collections['candidates'];
    if (coll) {
      await coll.drop();
      console.log('Dropped candidates collection');
    }
  } catch (err) {
    // ignore if collection doesn't exist
    if (err.message === 'ns not found') {
      console.log('Collection candidates does not exist; will create it');
    } else {
      console.error(err);
      process.exit(1);
    }
  }

  try {
    // add id (slug) to each candidate before insert
    const slugify = (str) => {
      if (!str) return '';
      return str
        .normalize('NFD')
        .replace(/[\u0000-\u001f]/g, '')
        .replace(/\p{Diacritic}/gu, '')
        .replace(/[^a-zA-Z0-9 ]/g, '')
        .trim()
        .toLowerCase()
        .split(' ')
        .filter(word => !['de', 'da', 'do', 'e', 'dos', 'das'].includes(word))
        .join('_');
    };

    // remove any explicit _id from the data so MongoDB will create new _id values
    const toInsert = candidates.map(c => {
      const copy = { ...c };
      if (copy._id) delete copy._id;
      copy.id = slugify(copy.nome);
      return copy;
    });

    await Candidate.insertMany(toInsert);
    console.log('Inserted candidates with explicit _id and timestamps');
    process.exit(0);
  } catch (error) {
    console.error('Insert failed:', error);
    process.exit(1);
  }
};

run();
