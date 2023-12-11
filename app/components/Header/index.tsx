import { Box, Flex } from '@chakra-ui/react';
import Image from 'next/image';

export default function Header() {
  return (
    <Flex
      width={'100%'}
      background={'#fff'}
      pos={'fixed'}
      top={0}
      zIndex={15}
      justifyContent={'center'}
      minH={'61px'}
    >
      <Flex
        maxW={['md', 'lg', '4xl']}
        width={'100%'}
        px={{ base: 3, md: 8 }}
        py={1}
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <Flex alignItems={'center'} w={'100%'} gap={2}>
          <Image
            src={'https://images.neopets.com/dungdash/images/dungdash_mascotbg.png'}
            alt={'Neopets Logo'}
            width={55}
            height={55}
          />
          <Box
            fontSize={{ base: 'xl', md: '2xl' }}
            color={'#222345'}
            fontFamily={'heading'}
          >
            {"Cammy\'s Neopets Dailies"}
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
}
