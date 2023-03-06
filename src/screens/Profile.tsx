import { useState } from 'react'
import {
  Center,
  Heading,
  ScrollView,
  Skeleton,
  VStack,
  useToast,
} from 'native-base'
import { TouchableOpacity } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import * as FileSystem from 'expo-file-system'

import { ScreenHeader } from '@components/ScreenHeader'
import { UserPhoto } from '@components/UserPhoto'
import { Input } from '@components/Input'
import { Button } from '@components/Button'

const PHOTO_SIZE = 33

export const Profile = () => {
  const toast = useToast()

  const [photoIsLoading, setPhotoIsLoading] = useState(false)
  const [userPhoto, setUserPhoto] = useState(
    'https://github.com/AndresdoSantos.png',
  )

  async function handleUserPhotoSelect() {
    try {
      const photoSelected = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
        aspect: [4, 4],
        allowsEditing: true,
      })

      if (photoSelected.canceled) {
        // eslint-disable-next-line no-useless-return
        return
      }

      if (photoSelected.assets[0].uri) {
        const photoInfo = await FileSystem.getInfoAsync(
          photoSelected.assets[0].uri,
        )

        if (photoInfo.size && photoInfo.size / 1024 / 1024 > 5) {
          return toast.show({
            title: 'Essa imagem é muito grande.',
            description: 'Escolha uma imagem menor.',
            placement: 'top',
            bgColor: 'red.500',
          })
        }

        setUserPhoto(photoSelected.assets[0].uri)
      }
    } catch (error) {
      console.log(error)
    } finally {
      setPhotoIsLoading(false)
    }
  }

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
              <UserPhoto source={{ uri: userPhoto }} size={PHOTO_SIZE} mb="4" />

              <TouchableOpacity onPress={handleUserPhotoSelect}>
                <Heading
                  color="green.500"
                  fontWeight="bold"
                  fontSize="md"
                  fontFamily="heading"
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
          <Heading color="gray.200" fontSize="md" mb={2} fontFamily="heading">
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
