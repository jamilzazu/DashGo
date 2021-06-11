
import { Flex, Text, Box, Avatar } from '@chakra-ui/react'

export default function Profile() {
  return (

    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Jamil Zazu</Text>
        <Text color="gray.300" fontSize="small">
          jamilzazu@hotmail.com
        </Text>
      </Box>
      <Avatar size="md" name="Jamil Zazu" />
    </Flex>
  );
}