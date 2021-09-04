import fetchCmsAPI from '../lib/dato-cms';

export default function getCaminhao(id) {
  return fetchCmsAPI(`
    {
        caminhoe(filter: {
            id: { eq: ${id} }
          }) {
          titulo
          imagens {
            url(imgixParams: {fm: jpg, fit: crop, w: 708, h: 500})
          }
          updatedAt
          descricacao
          preco
          km
          cor
          ano
          tracao
          marca
          modelo
          id
        }
      }
    `);
}
