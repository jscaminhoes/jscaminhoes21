import {
  Grid,
  GridItem,
  Box,
  Heading,
  Button,
  Flex,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useToast,
  Table,
  Tbody,
  Tr,
  Td,
  Th,
  Text,
} from '@chakra-ui/react';
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { Form } from '@unform/web';
import getCaminhao from '../../api/getCaminhao';
import getAllcaminhoes from '../../api/getAllCaminhoes';
import Navigator from '../../components/Navigator';
import Slider from '../../components/Slider';
import InputMail from '../../components/InputMail';
import TextAreaMail from '../../components/TextAreaMail';
import Footer from '../../components/Footer';
import Error404 from '../../components/Erro404';

export default function CaminhaoPage({ caminhao }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  function NumberFormatter(n) {
    const numberFomatted = `${Math.floor(n / 1000)}.${
      n % 1000 === 0 ? '000' : n % 1000
    }`;
    return numberFomatted;
  }

  function sendMail(titulo, cliente, contato, mensagem, caminhaoId) {
    fetch('/api/SendMail', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        titulo,
        cliente,
        contato,
        mensagem,
        caminhaoId,
      }),
    })
      .then(() =>
        toast({
          title: 'Sucesso',
          description: 'Sua mensagem foi enviada aguarde retorno',
          status: 'success',
          duration: 9000,
          isClosable: true,
        }),
      )
      .catch(() =>
        toast({
          title: 'Erro',
          description:
            'Sua mensagem não foi enviada tente novamente mais tarde',
          status: 'error',
          duration: 9000,
          isClosable: true,
        }),
      );
  }
  if (!caminhao) {
    return <Error404 />;
  }

  return (
    <>
      <Navigator />
      <Box m="0 auto" w="100%" maxWidth="1180px" px={3} mt="86px">
        <Grid templateRows="1fr" templateColumns="repeat(10, 1fr)" gap="3">
          <GridItem colSpan={['10', '10', '6']}>
            <Slider imgs={caminhao.imagens} />
          </GridItem>
          <GridItem colSpan={['10', '10', '4']}>
            <Box>
              {caminhao.ano} | {caminhao.km} Km
            </Box>
            <Heading fontSize="28px">{caminhao.titulo}</Heading>
            <Heading fontWeight="300" mt="5">
              {' '}
              R$ {NumberFormatter(caminhao.preco)}
            </Heading>
            <Flex mt="5" w="100%">
              <Box w="50%" mr="2">
                {' '}
                <a
                  href={`https://api.whatsapp.com/send?phone=5555997166005&text=Olá%20estou%20interresado%20no%20caminhão%20jscaminhoes.com/estoque/${caminhao.id}`}
                >
                  <Flex flexDir="column">
                    <Button
                      w="100%"
                      h="50px"
                      color="#fff"
                      mt="auto"
                      bgColor="#1bd742"
                      _hover={{
                        backgroundColor: '#1bd742',
                        boxShadow: '2xl',
                      }}
                      p="3"
                    >
                      Whatsapp{' '}
                      <Box ml="2">
                        <FaWhatsapp fontSize="20px" />
                      </Box>
                    </Button>
                  </Flex>
                </a>
              </Box>

              <Button
                onClick={onOpen}
                w="50%"
                h="50px"
                color="#fff"
                mt="auto"
                bgColor="gray"
                _hover={{ boxShadow: '2xl' }}
              >
                Mensagem
                <Box ml="2">
                  <FaEnvelope fontSize="20px" />
                </Box>
              </Button>
            </Flex>
          </GridItem>
        </Grid>
        <Heading my="3" size="lg">
          Caracteristícas Principais
        </Heading>
        <Box borderRadius="20px" overflow="hidden" border="1px solid #ccc">
          {' '}
          <Table variant="striped">
            <Tbody>
              {caminhao.tracao && (
                <Tr>
                  <Th> Traçâo</Th>
                  <Td>{caminhao.tracao}</Td>
                </Tr>
              )}

              {caminhao.km && (
                <Tr>
                  <Th> Km rodados</Th>
                  <Td>{caminhao.km} km</Td>
                </Tr>
              )}
              {caminhao.modelo && (
                <Tr>
                  <Th> Modelo</Th>
                  <Td>{caminhao.modelo}</Td>
                </Tr>
              )}
              {caminhao.marca && (
                <Tr>
                  <Th> Marca</Th>
                  <Td>{caminhao.marca}</Td>
                </Tr>
              )}
              {caminhao.cor && (
                <Tr>
                  <Th> Cor</Th>
                  <Td>{caminhao.cor}</Td>
                </Tr>
              )}
            </Tbody>
          </Table>
        </Box>
        <Heading my="3" size="lg">
          Descrição
        </Heading>
        <Text mb="3">{caminhao.descricacao}</Text>
      </Box>
      <Footer />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <Form
            onSubmit={(data, { reset }) => {
              onClose();
              sendMail(
                data.titulo,
                data.cliente,
                data.contato,
                data.mensagem,
                caminhao.id,
              );
              reset();
            }}
          >
            <ModalHeader>Enviar mensagem</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <InputMail
                placeholder="Titulo da Mensagem"
                required
                name="titulo"
                variant="filled"
              />
              <InputMail
                placeholder="Contato"
                required
                name="contato"
                variant="filled"
                mt="2"
              />
              <InputMail
                placeholder="Nome"
                required
                name="cliente"
                variant="filled"
                mt="2"
              />
              <TextAreaMail
                placeholder="Mensagem"
                required
                name="mensagem"
                variant="filled"
                mt="2"
                h="250px"
              />
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="red" mr={3} type="submit">
                Enviar
              </Button>
              <Button variant="ghost" onClick={onClose}>
                Cancelar
              </Button>
            </ModalFooter>
          </Form>
        </ModalContent>
      </Modal>
    </>
  );
}

export async function getStaticProps({ params }) {
  const { caminhoe } = await getCaminhao(params.id);
  if (caminhoe === undefined) {
    return { notFound: true };
  }
  return { props: { caminhao: caminhoe }, revalidate: 180 };
}

export async function getStaticPaths() {
  const caminhoes = await getAllcaminhoes();
  console.log(caminhoes);
  const paths = caminhoes.map(
    (caminhao) => caminhao && { params: { id: caminhao.id } },
  );
  return { paths, fallback: true };
}
