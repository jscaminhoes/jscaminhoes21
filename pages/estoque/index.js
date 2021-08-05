import {
  Grid,
  GridItem,
  Box,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ModalCloseButton,
  ModalFooter,
  ModalBody,
  useDisclosure,
  NumberInput,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInputField,
  NumberInputStepper,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { FaFilter } from 'react-icons/fa';
import Navigator from '../../components/Navigator';
// import { Heading } from '@chakra-ui/layout';
import { getAllCaminhoes } from '../../lib/dato-cms';
import Card from '../../components/Card';
import Footer from '../../components/Footer';

export default async function estoque({ caminhoes }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const anos = [];
  caminhoes.forEach((caminhao) => {
    anos.push(caminhao.ano);
  });
  console.log(anos);

  return (
    <>
      <Navigator />
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
                <MenuItem>Maior preço</MenuItem>
                <MenuItem>Menor preço</MenuItem>
                <MenuItem>Maior ano modelo</MenuItem>
                <MenuItem>Menor ano modelo</MenuItem>
              </MenuList>
            </Menu>
          </Box>
          <Box>
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
                  <NumberInput>
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </ModalBody>

                <ModalFooter>
                  <Button colorScheme="red" bgColor="#FF3A2C" mr={3}>
                    Salvar
                  </Button>
                  <Button onClick={onClose}>Cancelar</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </Box>
        </Flex>
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
                  key={caminhao.id}
                  estoque="true"
                />
              </GridItem>
            ))}
          </Grid>
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
