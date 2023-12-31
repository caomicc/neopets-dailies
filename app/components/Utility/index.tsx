import { Box, Button, Flex } from '@chakra-ui/react';
import { useState, useEffect } from 'react';


export default function Utility() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  // const [isMounted, setIsMounted] = useState(false);

  // useEffect(() => {
  //   setIsMounted(true);
  // }, []);

  return (
    <>
      <Flex
        width={'100%'}
        background={'white'}
        pos={'fixed'}
        minH={'61px'}
        bottom={0}
        zIndex={10}
        boxShadow={'sm'}
        justifyContent={'center'}
        display={{ base: 'flex', md: 'none' }}
      >
        <Flex
          maxW={['md', 'lg', '4xl']}
          width={'100%'}
          px={{ base: 3, md: 8 }}
          py={3}
          borderTop={'1px solid #eee'}
          alignItems={'center'}
          justifyContent={'space-between'}
          gap={2}
        >
          <Box flex={3}>
          </Box>
          <Box flex={1}>
            <Button colorScheme={'pink'} width={'100%'} size={'sm'} onClick={scrollToTop}>
              Top
            </Button>
          </Box>
        </Flex>
      </Flex>
    </>
  );
}

