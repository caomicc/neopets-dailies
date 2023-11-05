import {
  AspectRatio,
  Box,
  GridItem,
  Stack,
  Text,
  Tooltip,
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
  } = props;
  return (
    <GridItem
      textAlign={'center'}
      p={{ base: 2, md: 2 }}
      transition={'all .2s ease-in-out'}
      _hover={{
        cursor: 'pointer',
        '.shadow': {
          boxShadow: 'md',
        },
      }}
    >
      <Tooltip hasArrow placement={'auto'} label={frequency}>
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
              borderRadius={'2xl'}
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
              fontSize={'.8rem'}
              noOfLines={2}
              fontWeight={'500'}
              lineHeight={'1'}
            >
              {title}
            </Text>
            {frequency && (
              <Text
                fontSize={'.7rem'}
                noOfLines={1}
                fontWeight={'300'}
                lineHeight={'1'}
              >
                {frequency}
              </Text>
            )}
          </Stack>
        </Link>
      </Tooltip>
    </GridItem>
  );
}
