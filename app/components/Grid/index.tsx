import { SimpleGrid } from "@chakra-ui/react"
import { Activities } from "../dailies"
import DailyItem from "../DailyItem"

export default function Grid(props: Activities) {
  const { items } = props
  return (
    <SimpleGrid
      columns={[4, 4, 6]}
    >
      {items.sort((a, b) => a.title.localeCompare(b.title)).map((item) => (
        <DailyItem
          key={item.title}
          {...item}
          />
        )
      )}
    </SimpleGrid>
  )
}
