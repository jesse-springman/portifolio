import projPoke from '../assets/pokeCell.png';
import projApp from '../assets/tela-app.png';
import projNaruto from '../assets/tela-naruto.png';
import projXmen from '../assets/tela-xmen.png';
import pokeFilmes from '../assets/app.png';
import placeHolde from '../assets/placeholder.png';
import tabNews from '../assets/fin.png';
import petshop from '../assets/petshop.png';

export const dadosProjetos = [
  {
    projetoImg: petshop,
    titulo: 'PetShop Meneger IA',
    descricao: 'Sistema completo de gestão para petshops com IA integrada',
    tipo: 'Web App / Api',
    tecnologias: [
      'NestJS',
      'TypeScript',
      'Prisma',
      'JWT',
      'CI/CD',
      'Groq',
      'TypeScript',
      'Swagger',
      'Next.js',
      'PostgreSQL',
      'Docker',
      'TailwindCSS',
      'Bcrypt',
      'Jest',
      'React',
    ],
    linkGitHub: 'https://github.com/jesse-springman/petshop-backend-service',
    linkDemo: 'https://petshopbackendservice-peach.vercel.app',
    destaque: true,
    oculto: false,
    mostrarDemo: true,
  },

  {
    projetoImg: tabNews,
    titulo: 'Clone TabNews',
    descricao:
      'Clone da plataforma TabNews com sistema de posts, comentários, votação e autenticação completa.',
    tipo: 'Web App',
    tecnologias: [
      'Next.js',
      'PostgreSQL',
      'Docker',
      'node-pg-migrate',
      'Bcrypt',
      'Jest',
      'Commitizen',
      'Next-Connect',
      'React',
    ],
    linkGitHub: 'https://github.com/jesse-springman/clone-tabnews',
    linkDemo: 'https://jesse-springman.github.io/clone-tabnews',
    destaque: true,
    oculto: false,
  },

  {
    projetoImg: projPoke,
    titulo: 'Projeto Pokédex',
    descricao:
      'Pokédex interativa com busca e filtros por tipo consumindo a PokéAPI oficial.',
    tipo: 'Web App',
    tecnologias: ['Vite', 'React', 'React Router Dom', 'Styled Components'],
    linkGitHub: 'https://github.com/jesse-springman/pokedex',
    linkDemo: 'https://jesse-springman.github.io/pokedex',
    destaque: false,
    oculto: false,
  },

  {
    projetoImg: pokeFilmes,
    titulo: 'Plataformas de Filmes',
    descricao:
      'API REST para gerenciamento de filmes com filtragem por gênero e idioma, documentada com Swagger.',
    tipo: 'API',
    tecnologias: [
      'TypeScript',
      'Express',
      'Prisma',
      'PostgreSQL',
      'Swagger UI',
    ],
    linkGitHub: 'https://github.com/jesse-springman/app-Movies',
    linkDemo: 'https://jesse-springman.github.io/app-Movies',
    destaque: false,
    oculto: false,
  },

  {
    projetoImg: projApp,
    titulo: 'App de Previsão do Tempo',
    descricao:
      'Aplicação de previsão do tempo com busca por cidade e detalhes climáticos via API externa.',
    tipo: 'Web App',
    tecnologias: ['HTML', 'CSS', 'JavaScript'],
    linkGitHub: 'https://jesse-springman.github.io/app-previsao-test',
    linkDemo: 'https://jesse-springman.github.io/app-previsao-test',
    destaque: false,
    oculto: false,
  },

  {
    projetoImg: projNaruto,
    titulo: 'Projeto Naruto',
    descricao:
      'Página temática do universo Naruto com animações e layout responsivo.',
    tipo: 'Web App',
    tecnologias: ['HTML', 'CSS', 'JavaScript'],
    linkGitHub: 'https://jesse-springman.github.io/naruto',
    linkDemo: 'https://jesse-springman.github.io/naruto',
    destaque: false,
    oculto: false,
  },

  {
    projetoImg: projXmen,
    titulo: 'Projeto X-Men',
    descricao:
      'Página temática dos X-Men com cards interativos e design responsivo.',
    tipo: 'Web App',
    tecnologias: ['HTML', 'CSS', 'JavaScript'],
    linkGitHub: 'https://jesse-springman.github.io/x-men',
    linkDemo: 'https://jesse-springman.github.io/x-men',
    destaque: false,
    oculto: false,
  },

  {
    projetoImg: placeHolde,
    titulo: 'Projeto 5',
    descricao: '',
    tipo: 'Web App',
    tecnologias: ['HTML', 'CSS', 'JavaScript'],
    linkGitHub: '#',
    linkDemo: '#',
    destaque: false,
    oculto: true,
  },

  {
    projetoImg: placeHolde,
    titulo: 'Projeto 6',
    descricao: '',
    tipo: 'Web App',
    tecnologias: ['HTML', 'CSS', 'JavaScript'],
    linkGitHub: '#',
    linkDemo: '#',
    destaque: false,
    oculto: true,
  },

  {
    projetoImg: placeHolde,
    titulo: 'Projeto 7',
    descricao: '',
    tipo: 'Web App',
    tecnologias: ['HTML', 'CSS', 'JavaScript'],
    linkGitHub: '#',
    linkDemo: '#',
    destaque: false,
    oculto: true,
  },

  {
    projetoImg: placeHolde,
    titulo: 'Projeto 8',
    descricao: '',
    tipo: 'Web App',
    tecnologias: ['HTML', 'CSS', 'JavaScript'],
    linkGitHub: '#',
    linkDemo: '#',
    destaque: false,
    oculto: true,
  },
];
