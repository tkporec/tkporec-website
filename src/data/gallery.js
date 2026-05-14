const CLOUD_NAME = 'dcz2trghi'

export const galleryImages = [
  { id: '697235480_122233991162280053_4855222994170562556_n_gkfete', alt: 'Utrka TK Poreč' },
  { id: '687034888_122233234760280053_3167999012134931366_n_a0dqtv', alt: 'Utrka TK Poreč' },
  { id: '694331847_122233958216280053_5171756751700988271_n_w4zd2y', alt: 'Utrka TK Poreč' },
  { id: '694680521_122233958204280053_3151814047511891473_n_j8qual', alt: 'Utrka TK Poreč' },
  { id: '696249302_122233958222280053_516669655815961040_n_eynxfd', alt: 'Utrka TK Poreč' },
  { id: '686037906_122233234766280053_5061107559775340707_n_imuikx', alt: 'Utrka TK Poreč' },
  { id: '696737850_122233991294280053_1743499492699327477_n_aasgga', alt: 'Utrka TK Poreč' },
]

export function thumbUrl(id) {
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/w_600,h_400,c_fill,q_auto,f_auto/${id}`
}

export function fullUrl(id) {
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/q_auto,f_auto/${id}`
}
