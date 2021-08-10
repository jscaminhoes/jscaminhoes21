/* eslint-disable jsx-a11y/iframe-has-title */

import Link from 'next/link';
import {
  EmailIcon,
  PhoneIcon,
  HamburgerIcon,
  CloseIcon,
} from '@chakra-ui/icons';
import { Stack, Heading } from '@chakra-ui/layout';
import {
  Input,
  InputGroup,
  InputRightAddon,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Grid,
  GridItem,
  Text,
  Img,
  Box,
  Flex,
} from '@chakra-ui/react';
import { useContext } from 'react';
import { getAllCaminhoes } from '../lib/dato-cms';
import Card from '../components/Card';
import Footer from '../components/Footer';
import InputValueContext from '../context/InputValueContext';

export default function Home() {
  async function getCaminhoes() {
    const caminhoes = await getAllCaminhoes();
    return caminhoes;
  }
  const caminhoes = getCaminhoes();
  console.log(caminhoes);

  const { valueInput, setValueInput } = useContext(InputValueContext);
  return (
    <>
      <Box bgColor="#FF3A2C" position="fixed" w="100%" className="nav">
        <Flex
          py={1}
          justifyContent="space-between"
          alignItems="center"
          m="0 auto"
          w="100%"
          maxWidth="1180px"
          px={3}
          h="56px"
          focusBorderColor="#fff"
        >
          <img src="/favicon.ico" alt="JS caminhões" width="50" height="50" />
          <Stack w="60%">
            <InputGroup as="form">
              <Input
                type="text"
                width="100%"
                placeholder="Buscar Caminhões"
                color="#000"
                focusBorderColor="#fff"
                errorBorderColor="red"
                bgColor="#fff"
                value={valueInput}
                onChange={(e) => setValueInput(e.target.value)}
              />
              <InputRightAddon mr="0" bgColor="#fff" margin="0" padding="0">
                <Button type="link" bgColor="#fff" margin="0">
                  {' '}
                  <Link href="/estoque">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 0 24 24"
                      width="24px"
                      fill="#000000"
                    >
                      <path d="M0 0h24v24H0V0z" fill="none" />
                      <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                    </svg>
                  </Link>
                </Button>
              </InputRightAddon>
            </InputGroup>
          </Stack>

          <Flex
            color="white"
            fontSize={['sm', 'sm', '1.05rem']}
            display={['none', 'none', 'none', 'flex']}
          >
            <Box>
              {' '}
              <Link href="/#sobre">Sobre</Link>
            </Box>
            <Box mx="2">
              {' '}
              <Link href="/estoque">Estoque</Link>
            </Box>
            <Box>
              {' '}
              <Link href="/#contato">Contato</Link>
            </Box>
            <Box ml={2}>
              {' '}
              <Link href="/">Home</Link>
            </Box>
          </Flex>
          <Flex display={['flex', 'flex', 'flex', 'none']}>
            <Menu>
              {({ isOpen }) => (
                <>
                  <MenuButton
                    isActive={isOpen}
                    aria-label="Navegação"
                    variant="outline"
                    _hover={{ fontWeight: 'bold' }}
                  >
                    {isOpen && <CloseIcon color="#fff" fontSize="xl" />}
                    {!isOpen && <HamburgerIcon color="#fff" fontSize="2xl" />}
                  </MenuButton>
                  <MenuList>
                    <MenuItem>
                      {' '}
                      <Link href="/#sobre">Sobre</Link>
                    </MenuItem>
                    <MenuItem>
                      <Link href="/estoque">Estoque</Link>
                    </MenuItem>
                    <MenuItem>
                      <Link href="/#contato">Contato</Link>
                    </MenuItem>
                    <MenuItem>
                      <Link href="/">Home</Link>
                    </MenuItem>
                  </MenuList>
                </>
              )}
            </Menu>
          </Flex>
        </Flex>
      </Box>
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

          <span className="button-home">
            <Link href="/estoque" className="button-home">
              Ver Estoque
            </Link>
          </span>
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
        {/* {caminhoes.slice(0, 4).map((caminhao) => (
          <GridItem>
            <Card
              capaImagem={caminhao.capaImagem.url}
              titulo={caminhao.titulo}
              preco={caminhao.preco}
              km={caminhao.km}
              ano={caminhao.ano}
              estoque={false}
              id={caminhao.id}
            />
          </GridItem>
        ))} */}
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
              Cerro largo, RS
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
        pb={12}
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
            <EmailIcon w={7} h={7} />
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
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const caminhoes = await getAllCaminhoes();
  console.log(caminhoes);
  return {
    props: {
      caminhoes,
    },
    revalidate: 180,
  };
}
