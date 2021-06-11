
import { Flex, Text, Box, Avatar } from '@chakra-ui/react'

interface ProfileProps {
  showProfileData?: boolean;
}

export default function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Jamil Zazu</Text>
          <Text color="gray.300" fontSize="small">
            jamilzazu@hotmail.com
          </Text>
        </Box>
      )}
      <Avatar size="md" name="Jamil Zazu" />
    </Flex>
  );
}