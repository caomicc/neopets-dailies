import { AspectRatio, Box, GridItem, Stack, Text, Tooltip } from "@chakra-ui/react"
import Image from "next/image"
import Link from "next/link"
import { Activity } from "../dailies"

export default function DailyItem(props: Activity) {
  const { title, description, src, href, frequency, needsFlash = false } = props
  return (
    <GridItem
      textAlign={'center'}
      p={{base: 2, md: 4}}
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
      <Tooltip hasArrow placement={'auto'} label={frequency}>
        <Link
          href={href}
          target="_blank"
        >
        <Stack
          spacing={2}>
          <Box
            p={{ base: 1, md: 2}}
            transition={'all .3s ease-in-out'}
            className={'shadow'}
            background={'white'}
            borderRadius={'lg'}>
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
                fill
                priority
              />
            </AspectRatio>
            </Box>
          <Text
            fontSize={'.9rem'}
            noOfLines={2}
            lineHeight={'1.1'}
            >
            {title}
          </Text>
          {frequency &&
            <Text
              fontSize={'.7rem'}
              noOfLines={1}
              lineHeight={'1'}
              >
              {frequency}
            </Text>
          }
        </Stack>
      </Link>
      </Tooltip>
    </GridItem>
  )
}
