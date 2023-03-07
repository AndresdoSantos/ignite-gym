import {
  Button as NativeBaseButton,
  IButtonProps as INativeBaseButtonProps,
  Text,
} from 'native-base'

type Props = INativeBaseButtonProps & {
  title: string
  variant?: 'solid' | 'outline'
}

export const Button = ({ title, variant = 'solid', ...props }: Props) => {
  return (
    <NativeBaseButton
      w="full"
      h={14}
      bg={variant === 'outline' ? 'transparent' : 'green.700'}
      borderWidth={variant === 'outline' ? 1 : 0}
      borderColor="green.500"
      rounded="sm"
      _pressed={{
        bg: variant === 'outline' ? 'gray.500' : 'green.500',
      }}
      {...props}
    >
      <Text
        color={variant === 'outline' ? 'green.500' : 'white'}
        fontFamily="body"
        fontSize="sm"
      >
        {title}
      </Text>
    </NativeBaseButton>
  )
}
