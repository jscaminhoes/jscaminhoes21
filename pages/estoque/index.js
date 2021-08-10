/* eslint-disable default-case */
import {
  Grid,
  GridItem,
  Box,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Input,
  InputGroup,
  InputRightAddon,
} from '@chakra-ui/react';
import { ChevronDownIcon, HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { useContext, useEffect, useState } from 'react';

import { Stack, Heading } from '@chakra-ui/layout';
import Link from 'next/link';
import InputValueContext from '../../context/InputValueContext';
import { getAllCaminhoes } from '../../lib/dato-cms';
import Card from '../../components/Card';
import Footer from '../../components/Footer';

export default function estoque({ caminhoes }) {
  const [data, setData] = useState(caminhoes);
  const [filter, setFilter] = useState();
  const [results, setResults] = useState(caminhoes);
  const { valueInput, setValueInput } = useContext(InputValueContext);

  // Ordenação
  useEffect(() => {
    switch (filter) {
      case '+P': {
        setData(
          [...data].sort((a, b) => {
            const c = a.preco < b.preco ? 1 : -1;
            return c;
          }),
        );
        break;
      }
      case '-P': {
        setData(
          [...data].sort((a, b) => {
            const c = a.preco > b.preco ? 1 : -1;
            return c;
          }),
        );
        break;
      }
      case '+A': {
        setData(
          [...data].sort((a, b) => {
            const c = a.ano < b.ano ? 1 : -1;
            return c;
          }),
        );
        break;
      }
      case '-A': {
        setData(
          [...data].sort((a, b) => {
            const c = a.ano > b.ano ? 1 : -1;
            return c;
          }),
        );
        break;
      }
    }
  }, [filter]);

  // pesquisa input
  useEffect(() => {
    switch (filter) {
      case '+P': {
        const prePreResults = [...results].sort((a, b) => {
          const c = a.preco < b.preco ? 1 : -1;
          return c;
        });
        const preResult = [];
        prePreResults.map((caminhao) => preResult.push(caminhao.item));
        setData(preResult);

        break;
      }
      case '-P': {
        const prePreResults = [...results].sort((a, b) => {
          const c = a.preco > b.preco ? 1 : -1;
          return c;
        });
        const preResult = [];
        prePreResults.map((caminhao) => preResult.push(caminhao.item));
        setData(preResult);

        break;
      }
      case '+A': {
        const prePreResults = [...results].sort((a, b) => {
          const c = a.ano < b.ano ? 1 : -1;
          return c;
        });
        const preResult = [];
        prePreResults.map((caminhao) => preResult.push(caminhao.item));
        setData(preResult);
        break;
      }
      case '-A': {
        const prePreResults = [...results].sort((a, b) => {
          const c = a.ano > b.ano ? 1 : -1;
          return c;
        });
        const preResult = [];
        prePreResults.map((caminhao) => preResult.push(caminhao.item));
        setData(preResult);
        break;
      }
      default: {
        if (caminhoes === results) {
          setData(results);
        } else {
          const preResult = [];
          results.map((caminhao) => preResult.push(caminhao.item));
          setData(preResult);
        }

        break;
      }
    }
  }, [results]);

  return (
    <>
      {' '}
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
            <InputGroup>
              <Input
                type="text"
                width="100%"
                placeholder="Buscar Caminhões"
                color="#000"
                focusBorderColor="#fff"
                errorBorderColor="red"
                bgColor="#fff"
                value={valueInput}
                onChange={async (e) => {
                  const { value } = e.currentTarget;
                  setValueInput(value);
                  // Dynamically load fuse.js
                  const Fuse = (await import('fuse.js')).default;
                  const fuse = new Fuse(caminhoes, {
                    keys: ['titulo', 'descricao'],
                  });
                  console.log('tá dando mt merda');
                  // eslint-disable-next-line no-unused-expressions
                  value === ''
                    ? setData(caminhoes)
                    : setResults(fuse.search(value));
                }}
              />
              <InputRightAddon mr="0" bgColor="#fff">
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
      <Box m="0 auto" w="100%" maxWidth="1180px" px={3} mt="56px" mb="6">
        <Flex
          justifyContent="space-between"
          h="50px"
          my="auto"
          alignItems="center"
          px="1"
        >
          <Box>
            <Menu isLazy>
              <MenuButton>
                Ordenar Por <ChevronDownIcon />{' '}
              </MenuButton>
              <MenuList>
                <MenuItem onClick={() => setFilter('+P')}>Maior preço</MenuItem>
                <MenuItem onClick={() => setFilter('-P')}>Menor preço</MenuItem>
                <MenuItem onClick={() => setFilter('+A')}>
                  Maior ano modelo
                </MenuItem>
                <MenuItem onClick={() => setFilter('-A')}>
                  Menor ano modelo
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
          {/* <Box>
            <Button
              onClick={onOpen}
              variant="outline"
              fontWeight="400"
              z-index="-1"
            >
              Filtrar <FaFilter />
            </Button>

            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Defina seu filtro</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                  <FormLabel>Defina o ano minimo</FormLabel>
                  <NumberInput max={maxAnos} min={minAnos}>
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>

                  <FormLabel mt="2">Defina o ano maximo</FormLabel>
                  <NumberInput max={maxAnos} min={minAnos}>
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </ModalBody>

                <ModalFooter>
                  <Button
                    colorScheme="red"
                    bgColor="#FF3A2C"
                    mr={3}
                    onClick={onClose}
                  >
                    Salvar
                  </Button>
                  <Button onClick={onClose}>Cancelar</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </Box> */}
        </Flex>

        <Box>
          <Grid
            templateColumns={[
              '1fr',
              'repeat(2, 1fr)',
              'repeat(2, 1fr)',
              'repeat(3, 1fr)',
              'repeat(4, 1fr)',
            ]}
            gap="2"
          >
            {data.map((caminhao) => (
              <GridItem>
                <Card
                  capaImagem={caminhao.capaImagem.url}
                  titulo={caminhao.titulo}
                  preco={caminhao.preco}
                  km={caminhao.km}
                  ano={caminhao.ano}
                  key={caminhao.id}
                  estoque="true"
                />
              </GridItem>
            ))}
          </Grid>
          {data.length === 0 && (
            <Flex h="70vh" align="center">
              <Heading color="black" mx="auto">
                Nenhum caminhão foi encontrado
              </Heading>
            </Flex>
          )}
        </Box>
      </Box>
      <Footer />
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

// "Button,
// Modal,
// ModalContent,
// ModalHeader,
// ModalOverlay,
// ModalCloseButton,
// ModalFooter,
// ModalBody,
// useDisclosure,
// NumberInput,
// NumberDecrementStepper,
// NumberIncrementStepper,
// NumberInputField,
// NumberInputStepper,
// FormLabel,
// const { isOpen, onOpen, onClose } = useDisclosure();

// define os anos usados do filtar
// const anos = [];
// data.forEach((caminhao) => {
//   anos.push(caminhao.ano);
// });
// const minAnos = Math.min(...anos);
// const maxAnos = Math.max(...anos);
