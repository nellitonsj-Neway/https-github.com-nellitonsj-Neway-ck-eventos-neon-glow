import { useState } from 'react';
import { Camera, Eye, Sparkles, Check, ArrowRight } from 'lucide-react';
import Lightbox from '@/components/ui/lightbox';

type GalleryCategory = 'all_bar' | 'ilhas' | 'drinks' | 'experiencias' | 'equipe';

interface PhotoItem {
  src: string;
  title: string;
  caption: string;
  category: GalleryCategory[];
  tag: string;
}

const realPhotos: PhotoItem[] = [
  {
    src: '/images/bar/balcao_bar.jpg',
    title: 'Ilha Iluminada de Luxo',
    caption: 'Balcão completo com acabamento nobre e luz quente cenográfica',
    category: ['all_bar', 'ilhas'],
    tag: 'Estrutura',
  },
  {
    src: '/images/bar/palavra_bar_iluminada.jpg',
    title: 'Letreiro "BAR" em Led',
    caption: 'O ponto de encontro mais instagramável da sua comemoração',
    category: ['all_bar', 'ilhas'],
    tag: 'Destaque',
  },
  {
    src: '/images/bar/banheirinha_azul.jpg',
    title: 'Drink na Banheira com Patinho',
    caption: 'Apresentação exclusiva da CK Eventos que encanta convidados',
    category: ['all_bar', 'drinks'],
    tag: 'Sucesso',
  },
  {
    src: '/images/bar/barescuro.jpg',
    title: 'Bar Noturno Clássico',
    caption: 'Montagem perfeita com garrafas premium e taças de vidro',
    category: ['all_bar', 'ilhas'],
    tag: 'Noturno',
  },
  {
    src: '/images/bar/balcaobar2.jpg',
    title: 'Balcão Rústico Amadeirado',
    caption: 'Design aconchegante ideal para casamentos e sítios',
    category: ['all_bar', 'ilhas'],
    tag: 'Rústico Chic',
  },
  {
    src: '/images/bar/coketeleira_e_laranjas_bar.jpg',
    title: 'Coquetelaria com Frutas Frescas',
    caption: 'Preparo artesanal na hora com insumos de primeira linha',
    category: ['all_bar', 'drinks'],
    tag: 'Ao Vivo',
  },
  {
    src: '/images/bar/morangos_bar.jpg',
    title: 'Morangos & Ervas Frescas',
    caption: 'Frutas nobres para caipis, gin tropical e coquetéis sem álcool',
    category: ['all_bar', 'drinks'],
    tag: 'Frescor',
  },
  {
    src: '/images/bar/cliente_drink_na_mao2.jpg',
    title: 'Taça de Gin com Especiarias',
    caption: 'Finalização artística e aroma marcante em cada serviço',
    category: ['all_bar', 'drinks'],
    tag: 'Gin Tropical',
  },
  {
    src: '/images/bar/cliente_drinknamao.jpg',
    title: 'Brinde dos Convidados',
    caption: 'Atendimento ágil para garantir que a pista não fique sem drink',
    category: ['all_bar', 'drinks'],
    tag: 'Brinde',
  },
  {
    src: '/images/bar/cliente_drink_na_mao3.jpg',
    title: 'Coquetel Refrescante de Verão',
    caption: 'Cores vibrantes e equilíbrio de sabor para todas as idades',
    category: ['all_bar', 'drinks'],
    tag: 'Refrescante',
  },
  {
    src: '/images/bar/drinknamao.jpg',
    title: 'Finalização Autoral com Guarnições',
    caption: 'Cada drink servido como uma verdadeira obra de arte',
    category: ['all_bar', 'drinks'],
    tag: 'Detalhes',
  },
  {
    src: '/images/bar/ckeventosfolder.jpg',
    title: 'Cardápio Personalizado do Evento',
    caption: 'Carta de bebidas impressa com os nomes dos noivos ou debutante',
    category: ['all_bar', 'ilhas'],
    tag: 'Personalizado',
  },
  {
    src: '/images/experiencias/plataforma_meninas.jpg',
    title: 'Plataforma 360° em Ação',
    caption: 'Vídeos em câmera lenta que viralizam instantaneamente nas redes',
    category: ['experiencias'],
    tag: 'Plataforma 360°',
  },
  {
    src: '/images/experiencias/cabine_debutante.jpg',
    title: 'Cabine Fotográfica de Lembrança',
    caption: 'Fotos reveladas na hora para os convidados levarem para casa',
    category: ['experiencias'],
    tag: 'Foto Lembrança',
  },
  {
    src: '/images/gourmet/carrinho_fondue.png',
    title: 'Carrinho Gourmet de Fondue & Doces',
    caption: 'Estação doce requintada com frutas, marshmallows e chocolate nobre',
    category: ['experiencias'],
    tag: 'Gourmet',
  },
  {
    src: '/images/team/equipe_letsparty.jpeg',
    title: 'Equipe CK Uniformizada',
    caption: 'Bartenders treinados, pontuais, carismáticos e impecáveis',
    category: ['all_bar', 'equipe'],
    tag: 'Equipe',
  },
  {
    src: '/images/team/philipe_ekarine.png',
    title: 'Fundadores Philipe & Karine',
    caption: 'Cuidado direto dos donos em cada detalhe do seu evento',
    category: ['equipe'],
    tag: 'Fundadores',
  },
];

