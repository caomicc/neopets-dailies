import { Box, Flex } from '@chakra-ui/react';
import Image from 'next/image';

export default function Header() {
  return (
    <Flex
      width={'100%'}
      background={'white'}
      pos={'fixed'}
      top={0}
      zIndex={10}
      boxShadow={'sm'}
      justifyContent={'center'}
      minH={'61px'}
    >
      <Flex
        maxW={['md', 'lg', '4xl']}
        width={'100%'}
        px={{ base: 3, md: 8 }}
        py={2}
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <Flex alignItems={'center'} gap={2}>
          <Image
            src={'/shoy.png'}
            alt={'Neopets Logo'}
            width={45}
            height={45}
          />
          {/* <Image src={'https://images.neopets.com/t/val/events/trade_accept.gif'} width={45} height={45} /> */}
          <Box
            letterSpacing={{ base: '.02rem', md: '.05rem' }}
            fontSize={{ base: 'sm', md: '2xl' }}
            fontWeight={700}
          >
            {"Cammy\'s Neopets Dailies"}
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
}
