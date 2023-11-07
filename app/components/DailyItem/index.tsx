import {
  AspectRatio,
  Box,
  GridItem,
  Flex,
  Text,
  Stack,
} from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { Activity } from '../dailies';

export default function DailyItem(props: Activity) {
  const {
    title,
    description,
    src,
    href,
    frequency,
    needsFlash = false,
    favorite = false,
    orientation,
  } = props;

  if (orientation === 'list') {
    return (
      <Box
        background={'white'}
        px={2}
        py={1}
        borderRadius={'2xl'}
        boxShadow={
          '0 1px 3px -1px rgba(0, 0, 0, 0.1),0 2px 2px -1px rgba(0, 0, 0, 0.06)'
        }
      >
        <Link href={href} target="_blank">
          <Flex alignItems={'center'}>
            <Box
              p={1}
              maxW={'2.5rem'}
              width={'100%'}
              transition={'all .3s ease-in-out'}
              className={'shadow'}
              pos={'relative'}
            >
              <AspectRatio
                ratio={1}
                width={'100%'}
                pos={'relative'}
                mx={'auto'}
              >
                <Image
                  src={src}
                  alt={description}
                  className="dark:invert"
                  style={{
                    mixBlendMode: 'multiply',
                  }}
                  fill
                  priority
                />
              </AspectRatio>
              {favorite && (
                <Box
                  pos={'absolute'}
                  top={-2}
                  left={-2}
                  fontSize={'3xl'}
                  lineHeight={1}
                ></Box>
              )}
            </Box>
            <Box px={2} width={'100%'}>
              <Stack spacing={1}>
                <Text
                  fontSize={{ base: '.9rem' }}
                  fontWeight={'bold'}
                  noOfLines={1}
                  color={'#273a68'}
                  lineHeight={'1'}
                >
                  {title}
                </Text>
                {frequency && (
                  <Text
                    fontSize={{ base: '.7rem' }}
                    noOfLines={1}
                    color={'#5f6f93'}
                    opacity={0.8}
                    lineHeight={'1'}
                  >
                    {frequency}
                  </Text>
                )}
                {needsFlash && <Text fontStyle={'italic'}>needs flash</Text>}
              </Stack>
            </Box>
          </Flex>
        </Link>
      </Box>
    );
  }

  return (
    <GridItem
      textAlign={'center'}
      p={{ base: 1, md: 2 }}
      transition={'all .2s ease-in-out'}
      _hover={{
        cursor: 'pointer',
        '.shadow': {
          boxShadow: 'md',
        },
      }}
    >
      <Link href={href} target="_blank">
        <Stack spacing={2}>
          <Box
            p={{ base: 1, md: 4 }}
            transition={'all .3s ease-in-out'}
            className={'shadow'}
            background={'pink.50'}
            border={'1px solid'}
            borderColor={'pink.100'}
            pos={'relative'}
            borderRadius={{ base: 'xl', md: '2xl' }}
          >
            <AspectRatio ratio={1} width={'100%'} pos={'relative'} mx={'auto'}>
              <Image
                src={src}
                alt={description}
                className="dark:invert"
                style={{
                  mixBlendMode: 'multiply',
                }}
                fill
                priority
              />
            </AspectRatio>
            {favorite && (
              <Box
                pos={'absolute'}
                top={-2}
                left={-2}
                fontSize={'3xl'}
                lineHeight={1}
              >
                {/* <Image
                  src={
                    'https://images.neopets.com/themes/h5/basic/images/health-icon.png'
                  }
                  width={30}
                  height={30}
                  alt=""
                /> */}
              </Box>
            )}
          </Box>
          <Text
            fontSize={{ base: '.7rem', md: '1rem' }}
            noOfLines={2}
            fontWeight={'500'}
            lineHeight={'1'}
          >
            {title}
          </Text>
          {frequency && (
            <Text
              fontSize={{ base: '.6rem', md: '1rem' }}
              noOfLines={1}
              fontWeight={'300'}
              lineHeight={'1'}
            >
              {frequency}
            </Text>
          )}
          {needsFlash && <Text fontSize={'.7rem'}>needs flash</Text>}
        </Stack>
      </Link>
    </GridItem>
  );
}
