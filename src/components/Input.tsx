import {
  Input as NativeBaseInput,
  IInputProps as INativeBaseInputProps,
} from 'native-base'

export const Input = ({ ...props }: INativeBaseInputProps) => {
  return (
    <NativeBaseInput
      bg="gray.700"
      h={14}
      px={4}
      mb={4}
      borderWidth={1}
      borderColor="gray.700"
      fontSize="md"
      fontFamily="body"
      color="white"
      placeholderTextColor="gray.300"
      _focus={{
        bg: 'gray.700',
        borderWidth: 1,
        borderColor: 'green.500',
      }}
      {...props}
    />
  )
}