export default function Gallery() {
  const [activeTab, setActiveTab] = useState<GalleryCategory>('all_bar');
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  const filteredPhotos = realPhotos.filter((item) =>
    activeTab === 'all_bar' ? item.category.includes('all_bar') : item.category.includes(activeTab)
  );

  const tabs = [
    { id: 'all_bar', label: 'Todas as Fotos de Bar' },
    { id: 'ilhas', label: 'Estruturas & Ilhas' },
    { id: 'drinks', label: 'Drinks & Taças' },
    { id: 'experiencias', label: 'Plataforma 360° & Cabine' },
    { id: 'equipe', label: 'Equipe & Donos' },
  ];

  return (
    <section id="galeria" className="py-16 md:py-24 bg-[#fffefb] border-t border-[#e9e2d0] scroll-mt-20">
      <div className="mx-auto max-w-[1280px] px-4 md:px-6">
        
        {/* Section Header */}
        <div className="max-w-[760px] mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#fbf8f0] border border-[#e9e2d0] text-[11px] tracking-[0.14em] uppercase font-bold text-[#0f172a]">
            <Camera className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Fotos 100% Reais dos Nossos Eventos</span>
          </div>

          <h2 className="serif mt-4 text-[32px] sm:text-[40px] md:text-[48px] leading-[0.95] font-bold text-[#0f172a]">
            O bar mais fotografado da sua festa
          </h2>
          <p className="mt-4 text-[15px] sm:text-[16px] text-[#64748b] leading-[1.6]">
            Sem fotos de banco de imagem. Veja a estrutura real que levamos para casamentos, debutantes e celebrações em Santa Luzia e Belo Horizonte.
          </p>
        </div>

        {/* Filter Pills - Scrollable on mobile */}
        <div className="mt-8 sm:mt-10 flex items-center sm:justify-center gap-2 max-w-4xl mx-auto overflow-x-auto no-scrollbar pb-2 px-1 sm:flex-wrap">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as GalleryCategory)}
                className={`px-4 py-2 rounded-full text-[12px] md:text-[13px] font-semibold tracking-wide whitespace-nowrap transition-all shrink-0 active:scale-95 ${
                  isActive
                    ? 'bg-[#0f172a] text-white shadow-md'
                    : 'bg-[#fbf8f0] text-[#334155] border border-[#e9e2d0] hover:bg-white hover:border-[#d4af37]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Clean Luxury Photo Grid - 2 cols on mobile for visual impact */}
        <div className="mt-8 sm:mt-10 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-5">
          {filteredPhotos.map((photo, index) => (
            <div
              key={photo.src + index}
              onClick={() => setSelectedImage({ src: photo.src, alt: photo.title })}
              className="group relative rounded-2xl overflow-hidden bg-[#0f172a] border border-[#e9e2d0] cursor-pointer shadow-sm hover:shadow-xl hover:border-[#d4af37]/60 transition-all duration-300"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-[#121c32]">
                <img
                  src={photo.src}
                  alt={photo.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Tag Top-Left */}
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[10px] font-bold tracking-wider uppercase text-[#0f172a] shadow">
                {photo.tag}
              </div>

              {/* Hover Overlay with Caption */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/95 via-[#0f172a]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
                <div className="flex items-center justify-between">
                  <div className="serif text-[15px] font-bold text-white leading-tight">
                    {photo.title}
                  </div>
                  <div className="w-7 h-7 rounded-full bg-[#d4af37] text-[#0f172a] flex items-center justify-center shrink-0 ml-2">
                    <Eye className="w-3.5 h-3.5" />
                  </div>
                </div>
                <div className="text-[11px] text-white/80 mt-1 line-clamp-2 leading-relaxed">
                  {photo.caption}
                </div>
              </div>

              {/* Bottom Minimal Title for Mobile & Accessibility */}
              <div className="p-3 bg-white border-t border-[#e9e2d0] flex items-center justify-between md:hidden">
                <span className="text-[12px] font-bold text-[#0f172a] truncate">{photo.title}</span>
                <span className="text-[11px] text-[#d4af37]">Ver foto</span>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery CTA Card */}
        <div className="mt-14 max-w-[900px] mx-auto rounded-[24px] bg-[#fbf8f0] border border-[#e9e2d0] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="text-center sm:text-left">
            <div className="serif text-[22px] sm:text-[24px] font-bold text-[#0f172a]">
              Quer provar esses drinks e ver o bar montado?
            </div>
            <p className="mt-1 text-[13px] sm:text-[14px] text-[#64748b]">
              Degustação gratuita de 20 minutos no nosso escritório em Vespasiano (R. Baruzeiro, 672 - Bairro Gávea II). Sem compromisso.
            </p>
          </div>
          <a
            href="#agenda"
            className="shrink-0 h-[48px] px-7 rounded-full bg-[#0f172a] text-white text-[12px] font-bold uppercase tracking-wide flex items-center gap-2 hover:bg-black transition shadow"
          >
            <span>Agendar Degustação</span>
            <ArrowRight className="w-4 h-4 text-[#d4af37]" />
          </a>
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <Lightbox
          isOpen={!!selectedImage}
          onClose={() => setSelectedImage(null)}
          imageSrc={selectedImage.src}
          imageAlt={selectedImage.alt}
        />
      )}
    </section>
  );
}
