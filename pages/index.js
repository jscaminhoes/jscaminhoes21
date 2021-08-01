/* eslint-disable jsx-a11y/iframe-has-title */
import { Heading } from '@chakra-ui/layout';
import { Grid, GridItem, Text, Button, Img, Box, Flex } from '@chakra-ui/react';
import Link from 'next/link';
import { EmailIcon, PhoneIcon } from '@chakra-ui/icons';
import Navigator from '../components/Navigator';
import { getAllCaminhoes } from '../lib/dato-cms';
import Card from '../components/Card';

export default function Home({ caminhoes }) {
  return (
    <>
      <Navigator />
      <Grid
        templateRows="1fr"
        templateColumns="1fr 1fr"
        m="0 auto"
        w="100%"
        maxWidth="1180px"
        h="380px"
        mt="56px"
        px={3}
      >
        <GridItem margin="auto 0" colSpan={['2', '1']}>
          <Heading fontWeight="700" mb="5">
            Compre seu caminhão usado aqui
          </Heading>
          <Text fontSize="sm" line-height="2rem">
            Somos uma empresa de venda de caminhoes usados, por otimos preços,
            localizada na região noroeste do estado do Rio Grande do Sul.
          </Text>
          <Button
            mt="5"
            bgColor="#FF3A2C"
            color="#fff"
            _hover={{ boxShadow: '0px 0px 19px -9px #000000' }}
            z-index="0"
          >
            <Link href="/estoque">Ver Estoque</Link>
          </Button>
        </GridItem>
        <GridItem my="auto" mr="0" ml="auto" display={['none', 'flex']}>
          <Img src="/caminhao.png" />
        </GridItem>
      </Grid>
      <Heading margin="0 auto" my={4} align={['start', 'center']}>
        Recentes
      </Heading>
      <Grid
        templateColumns={[
          '1fr',
          'repeat(2, 1fr)',
          'repeat(3, 1fr)',
          'repeat(4, 1fr)',
        ]}
        templateRows="1fr"
        gap="2"
        m="0 auto"
        w="100%"
        maxWidth="1180px"
        px={3}
      >
        {caminhoes.slice(0, 4).map((caminhao) => (
          <GridItem>
            <Card
              capaImagem={caminhao.capaImagem.url}
              titulo={caminhao.titulo}
              preco={caminhao.preco}
              km={caminhao.km}
              ano={caminhao.ano}
            />
          </GridItem>
        ))}
      </Grid>
      <Box color="#fff" bgColor="#FF3A2C" mt={6} as="section" id="sobre">
        <Heading mt="4" width="100%" align="center" mb="1">
          Sobre
        </Heading>
        <Grid
          m="0 auto"
          w="100%"
          maxWidth="1180px"
          templateRows="1fr "
          templateColumns="1fr 1fr"
          p="3"
          gap="2"
        >
          <GridItem fontSize="0.97m" colSpan={['2', '2', '1']} mb="2">
            <p>
              Somos uma empresa de venda e compra de caminhoes, localizada em
              Cerro largo, RS,
            </p>{' '}
            <br />
            <p>
              {' '}
              Maecenas sit amet libero quis nisl laoreet egestas quis sed enim.
              Suspendisse efficitur molestie dolor ac venenatis. Morbi at tortor
              quis libero commodo molestie non ut diam. Nam nibh velit, dapibus
              a faucibus quis, viverra nec odio. Mauris vehicula, lectus ac
              pharetra imperdiet, lectus eros scelerisque massa, sed venenatis
              sem leo eu nisi. Nam gravida sollicitudin tempus. Morbi tincidunt
              elit quis dolor semper dictum.
            </p>
          </GridItem>
          <GridItem mr="0" ml="auto" w="100%" colSpan={['2', '2', '1']}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d879.5189727031196!2d-54.7441321708079!3d-28.144177816376033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDA4JzM5LjAiUyA1NMKwNDQnMzYuOSJX!5e0!3m2!1spt-BR!2sbr!4v1627684308762!5m2!1spt-BR!2sbr"
              width="100%"
              height="450"
              loading="speed"
            />
          </GridItem>
        </Grid>
      </Box>
      <Box
        as="section"
        id="contato"
        m="0 auto"
        w="100%"
        maxWidth="1180px"
        px={3}
        pb={5}
      >
        <Heading margin="0 auto" align="center" my={3}>
          Contato
        </Heading>
        <Flex>
          <Box
            p={5}
            color="#fff"
            bgColor="#000"
            w="68px"
            h="68px"
            borderRadius="600px"
          >
            <EmailIcon w={7} h={7} m="auto" />
          </Box>
          <Flex margin="auto 0" ml="2">
            jsbecker@gpsnet.com
          </Flex>
        </Flex>
        <a href="https://api.whatsapp.com/send?phone=5555997166005">
          <Flex my={8}>
            <Flex bgColor="#1bd742" borderRadius="600px">
              {' '}
              <Img
                src="/whatsapp.jpg"
                w="68px"
                borderRadius="600px"
                h="68px"
                p="2"
                margin="auto"
              />
            </Flex>

            <Flex margin="auto 0" ml="2">
              55-997166005
            </Flex>
          </Flex>
        </a>
        <Flex>
          <Box
            p={5}
            color="#fff"
            bgColor="#000"
            w="68px"
            h="68px"
            borderRadius="600px"
          >
            <PhoneIcon w={7} h={7} m="auto" />
          </Box>
          <Flex margin="auto 0" ml="2">
            55-997166005
          </Flex>
        </Flex>
      </Box>
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