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
    <Box background={'pink.100'}>
      <Header />
      <Utility />
      <Container
        maxW={['md', 'lg', '4xl']}
        px={{ base: 0, md: 8 }}
        pb={{base: 0, md: 14}}
        pt={{base: 0, md: 24}}
      >
        <Flex as={'main'} flexDir={'column'}>
          <Accordion
            backdropFilter={'blur(20px)'}
            background={'rgba(255,255,255,.4)'}
            overflow={'hidden'}
            borderRadius={{base: 'none', md: 'xl'}}
            border={{base: 'none', md: '1px solid pink.50'}}
            px={{base: 0, md: 6}}
            py={{base: '61px', md: 6}}
            defaultIndex={[0]}
            allowToggle
            // allowMultiple
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
