'use client'

import { Box, Text, SimpleGrid, Stack, Flex, Container, Heading} from "@chakra-ui/react";
import DailyItem from "./components/DailyItem";
import { activities } from "./components/dailies";
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';


const Clock = dynamic(() => import('react-live-clock'), { ssr: false });

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <Box background={'gray.50'}>
      <Container
        maxW={['md', 'lg', '4xl']}
        px={{base: 3, md: 8}}
        py={6}>
        <Flex as={'main'} flexDir={'column'}>
          <Box position={'fixed'} bottom={2}
          right={2}>
            {isMounted && (
              <Clock
                timezone={'US/Pacific'}
                format={'h:mm:ssa'}
                style={{fontSize: '1.5em'}}
                ticking={true} />
            )}
          </Box>
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
                columns={[4, 4, 6]}
                key={activity.title}
                background={'gray.100'}
                borderRadius={'xl'}
                p={{base: 1, md: 4}}
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
