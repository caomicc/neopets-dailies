import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Text,
} from '@chakra-ui/react';
import { Activities } from '../dailies';
import Grid from '../Grid';
import Image from 'next/image';

export default function Section(props: Activities) {
  const { title, description, icon } = props;
  return (
    <>
      <AccordionItem
        border={0}
        background={'rgba(255,255,255,.8)'}
        borderRadius={{base: 'none', md: 'xl'}}
        mb={{base: 0, md: 4}}
      >
        <AccordionButton
          py={{base: 2, md:3}}
          px={{base: 2, md:4}}
          _hover={{
            background: 'transparent',
          }}
        >
            <Image
              {...icon}
              width={30}
              height={30}
              alt={title}
            />
          <Box
            as="span"
            flex="1"
            ml={2}
            textAlign="left"
            textTransform={'capitalize'}
            fontSize={{base: 'md', md: 'lg'}}
            fontWeight={'bold'}
          >
            {title}
          </Box>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel pb={4} px={0}>
          {description && <Text>{description}</Text>}
          <Grid {...props} />
        </AccordionPanel>
      </AccordionItem>
    </>
  );
}
