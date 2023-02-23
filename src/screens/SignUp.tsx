import { Center, Heading, Image, ScrollView, Text, VStack } from 'native-base'
import { useNavigation } from '@react-navigation/native'
import { useCallback } from 'react'

import backgroundImg from '@assets/background.png'
import LogoSvg from '@assets/logo.svg'

import type { TAuthNavigatorRoutesProps } from '@routes/auth.routes'

import { Input } from '@components/Input'
import { Button } from '@components/Button'

export const SignUp = () => {
  const { goBack } = useNavigation<TAuthNavigatorRoutesProps>()

  const handleGoBack = useCallback(() => {
    goBack()
  }, [goBack])

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1} px={10}>
        <Image
          source={backgroundImg}
          defaultSource={backgroundImg}
          alt="Pessoas treinando"
          resizeMode="contain"
          position="absolute"
        />

        <Center my={24}>
          <LogoSvg />

          <Text color="gray.100" fontSize="sm">
            Treine sua mente e o seu corpo
          </Text>
        </Center>

        <Center>
          <Heading color="gray.100" mb={6} fontSize="xl" fontFamily="heading">
            Crie a sua conta
          </Heading>

          <Input placeholder="Nome" />

          <Input
            placeholder="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <Input placeholder="Senha" secureTextEntry />

          <Button title="Criar e acessar" />
        </Center>

        <Button
          title="Voltar para o login"
          variant="outline"
          mt={24}
          onPress={handleGoBack}
        />
      </VStack>
    </ScrollView>
  )
}
