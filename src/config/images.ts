// Imagens da CK Eventos

export const images = {
  logos: {
    main: '/images/logos/logo-ck.png',
  },
  hero: {
    main: '/images/bar/balcao_bar.jpg',
    background: '/images/bar/barescuro.jpg',
  },
  services: {
    bar: '/images/bar/barescuro.jpg',
    plataforma360: '/images/experiencias/plataforma_meninas.jpg',
    cabineFotos: '/images/experiencias/cabine_debutante.jpg',
    totem: '/images/experiencias/setup_completo_ck.jpg',
    acai: 'https://images.unsplash.com/photo-1488900128323-21503983a07e?q=80&w=2070',
    milkshake: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=2070',
    fondue: '/images/gourmet/carrinho_fondue.png',
  },
  gallery: {
    wedding1: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070',
    wedding2: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?q=80&w=2070',
    wedding3: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=2070',
    sweet151: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=2070',
    sweet152: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2069',
    sweet153: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=2069',
    corporate1: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069',
    corporate2: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012',
    birthday1: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=2070',
    birthday2: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2069',
    bar1: '/images/bar/barescuro.jpg',
    bar2: '/images/bar/palavra_bar_iluminada.jpg',
    bar3: '/images/bar/cliente_drinknamao.jpg',
    bar4: '/images/bar/coketeleira_e_laranjas_bar.jpg',
    bar5: '/images/bar/morangos_bar.jpg',
    bar6: '/images/bar/cliente_drink_na_mao2.jpg',
    bar7: '/images/bar/banheirinha_azul.jpg',
    bar9: '/images/bar/ckeventosfolder.jpg',
    bar10: '/images/bar/drinknamao.jpg',
    bar11: '/images/bar/cliente_drink_na_mao3.jpg',
    bar12: '/images/bar/balcao_bar.jpg',
    bar13: '/images/bar/balcaobar2.jpg',
    booth: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069',
    // Experiências Interativas
    exp1: '/images/experiencias/cabine_debutante.jpg',
    exp2: '/images/experiencias/plataforma_meninas.jpg',
    exp3: '/images/experiencias/plataforma_rapazes.jpg',
    exp4: '/images/experiencias/plataforma_noivos.jpg',
    exp5: '/images/experiencias/plataforma_setup.jpg',
    exp6: '/images/experiencias/aderecos_closeup.jpg',
    exp7: '/images/experiencias/setup_completo_ck.jpg',
  },
  team: {
    karine: '/images/team/karine_camisa_preta.jpeg',
    philipe: '/images/team/philipe_camisa_preta.jpeg',
    team1: '/images/team/philipe_ekarine.png',
    team2: '/images/team/foto_quemsomos.png',
    team3: '/images/team/philipe_ekarine.png',
    equipe_letsparty: '/images/team/equipe_letsparty.jpeg',
    karine_letsparty: '/images/team/karine_letsparty.jpeg',
    equipe_15anos: '/images/team/equipe_15anos.jpeg',
  },
  testimonials: {
    client1: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974',
    client2: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974',
    client3: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976',
    client4: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974',
    client5: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070',
    client6: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964',
  },
};

export interface RealBarPhoto {
  src: string;
  title: string;
  subtitle: string;
  category: 'bar' | 'drink' | 'experiencia';
  featured?: boolean;
}

// Todas as fotos reais de bar para exibição completa
export const allRealBarPhotos: RealBarPhoto[] = [
  {
    src: '/images/bar/balcao_bar.jpg',
    title: 'Ilha Premium Iluminada',
    subtitle: 'Estrutura elegante montada para festas de alto padrão',
    category: 'bar',
    featured: true,
  },
  {
    src: '/images/bar/palavra_bar_iluminada.jpg',
    title: 'Letreiro de Led "BAR"',
    subtitle: 'Ponto focal fotogênico para o evento',
    category: 'bar',
    featured: true,
  },
  {
    src: '/images/bar/barescuro.jpg',
    title: 'Bar Noturno Clássico',
    subtitle: 'Iluminação cênica sofisticada e taças de cristal',
    category: 'bar',
    featured: true,
  },
  {
    src: '/images/bar/balcaobar2.jpg',
    title: 'Balcão Rústico e Amadeirado',
    subtitle: 'Perfeito para casamentos ao ar livre e sítios',
    category: 'bar',
  },
  {
    src: '/images/bar/coketeleira_e_laranjas_bar.jpg',
    title: 'Mise en Place & Frutas Frescas',
    subtitle: 'Ingredientes selecionados e coquetelaria ao vivo',
    category: 'drink',
  },
  {
    src: '/images/bar/morangos_bar.jpg',
    title: 'Frutas Nobres e Guarnições',
    subtitle: 'Frescor absoluto para caipifrutas e gin tônica',
    category: 'drink',
  },
  {
    src: '/images/bar/banheirinha_azul.jpg',
    title: 'Drink na Banheirinha com Patinho',
    subtitle: 'A atração mais postada no Instagram dos convidados',
    category: 'drink',
    featured: true,
  },
  {
    src: '/images/bar/cliente_drink_na_mao2.jpg',
    title: 'Taça de Gin com Especiarias',
    subtitle: 'Apresentação impecável em taças de vidro',
    category: 'drink',
  },
  {
    src: '/images/bar/cliente_drinknamao.jpg',
    title: 'Coquetéis Refrescantes',
    subtitle: 'Serviço ágil sem filas para os convidados',
    category: 'drink',
  },
  {
    src: '/images/bar/cliente_drink_na_mao3.jpg',
    title: 'Drinks Tropicais',
    subtitle: 'Variedade e elegância servidas na hora',
    category: 'drink',
  },
  {
    src: '/images/bar/drinknamao.jpg',
    title: 'Detalhes e Decorações de Copo',
    subtitle: 'Cada copo finalizado com guarnição autoral',
    category: 'drink',
  },
  {
    src: '/images/bar/ckeventosfolder.jpg',
    title: 'Cardápio & Apresentação CK',
    subtitle: 'Carta com o nome dos noivos e identidade do evento',
    category: 'bar',
  },
  {
    src: '/images/experiencias/plataforma_meninas.jpg',
    title: 'Plataforma 360° com Vídeos Instantâneos',
    subtitle: 'Entretenimento que viraliza entre os convidados',
    category: 'experiencia',
  },
  {
    src: '/images/experiencias/cabine_debutante.jpg',
    title: 'Cabine Fotográfica com Fotos Reveladas',
    subtitle: 'Lembrança impressa na hora da festa',
    category: 'experiencia',
  },
  {
    src: '/images/gourmet/carrinho_fondue.png',
    title: 'Carrinho Gourmet de Fondue & Doces',
    subtitle: 'Estação doce requintada para a recepção',
    category: 'experiencia',
  },
  {
    src: '/images/team/equipe_letsparty.jpeg',
    title: 'Equipe CK Uniformizada',
    subtitle: 'Bartenders treinados, cordiais e pontuais',
    category: 'bar',
  },
];
