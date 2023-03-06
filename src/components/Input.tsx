import {
  Input as NativeBaseInput,
  IInputProps as INativeBaseInputProps,
  FormControl,
} from 'native-base'

type Props = INativeBaseInputProps & {
  errorMessage?: string | null
}

export const Input = ({ errorMessage = null, isInvalid, ...props }: Props) => {
  const invalid = !!errorMessage || isInvalid

  return (
    <FormControl isInvalid={invalid} mb={4}>
      <NativeBaseInput
        isInvalid={invalid}
        _invalid={{ borderWidth: 1, borderColor: 'red.500' }}
        bg="gray.700"
        h={14}
        px={4}
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

      <FormControl.ErrorMessage>{errorMessage}</FormControl.ErrorMessage>
    </FormControl>
  )
}
