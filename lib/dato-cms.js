const API_URL = 'https://graphql.datocms.com/';
const API_TOKEN = process.env.DATOCMS_READ_ONLY_API_TOKEN;

async function fetchCmsAPI(query, { variables } = {}) {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${API_TOKEN}`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    throw new Error('Failed to fetch API');
  }

  return json.data;
}

export async function getAllCaminhoes() {
  const data = await fetchCmsAPI(`
    
  {
    allCaminhoes {
      id
      titulo
      imagens {
        url(imgixParams: {fm: jpg, fit: crop, w: 120, h: 120})
      }
      capaImagem {
        url(imgixParams: {fm: jpg, fit: crop, w: 300, h: 220})
      }
      updatedAt
      descricacao
      preco
      km
      cor
      ano
      tracao

    }
  }
  
`);

  return data.allCaminhoes;
}

export default { getAllCaminhoes };
