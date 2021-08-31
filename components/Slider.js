/* eslint-disable no-new */
/* eslint-disable jsx-a11y/alt-text */
// https://www.youtube.com/watch?v=cX0N3TNxumw
// https://www.youtube.com/watch?v=SGwHpzgqzgk&t
import { Box, Button, Flex, Img } from '@chakra-ui/react';
import { useRef } from 'react';
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';

export default function Slider({ imgs }) {
  const slider = useRef(null);
  const optionsSlider = useRef(null);

  return (
    <>
      <Flex h={['300px', '400px', '500px']} align="center">
        <Flex
          position="absolute"
          w="90%"
          justifyContent="space-between"
          mx="auto"
        >
          {' '}
          <Button
            onClick={(e) => {
              e.preventDefault();
              slider.current.scrollLeft -= slider.current.offsetWidth;
            }}
            variant="unstyled"
            display={['inline', 'inline', 'none']}
            color="#fff"
            alignContent="start"
          >
            {' '}
            <ArrowLeftIcon />
          </Button>
          <Button
            onClick={(e) => {
              e.preventDefault();
              slider.current.scrollLeft += slider.current.offsetWidth;
            }}
            variant="unstyled"
            display={['inline', 'inline', 'none']}
            color="#fff"
          >
            <ArrowRightIcon />
          </Button>
        </Flex>

        <Flex
          className="items"
          h="100%"
          ref={slider}
          overflowX={['auto', 'auto', 'hidden']}
        >
          {imgs.map((img) => (
            <Box className="item" w="100%" h="100%">
              <Img
                src={img.url}
                className="imagem-slider"
                alt="imagem de caminhão"
                w="100%"
                h="100%"
              />
            </Box>
          ))}
        </Flex>
      </Flex>
      <Flex align="center" display={['none', 'none', 'flex']}>
        <Button
          onClick={(e) => {
            e.preventDefault();
            slider.current.scrollLeft -= slider.current.offsetWidth;
            optionsSlider.current.scrollLeft -=
              optionsSlider.current.offsetWidth * 0.25;
          }}
          variant="unstyled"
        >
          <ArrowLeftIcon />
        </Button>
        <Box w="90%">
          <Flex
            className="items"
            ref={optionsSlider}
            w="100%"
            overflowX={['auto', 'auto', 'hidden']}
          >
            {imgs.map((img) => (
              <Box className="item" w="20%" h="100%" margin="2.5%">
                <Img
                  src={img.url}
                  className="imagem-slider"
                  alt="imagem de caminhão"
                  w="100%"
                  h="100%"
                  borderRadius="10px"
                />
              </Box>
            ))}
            <Box className="item" w="20%" h="100%" margin="2.5%" />
            <Box className="item" w="20%" h="100%" margin="2.5%" />
            <Box className="item" w="20%" h="100%" margin="2.5%" />
          </Flex>
        </Box>
        <Button
          onClick={(e) => {
            e.preventDefault();
            slider.current.scrollLeft += slider.current.offsetWidth;
            optionsSlider.current.scrollLeft +=
              optionsSlider.current.offsetWidth * 0.25;
          }}
          variant="unstyled"
        >
          <ArrowRightIcon />
        </Button>
      </Flex>
    </>
  );
}
