import { AspectRatio, Box, GridItem, Stack, Text } from "@chakra-ui/react"
import Image from "next/image"
import Link from "next/link"
import { Activity } from "../dailies"

export default function DailyItem(props: Activity) {
  const { title, description, src, href } = props
  return (
    <GridItem
      textAlign={'center'}
      py={4}
      transition={'all .2s ease-in-out'}
      _hover={
        {
          // bg: 'rgba(0,0,0,0.03)',
          cursor: 'pointer',
          '.shadow': {
            boxShadow: 'md'
          }
        }
      }>
      <Link
        href={href}
        target="_blank"
      >
        <Stack
          spacing={2}>
          <Box px={4}
          >
            <AspectRatio
              ratio={1}
              borderRadius={'1rem'}
              width={'100%'}
              overflow={'hidden'}
              pos={'relative'}
              className={'shadow'}
              transition={'all .3s ease-in-out'}
              mx={'auto'}
              >
                <Image
                  src={src}
                  alt={description}
                  className="dark:invert"
                  fill
                  priority
                />
              </AspectRatio>
            </Box>
          <Text
            fontSize={'.75rem'}
            noOfLines={1}
            >
            {title}
          </Text>
        </Stack>
      </Link>
    </GridItem>
  )
}
