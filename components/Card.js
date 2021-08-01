/* eslint-disable react/destructuring-assignment */
import { Box, Heading, Img } from '@chakra-ui/react';

export default function Card(caminhao) {
  return (
    <Box
      borderRadius="xl"
      w={['90%', '100%']}
      borderWidth="2px"
      overflow="hidden"
      h={['370']}
      _hover={{ boxShadow: '0px 0px 19px -9px #000000' }}
      margin="0 auto"
    >
      <Img src={caminhao.capaImagem} w="100%" h="230px" />
      <Box p={4} my="auto">
        <Heading fontSize="19px" fontWeight="bold">
          {caminhao.titulo}
        </Heading>
        <Box mt={2}>
          <Box fontWeight="semibold" fontSize="17px">
            R$ {caminhao.preco}
          </Box>
          <Box fontSize="14px">
            {caminhao.ano} | {caminhao.km}km
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
