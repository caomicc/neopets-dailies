import { Stack } from "@chakra-ui/react"
import { Activities } from "../dailies"
import DailyItem from "../DailyItem"

export default function List(props: Activities) {
  const { items } = props
  return (
    <Stack p={2}>
      {items.sort((a, b) => a.title.localeCompare(b.title)).map((item) => (
        <DailyItem
          key={item.title}
          orientation={'list'}
          {...item}
          />
        )
      )}
    </Stack>
  )
}
