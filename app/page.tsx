'use client';

import { Box, Flex, Container, Accordion } from '@chakra-ui/react';
import { activities } from './components/dailies';
import Section from './components/Section';
import Header from './components/Header';

export default function Home() {
  const favoriteItems = activities.flatMap((activity) =>
    activity.items.filter((item) => item.favorite)
  );

  return (
    <Box background={'pink.100'}>
      <Header />
      <Container
        maxW={['md', 'lg', '4xl']}
        px={{ base: 3, md: 8 }}
        pb={6}
        pt={24}
      >
        <Flex as={'main'} flexDir={'column'}>
          <Accordion
            backdropFilter={'blur(20px)'}
            background={'rgba(255,255,255,.4)'}
            overflow={'hidden'}
            borderRadius={'xl'}
            border={'1px solid'}
            borderColor={'pink.50'}
            p={6}
            defaultIndex={[0]}
            allowMultiple
          >
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
          </Accordion>
        </Flex>
      </Container>
    </Box>
  );
}
