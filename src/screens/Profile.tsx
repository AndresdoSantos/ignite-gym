import { useState } from 'react'
import { Center, Heading, ScrollView, Skeleton, VStack } from 'native-base'
import { TouchableOpacity } from 'react-native'

import { ScreenHeader } from '@components/ScreenHeader'
import { UserPhoto } from '@components/UserPhoto'
import { Input } from '@components/Input'
import { Button } from '@components/Button'

const PHOTO_SIZE = 33

export const Profile = () => {
  const [photoIsLoading] = useState(false)

  return (
    <VStack flex={1}>
      <ScreenHeader title="Perfil" />

      <ScrollView>
        <Center mt={6} px={10}>
          {photoIsLoading ? (
            <Skeleton
              w={PHOTO_SIZE}
              h={PHOTO_SIZE}
              rounded="full"
              startColor="gray.400"
              endColor="gray.500"
            />
          ) : (
            <>
              <UserPhoto
                source={{ uri: 'https://github.com/AndresdoSantos.png' }}
                size={PHOTO_SIZE}
                mb="4"
              />

              <TouchableOpacity>
                <Heading
                  color="green.500"
                  fontWeight="bold"
                  fontSize="md"
                  mt="2"
                  mb="8"
                >
                  Alterar foto
                </Heading>
              </TouchableOpacity>

              <Input placeholder="Nome" bg="gray.600" />
              <Input placeholder="Email" bg="gray.600" isDisabled />
            </>
          )}
        </Center>

        <VStack px={10} mt={12} mb={9}>
          <Heading color="gray.200" fontSize="md" mb={2}>
            Alterar senha
          </Heading>

          <Input placeholder="Senha antiga" secureTextEntry bg="gray.600" />
          <Input placeholder="Nova senha" secureTextEntry bg="gray.600" />
          <Input
            placeholder="Confirme nova senha"
            secureTextEntry
            bg="gray.600"
          />
          <Button title="Atualizar" mt={4} />
        </VStack>
      </ScrollView>
    </VStack>
  )
}
