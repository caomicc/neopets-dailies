'use client';

import {
  Box,
  Flex,
  Container,
  Accordion,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  TabIndicator,
} from '@chakra-ui/react';
import { activities } from './components/dailies';
import Section from './components/Section';
import Header from './components/Header';

export default function Home() {
  const favoriteItems = activities.flatMap((activity) =>
    activity.items.filter((item) => item.favorite)
  );

  return (
    <Box
      background={'linear-gradient(180deg, #85bbe6, #4d71b9)'}
      minH={'100vh'}
    >
      <Header />

      <Flex as={'main'} flexDir={'column'} gap={4}>
        <Tabs variant={'unstyled'} colorScheme={'gray'}>
          <Box
            background={'#fff'}
            top={{ base: '61px' }}
            zIndex={10}
            w={'100%'}
            boxShadow={'xl'}
            pos={'fixed'}
            overflowX={'scroll'}
            mx={'auto'}
            sx={{
              '&::-webkit-scrollbar': {
                display: 'none',
              },
            }}
          >
            <Box mx={'auto'} w={'fit-content'}>
              <TabList>
                <Tab
                  color={'#222345'}
                  fontWeight={600}
                  fontSize={{ base: 'sm', md: 'md' }}
                  whiteSpace={'nowrap'}
                  // _selected={{ color: '#4d71b9' }}
                >
                  Favorites
                </Tab>
                {activities.map((activity) => (
                  <Tab
                    color={'#222345'}
                    fontWeight={600}
                    fontSize={{ base: 'sm', md: 'md' }}
                    whiteSpace={'nowrap'}
                    key={activity.title}
                    // _selected={{ color: '#4d71b9' }}
                  >
                    {activity.title}
                  </Tab>
                ))}
              </TabList>
              <TabIndicator
                mt="-3px"
                height="4px"
                bg="#85bbe6"
                // borderRadius="3px"
              />
            </Box>
          </Box>
          <Container
            maxW={['md', 'lg', '4xl']}
            px={{ base: 0, md: 8 }}
            pb={{ base: 14, md: 14 }}
            pt={{ base: '3.75rem', md: 24 }}
          >
            {' '}
            <TabPanels mt={10}>
              <TabPanel p={2}>
                <Section
                  title={'Favorites'}
                  items={favoriteItems}
                  icon={{
                    width: 30,
                    height: 30,
                    src: 'https://images.neopets.com/themes/h5/basic/images/health-icon.png',
                  }}
                />
              </TabPanel>
              {activities.map((activity) => (
                <TabPanel key={activity.title} p={2}>
                  <Section {...activity} />
                </TabPanel>
              ))}
            </TabPanels>
          </Container>
        </Tabs>
      </Flex>
      {/* <Utility /> */}
    </Box>
  );
}
