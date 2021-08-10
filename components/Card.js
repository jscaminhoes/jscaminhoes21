/* eslint-disable eqeqeq */
/* eslint-disable react/destructuring-assignment */
import { Box, Button, Heading, Img, Flex } from '@chakra-ui/react';
import { FaWhatsapp } from 'react-icons/fa';

export default function Card(caminhao) {
  const urlWhatsapp = `https://api.whatsapp.com/send?phone=5555997166005&text=ola%20estou%20interresado%20no%20caminhão%20${caminhao.titulo.replace(
    '',
    '%20',
  )}`;
  return (
    <Flex
      borderRadius="xl"
      w={['90%', '100%']}
      borderWidth="2px"
      overflow="hidden"
      h={caminhao.estoque ? '400px' : '370px'}
      _hover={{ boxShadow: '0px 0px 19px -9px #000000' }}
      flexDirection="column"
      key={caminhao.key}
      maxWidth="350px"
    >
      <Img src={caminhao.capaImagem} w="100%" h="210px" />
      <Box p={4} mt="0px" mb="auto">
        <Heading fontSize="18px" fontWeight="bold">
          {caminhao.titulo}
        </Heading>
        <Box mt="2">
          <Box fontWeight="semibold" fontSize="17px">
            R$ {caminhao.preco}
          </Box>
          <Box fontSize="14px">
            {caminhao.ano} | {caminhao.km}km
          </Box>
        </Box>
      </Box>

      {caminhao.estoque ? (
        <a href={urlWhatsapp} className="button-whatsapp">
          <Flex flexDir="column">
            <Button
              bgColor="#1bd742"
              className="button"
              w="100%"
              h="50px"
              borderRadius="0px"
              color="#fff"
              mt="auto"
            >
              Converse por Whatsapp{' '}
              <Box ml="2">
                <FaWhatsapp fontSize="20px" />
              </Box>
            </Button>
          </Flex>
        </a>
      ) : (
        ''
      )}
    </Flex>
  );
}
