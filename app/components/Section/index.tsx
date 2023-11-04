import { Heading, Stack, Text } from "@chakra-ui/react"
import { Activities } from "../dailies"
import Grid from "../Grid"

export default function Section(props: Activities) {
  const { title, description } = props
  return (
   <Stack
      p={{base: 1, md: 4}}
      pt={{base: 2, md: 6}}
      mb={8}
      boxShadow={'sm'}
      background={'rgba(255,255,255,.4)'}
      border={'1px solid #f7faff'}
      backdropFilter={'blur(20px)'}
      borderRadius={'xl'}>
      {title &&
      <Heading
        textTransform={'capitalize'}
        px={{base: 1, md: 4}}
        fontSize={'2rem'}
        >
        {title}
      </Heading>}
      {description && <Text>{description}</Text>}
      <Grid {...props} />
    </Stack>
  )
}
