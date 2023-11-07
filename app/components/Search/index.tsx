import { Box, Flex } from '@chakra-ui/react';

import { useReactSearch } from 'simple-react-search'
import { activities } from '../dailies';


export default function Search() {
  const searchFunction = useReactSearch(activities, ["listofkeys"]);

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

      </Flex>
    </Flex>
  );
}
