import { Center, Heading, VStack } from 'native-base'

import { ScreenHeader } from '@components/ScreenHeader'
import { UserPhoto } from '@components/UserPhoto'

export const Profile = () => {
  return (
    <VStack flex={1}>
      <ScreenHeader title="Perfil" />

      <Center mt={24}>
        <UserPhoto
          source={{ uri: 'https://github.com/AndresdoSantos.png' }}
          size={148}
          mb="4"
        />

        <Heading color="green.500">Alterar foto</Heading>
      </Center>
    </VStack>
  )
}
