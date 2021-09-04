import { useContext } from 'react';
import { useRouter } from 'next/router';
import {
  Input,
  InputGroup,
  InputRightAddon,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Box,
  Flex,
  Text,
} from '@chakra-ui/react';
import Link from 'next/link';
import { Stack } from '@chakra-ui/layout';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import InputValueContext from '../context/InputValueContext';

export default function Navigator() {
  const { valueInput, setValueInput } = useContext(InputValueContext);
  const router = useRouter();
  return (
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
        <Flex alignItems="center" h="100%" color="#fff" fontWeight="bold">
          {' '}
          <Text>Becker</Text>
          <Text display={['none', 'inline']} ml="1" fontWeight="normal">
            {' '}
            caminhões
          </Text>
        </Flex>
        <Stack w="60%">
          <InputGroup
            as="form"
            onSubmit={(e) => {
              e.preventDefault();
              router.push({ pathname: '/estoque' });
            }}
          >
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
              <Button type="submit" bgColor="#fff" margin="0">
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
          <Box ml={2}>
            {' '}
            <Link href="/">Home</Link>
          </Box>
          <Box mx="2">
            {' '}
            <Link href="/estoque">Estoque</Link>
          </Box>
          <Box>
            {' '}
            <Link href="/#sobre">Sobre</Link>
          </Box>
          <Box>
            {' '}
            <Link href="/#contato">Contato</Link>
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
                    <Link href="/">Home</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link href="/estoque">Estoque</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link href="/#contato">Contato</Link>
                  </MenuItem>
                  <MenuItem>
                    {' '}
                    <Link href="/#sobre">Sobre</Link>
                  </MenuItem>
                </MenuList>
              </>
            )}
          </Menu>
        </Flex>
      </Flex>
    </Box>
  );
}
