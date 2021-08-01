import { Box, Flex, Stack } from '@chakra-ui/layout';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import {
  Input,
  InputGroup,
  InputRightAddon,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import Link from 'next/link';

export default function Navigator() {
  // #CC2E23, #FF3A2C,  #C42521 opções de cor

  return (
    <>
      <Box bgColor="#FF3A2C" position="fixed" w="100%" z-index="auto">
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
    </>
  );
}