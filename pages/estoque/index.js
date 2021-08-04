import { Grid, GridItem, Box } from '@chakra-ui/react';
import Navigator from '../../components/Navigator';
// import { Heading } from '@chakra-ui/layout';
import { getAllCaminhoes } from '../../lib/dato-cms';
import Card from '../../components/Card';
// import Footer from '../../components/Footer';

export default function estoque({ caminhoes }) {
  return (
    <>
      <Navigator />
      <Box m="0 auto" w="100%" maxWidth="1180px" px={3} mb="9">
        <Box mt="56px">
          <Box>Ordenar</Box>
          <Box>Filtrar</Box>
        </Box>
        <Box>
          <Grid
            templateColumns={[
              '1fr',
              'repeat(2, 1fr)',
              'repeat(3, 1fr)',
              'repeat(4, 1fr)',
            ]}
            gap="2"
          >
            {caminhoes.map((caminhao) => (
              <GridItem>
                <Card
                  capaImagem={caminhao.capaImagem.url}
                  titulo={caminhao.titulo}
                  preco={caminhao.preco}
                  km={caminhao.km}
                  ano={caminhao.ano}
                  estoque="true"
                />
              </GridItem>
            ))}
          </Grid>
        </Box>
      </Box>
      d
    </>
  );
}

export async function getStaticProps() {
  const caminhoes = await getAllCaminhoes();
  return {
    props: {
      caminhoes,
    },
    revalidate: 180,
  };
}
