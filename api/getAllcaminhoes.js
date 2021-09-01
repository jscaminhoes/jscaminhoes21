import fetchCmsAPI from '../lib/dato-cms';

export async function getAllCaminhoes() {
  const data = await fetchCmsAPI(`
    {
      allCaminhoes {
        id
        titulo      
        capaImagem {
          url(imgixParams: {fm: jpg, fit: crop, w: 300, h: 220})
        }        
        preco
        km
        ano
      }
    }
  `);

  return data.allCaminhoes;
}

export default getAllCaminhoes;
