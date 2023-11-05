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
        borderRadius={'xl'}
        mb={4}
      >
        <AccordionButton
          py={3}
          px={4}
          _hover={{
            background: 'transparent',
          }}
        >
            <Image
              {...icon}
              alt={title}
            />
          <Box
            as="span"
            flex="1"
            ml={2}
            textAlign="left"
            textTransform={'capitalize'}
            fontSize={'1.25rem'}
            fontWeight={'bold'}
          >
            {title}
          </Box>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel pb={4}>
          {description && <Text>{description}</Text>}
          <Grid {...props} />
        </AccordionPanel>
      </AccordionItem>
    </>
  );
}
