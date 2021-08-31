import {
  Grid,
  GridItem,
  Img,
  Box,
  Flex,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react';
import Link from 'next/link';
import { Heading } from '@chakra-ui/layout';
import { EmailIcon, PhoneIcon } from '@chakra-ui/icons';

export default function Footer() {
  return (
    <Flex bgColor="#FF3A2C" color="#fff" p="5">
      <Box m="0 auto" w="100%" maxWidth="1180px" p="3">
        <Heading fontSize="18px" mb="2">
          JS Caminhões
        </Heading>
        <Grid templateColumns="1fr 1fr" templateRows="1fr">
          <GridItem mr="4">
            <UnorderedList styleType="none" textDecoration="underline" mt="0">
              <ListItem mb="2.5">
                <Link href="/estoque">Estoque</Link>
              </ListItem>
              <ListItem mb="2.5">
                <Link href="/#sobre">Sobre</Link>
              </ListItem>
              <ListItem mb="2.5">
                <Link href="/#contato">Contato</Link>
              </ListItem>
              <ListItem>
                <Link href="/"> Home</Link>
              </ListItem>
            </UnorderedList>
          </GridItem>
          <GridItem fontSize="0.95rem">
            {' '}
            <Flex>
              <Flex
                w="40px"
                h="40px"
                bgColor="#000"
                borderRadius="600px"
                alignItems="center"
                justifyContent="center"
              >
                <EmailIcon w={5} h={5} />
              </Flex>

              <Flex margin="auto 0" ml="2">
                jsbecker@gpsnet.com
              </Flex>
            </Flex>
            <a href="https://api.whatsapp.com/send?phone=5555997166005">
              <Flex my="5px">
                <Flex bgColor="#1bd742" borderRadius="600px">
                  {' '}
                  <Img
                    src="/whatsapp.jpg"
                    borderRadius="600px"
                    w="40px"
                    h="40px"
                    p="1"
                    margin="auto"
                  />
                </Flex>

                <Flex margin="auto 0" ml="2">
                  55-997166005
                </Flex>
              </Flex>
            </a>
            <Flex>
              <Flex
                p={5}
                color="#fff"
                bgColor="#000"
                w="40px"
                h="40px"
                borderRadius="600px"
                alignItems="center"
                justifyContent="center"
              >
                <PhoneIcon w={5} h={5} />
              </Flex>
              <Flex margin="auto 0" ml="2">
                55-997166005
              </Flex>
            </Flex>
          </GridItem>
        </Grid>
      </Box>
    </Flex>
  );
}
