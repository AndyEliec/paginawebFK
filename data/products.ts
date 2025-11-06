
import { Product } from '../types';

export const products: Product[] = [
  {
    id: 'p1',
    name: 'Seda Salvaje Marfil',
    reference: 'SS-MAR-001',
    category: 'Seda',
    composition: '100% Seda Natural',
    width: '140 cm',
    recommendedUse: 'Vestidos de novia, alta costura, decoración de lujo.',
    images: {
      thumbnail: 'https://picsum.photos/seed/seda1/400/400',
      gallery: [
        'https://picsum.photos/seed/seda1-detail1/800/1200',
        'https://picsum.photos/seed/seda1-detail2/800/1200',
        'https://picsum.photos/seed/seda1-detail3/800/1200',
      ],
    },
  },
  {
    id: 'p2',
    name: 'Lino Rústico Arena',
    reference: 'LR-ARE-002',
    category: 'Lino',
    composition: '70% Lino, 30% Viscosa',
    width: '150 cm',
    recommendedUse: 'Cortinas, mantelería, ropa de verano.',
    images: {
      thumbnail: 'https://picsum.photos/seed/lino2/400/400',
      gallery: [
        'https://picsum.photos/seed/lino2-detail1/800/1200',
        'https://picsum.photos/seed/lino2-detail2/800/1200',
        'https://picsum.photos/seed/lino2-detail3/800/1200',
      ],
    },
  },
  {
    id: 'p3',
    name: 'Algodón Pima Celeste',
    reference: 'AP-CEL-003',
    category: 'Algodón',
    composition: '100% Algodón Pima Peruano',
    width: '160 cm',
    recommendedUse: 'Camisería, ropa de bebé, sábanas premium.',
    images: {
      thumbnail: 'https://picsum.photos/seed/algodon3/400/400',
      gallery: [
        'https://picsum.photos/seed/algodon3-detail1/800/1200',
        'https://picsum.photos/seed/algodon3-detail2/800/1200',
        'https://picsum.photos/seed/algodon3-detail3/800/1200',
      ],
    },
  },
  {
    id: 'p4',
    name: 'Terciopelo de Seda Negro',
    reference: 'TS-NEG-004',
    category: 'Terciopelo',
    composition: '82% Viscosa, 18% Seda',
    width: '112 cm',
    recommendedUse: 'Vestidos de noche, tapicería de lujo, cojines.',
    images: {
      thumbnail: 'https://picsum.photos/seed/terciopelo4/400/400',
      gallery: [
        'https://picsum.photos/seed/terciopelo4-detail1/800/1200',
        'https://picsum.photos/seed/terciopelo4-detail2/800/1200',
        'https://picsum.photos/seed/terciopelo4-detail3/800/1200',
      ],
    },
  },
  {
    id: 'p5',
    name: 'Jacquard Floral Dorado',
    reference: 'JF-DOR-005',
    category: 'Jacquard',
    composition: '55% Poliéster, 45% Algodón',
    width: '145 cm',
    recommendedUse: 'Tapicería, cortinajes, prendas estructuradas.',
    images: {
      thumbnail: 'https://picsum.photos/seed/jacquard5/400/400',
      gallery: [
        'https://picsum.photos/seed/jacquard5-detail1/800/1200',
        'https://picsum.photos/seed/jacquard5-detail2/800/1200',
        'https://picsum.photos/seed/jacquard5-detail3/800/1200',
      ],
    },
  },
  {
    id: 'p6',
    name: 'Lana Merino Gris Marengo',
    reference: 'LM-GRI-006',
    category: 'Lana',
    composition: '100% Lana Merino Extrafina',
    width: '150 cm',
    recommendedUse: 'Trajes de sastre, abrigos, faldas de invierno.',
    images: {
      thumbnail: 'https://picsum.photos/seed/lana6/400/400',
      gallery: [
        'https://picsum.photos/seed/lana6-detail1/800/1200',
        'https://picsum.photos/seed/lana6-detail2/800/1200',
        'https://picsum.photos/seed/lana6-detail3/800/1200',
      ],
    },
  },
];
