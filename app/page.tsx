'use client'

import { Text, SimpleGrid, Stack, Flex, Container} from "@chakra-ui/react";
import DailyItem from "./components/DailyItem";
import { activities } from "./components/dailies";


export default function Home() {
  return (
    <Container
     maxW={['md', 'lg', '3xl']}>
      <Flex as={'main'} flexDir={'column'}>
        {activities.map((activity) => (
          <Stack mb={4}>
            {activity.title &&
            <Text as={'h2'} textTransform={'capitalize'}
              fontSize={'2rem'}
              fontFamily={'Delicious Handrawn'}
              >
                {activity.title}
            </Text>}
            {activity.description && <Text>{activity.description}</Text>}
            <SimpleGrid
              columns={[3, 4, 5]}
              key={activity.title}
            >
              {activity.items.map((item) => (<DailyItem {...item} />))}
            </SimpleGrid>
          </Stack>
        ))}
      </Flex>
    </Container>
  )
}
