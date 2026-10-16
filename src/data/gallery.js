const CLOUD_NAME = 'dcz2trghi'

export const galleryImages = [
  { id: '697235480_122233991162280053_4855222994170562556_n_gkfete', alt: 'Utrka TK Poreč' },
  { id: '687034888_122233234760280053_3167999012134931366_n_a0dqtv', alt: 'Utrka TK Poreč' },
  { id: '694331847_122233958216280053_5171756751700988271_n_w4zd2y', alt: 'Utrka TK Poreč' },
  { id: '694680521_122233958204280053_3151814047511891473_n_j8qual', alt: 'Utrka TK Poreč' },
  { id: '696249302_122233958222280053_516669655815961040_n_eynxfd', alt: 'Utrka TK Poreč' },
  { id: '686037906_122233234766280053_5061107559775340707_n_imuikx', alt: 'Utrka TK Poreč' },
  { id: '696737850_122233991294280053_1743499492699327477_n_aasgga', alt: 'Utrka TK Poreč' },
  { src: 'damir trail.jpg', alt: 'Damir Jurišević - Ultra Trail Učka' },
  { src: 'hyrox.jpg', alt: 'Hybrid Race Rijeka' },
  { src: '719217534_122237381702280053_5391602008341654666_n.jpg', alt: 'TK Poreč' },
  { src: '731059186_122240097998280053_6975411754764927147_n.jpg', alt: 'TK Poreč' },
  { src: '735563420_122240097992280053_3402909315574615206_n.jpg', alt: 'TK Poreč' },
  { src: '735981653_122240098004280053_2493978116604284089_n.jpg', alt: 'TK Poreč' },
  { src: '763239917_122244462332280053_6272576641830326043_n.jpg', alt: 'TK Poreč' },
  { src: '763925819_122244462326280053_9071921000682316570_n.jpg', alt: 'TK Poreč' },
  { src: 'viber_image_2026-07-25_09-53-38-645.jpg', alt: 'TK Poreč' },
  { src: '809876215_122249708666280053_3437155896538558152_n.jpg', alt: 'TK Poreč – triatlon Zagreb' },
  { src: '790865840_17960961909192176_2548234091867924411_n.jpg', alt: 'Aquathlon Porečki Delfin 2026' },
  { src: '825292261_122251815584280053_1959449217411784329_n.jpg', alt: 'Dynamic Race Pula – 3. mjesto u parovima' },
  { src: '825292371_122251815602280053_3774812048002981619_n.jpg', alt: 'Zadarhalf 2026 – TK Poreč' },
  { src: '825292734_122251815590280053_8394438350900032746_n.jpg', alt: 'Zadarhalf 2026 – ekipni viceprvaci Hrvatske' },
]

export function thumbUrl(img) {
  if (img.src) return `/gallery/${img.src}`
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/w_600,h_400,c_fill,q_auto,f_auto/${img.id}`
}

export function fullUrl(img) {
  if (img.src) return `/gallery/${img.src}`
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/q_auto,f_auto/${img.id}`
}
