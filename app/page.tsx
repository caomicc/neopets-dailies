'use client'

import { Box, Text, Stack, Flex, Container, Heading} from "@chakra-ui/react";
import { activities } from "./components/dailies";
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Grid from "./components/Grid";
import Section from "./components/Section";


const Clock = dynamic(() => import('react-live-clock'), { ssr: false });

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const favoriteItems = activities.flatMap(activity => activity.items.filter(item => item.favorite));

  return (
    <Box backgroundImage={'url(./blue.svg)'} backgroundSize={'550px'} backgroundAttachment={'fixed'}>
      <Container
        maxW={['md', 'lg', '4xl']}
        px={{base: 3, md: 8}}
        py={6}>
        <Flex as={'main'} flexDir={'column'}>
          <Box
            border={'1px solid #f7faff'}
            boxShadow={'sm'}
            position={'fixed'} bottom={2} right={2} background={'white'} p={2} borderRadius={'md'} minW={'150px'} textAlign={'center'}>
            {isMounted && (
              <Clock
                timezone={'US/Pacific'}
                format={'h:mm:ssa'}
                style={{fontSize: '1.5em'}}
                ticking={true}
              />
            )}
          </Box>
          <Section title={'My Favorites'} items={favoriteItems} />
          {activities.map((activity) => (
            <Section key={activity.title} {...activity} />
          ))}
        </Flex>
      </Container>
    </Box>
  )
}
