'use client';

import { Box, Flex, Container, Accordion } from '@chakra-ui/react';
import { activities } from './components/dailies';
import Section from './components/Section';
import Header from './components/Header';
import Utility from './components/Utility';

export default function Home() {
  const favoriteItems = activities.flatMap((activity) =>
    activity.items.filter((item) => item.favorite)
  );

  return (
    <Box background={'#f7f7f7'}>
      <Header />
      <Utility />
      <Container
        maxW={['md', 'lg', '4xl']}
        px={{ base: 0, md: 8 }}
        pb={{ base: 0, md: 14 }}
        pt={{ base: 20, md: 24 }}
      >
        <Flex as={'main'} flexDir={'column'} gap={4}>
          <Section
            title={'My Favorites'}
            items={favoriteItems}
            icon={{
              width: 30,
              height: 30,
              src: 'https://images.neopets.com/themes/h5/basic/images/health-icon.png',
            }}
          />
          {activities.map((activity) => (
            <Section key={activity.title} {...activity} />
          ))}
        </Flex>
      </Container>
    </Box>
  );
}
