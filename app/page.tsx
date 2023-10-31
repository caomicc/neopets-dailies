'use client'

import { Text, SimpleGrid, Stack, Flex, Container, Heading} from "@chakra-ui/react";
import DailyItem from "./components/DailyItem";
import { activities } from "./components/dailies";

export default function Home() {
  return (
    <Container
     maxW={['md', 'lg', '3xl']} py={6}>
      <Flex as={'main'} flexDir={'column'}>
        {activities.map((activity) => (
          <Stack key={activity.title} mb={8}>
            {activity.title &&
            <Heading
              textTransform={'capitalize'}
              fontSize={'2rem'}
              >
              {activity.title}
            </Heading>}
            {activity.description && <Text>{activity.description}</Text>}
            <SimpleGrid
              columns={[3, 4, 5]}
              key={activity.title}
              background={'gray.100'}
              borderRadius={'xl'}
            >
              {activity.items.map((item) => (
                <DailyItem
                  key={item.title}
                  {...item}
                  />
                )
              )}
            </SimpleGrid>
          </Stack>
        ))}
      </Flex>
    </Container>
  )
}
