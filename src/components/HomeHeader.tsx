import { Heading, HStack, Icon, Text, VStack } from 'native-base'
import { MaterialIcons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'

import { UserPhoto } from './UserPhoto'

export const HomeHeader = () => {
  return (
    <HStack
      bg="gray.600"
      pt="16"
      pb="5"
      px="8"
      alignItems="center"
      justifyContent="space-between"
    >
      <UserPhoto
        source={{ uri: 'https://github.com/AndresdoSantos.png' }}
        size={16}
        mr="4"
      />
      <VStack flex="1">
        <Text color="gray.100" fontSize="md">
          Hy
        </Text>
        <Heading color="gray.100" fontSize="md">
          Andres
        </Heading>
      </VStack>

      <TouchableOpacity>
        <Icon as={MaterialIcons} name="logout" color="gray.200" size={7} />
      </TouchableOpacity>
    </HStack>
  )
}
