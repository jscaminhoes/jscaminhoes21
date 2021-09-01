/* eslint-disable eqeqeq */
/* eslint-disable react/destructuring-assignment */
import { Box, Button, Heading, Flex, Img } from '@chakra-ui/react';
import { FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';

export default function Card(caminhao) {
  const urlWhatsapp = `https://api.whatsapp.com/send?phone=5555997166005&text=Olá%20estou%20interresado%20no%20caminhão%20jscaminhoes.com/estoque/${caminhao.id}`;

  function NumberFormatter(n) {
    const numberFomatted = `${Math.floor(n / 1000)}.${
      n % 1000 == 0 ? '000' : n % 1000
    }`;
    return numberFomatted;
  }

  return (
    <Flex
      borderRadius="xl"
      w={['90%', '100%']}
      borderWidth="2px"
      overflow="hidden"
      h={caminhao.estoque ? '400px' : '380px'}
      _hover={{ boxShadow: '0px 0px 19px -9px #000000' }}
      flexDirection="column"
      key={caminhao.id}
      margin="0 auto"
    >
      <Box h="380px">
        <Link href={`/estoque/${caminhao.id}`}>
          <a>
            <Img src={caminhao.capaImagem.toString()} w="100%" h="210px" />
            <Box p={4} mt="0px" mb="auto">
              <Heading fontSize="18px" fontWeight="bold" h="45px">
                {caminhao.titulo}
              </Heading>
              <Box mt="2">
                <Box fontWeight="semibold" fontSize="17px">
                  R$ {NumberFormatter(caminhao.preco)}
                </Box>
                <Box fontSize="14px">
                  {caminhao.ano} | {caminhao.km}km
                </Box>
              </Box>
            </Box>
          </a>
        </Link>
      </Box>

      {caminhao.estoque && (
        <a href={urlWhatsapp}>
          <Flex flexDir="column">
            <Button
              w="100%"
              h="50px"
              borderRadius="0px"
              color="#fff"
              mt="auto"
              bgColor="#1bd742"
              _hover={{ backgroundColor: '#1bd742' }}
            >
              Converse por Whatsapp{' '}
              <Box ml="2">
                <FaWhatsapp fontSize="20px" />
              </Box>
            </Button>
          </Flex>
        </a>
      )}
    </Flex>
  );
}
