import { Flex, Heading, Text } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/react';
import Link from 'next/link';
import Footer from './Footer';
import Navigator from './Navigator';

export default function Error404() {
  return (
    <>
      <Navigator />
      <Flex m="auto" w="90vw" h="80vh" align="center">
        <Flex m="auto" flexDir="column">
          {' '}
          <Heading m="auto">Erro 404</Heading>
          <Text my="auto" mx="2">
            Essa Pagina não foi encontrada
          </Text>
          <Button colorScheme="red" m="auto">
            <Link href="/">Voltar para a tela inicial</Link>
          </Button>
        </Flex>
      </Flex>

      <Footer />
    </>
  );
}
