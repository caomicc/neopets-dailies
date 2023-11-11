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
import Utility from './components/Utility';

export default function Home() {
  const favoriteItems = activities.flatMap((activity) =>
    activity.items.filter((item) => item.favorite)
  );

  return (
    <Box background={'linear-gradient(180deg, #fea8c8, #fb5d92)'} minH={'100vh'}>
      <Header />

        <Flex as={'main'} flexDir={'column'} gap={4}>
          <Tabs variant={'unstyled'} colorScheme={'gray'}>
            <Box
              background={'#fff'}
              top={{base: '61px'}}
              zIndex={10}
              pos={'fixed'}
              overflowX={'scroll'}
              maxW={'100vw'}
              w={'100%'}
              boxShadow={'xl'}
              sx={{
                '&::-webkit-scrollbar': {
                  display: 'none',
                },
              }}
            >
              <TabList>
                <Tab
                  color={'#273a68'}
                  fontWeight={600}
                  fontSize={{ base: 'sm', md: 'md' }}
                  whiteSpace={'nowrap'}
                  _selected={{ color: 'pink.500' }}
                >
                  Favorites
                </Tab>
                {activities.map((activity) => (
                  <Tab
                    color={'#273a68'}
                    fontWeight={600}
                    fontSize={{ base: 'sm', md: 'md' }}
                    whiteSpace={'nowrap'}
                    key={activity.title}
                    _selected={{ color: 'pink.500' }}
                  >
                    {activity.title}
                  </Tab>
                ))}
              </TabList>
              <TabIndicator
                mt="-3px"
                height="3px"
                bg="pink.500"
                borderRadius="3px"
              />
            </Box>
            <Container
        maxW={['md', 'lg', '4xl']}
        px={{ base: 0, md: 8 }}
        pb={{ base: 14, md: 14 }}
        pt={{ base: '3.75rem', md: 24 }}
      >     <TabPanels mt={10}>
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
