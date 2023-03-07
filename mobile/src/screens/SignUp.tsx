import { Center, Heading, Image, ScrollView, Text, VStack, useToast } from 'native-base'
import { useNavigation } from '@react-navigation/native'
import { useForm, Controller } from 'react-hook-form'
import { useCallback } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import * as y from 'yup'

import backgroundImg from '@assets/background.png'
import LogoSvg from '@assets/logo.svg'

import type { TAuthNavigatorRoutesProps } from '@routes/auth.routes'
import { api } from '@services/api'
import { AppError } from '@utils/AppError'

import { Input } from '@components/Input'
import { Button } from '@components/Button'

const signUpInput = y.object({
  name: y.string().required('Informe o nome.'),
  email: y.string().required('Informe o email.').email('Email inválido.'),
  password: y
    .string()
    .required('Informe a senha.')
    .min(6, 'A senha deve ter pelo menos 6 caracteres.'),
  confirm_password: y
    .string()
    .required('Confirme a senha.')
    .oneOf([y.ref('password'), ''], 'Senhas diferentes.'),
})

type SignUpInput = {
  name: string
  email: string
  password: string
  confirm_password: string
}

export const SignUp = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpInput>({ resolver: yupResolver(signUpInput) })
  const { goBack } = useNavigation<TAuthNavigatorRoutesProps>()

  const toast = useToast()

  const handleGoBack = useCallback(() => {
    goBack()
  }, [goBack])

const handleSignUp = async ({ name, email, password }: SignUpInput) => {
  try {
    await api.post('/users', { name, email, password })
  } catch (error) {
    const isAppError = error instanceof AppError

    const title = isAppError ? error.message : 'Não foi possível criar a conta. Tente novamente.'

    if (isAppError) {
        toast.show({ title })
    }
  }
}

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

          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <Input
                placeholder="Nome"
                onChangeText={field.onChange}
                value={field.value}
                errorMessage={errors.name?.message}
              />
            )}
          />

          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <Input
                placeholder="E-mail"
                keyboardType="email-address"
                autoCapitalize="none"
                onChangeText={field.onChange}
                value={field.value}
                errorMessage={errors.email?.message}
              />
            )}
          />

          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <Input
                placeholder="Senha"
                secureTextEntry
                onChangeText={field.onChange}
                value={field.value}
                errorMessage={errors.password?.message}
              />
            )}
          />

          <Controller
            name="confirm_password"
            control={control}
            render={({ field }) => (
              <Input
                placeholder="Confirmar senha"
                secureTextEntry
                onChangeText={field.onChange}
                value={field.value}
                errorMessage={errors.confirm_password?.message}
              />
            )}
          />

          <Button
            title="Criar e acessar"
            onPress={handleSubmit(handleSignUp)}
          />
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
