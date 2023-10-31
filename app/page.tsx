'use client'

import { Box, Text, SimpleGrid, Stack, Flex, Container, Heading} from "@chakra-ui/react";
import DailyItem from "./components/DailyItem";
import { activities } from "./components/dailies";

export default function Home() {
  return (
    <Box background={'pink.100'}>
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
                columns={[3, 4, 6]}
                key={activity.title}
                background={'pink.200'}
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
    </Box>
  )
}
