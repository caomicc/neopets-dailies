import {
  Box,
  Text,
} from '@chakra-ui/react';
import { Activities } from '../dailies';
import List from '../List';

export default function Section(props: Activities) {
  const { title, description } = props;
  return (
    <Box>
      {title && <Text fontSize={'1rem'} px={2}>{title}</Text>}
      {description && <Text>{description}</Text>}
      <List {...props} />
    </Box>
  );
}
