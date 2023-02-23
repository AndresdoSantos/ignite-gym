import { FlatList, VStack } from 'native-base'

import { ScreenHeader } from '@components/ScreenHeader'
import { HistoryCard } from '@components/HistoryCard'

export const History = () => {
  return (
    <VStack flex={1}>
      <ScreenHeader title="Histórico de exercícios" />

      <FlatList data={['1']} renderItem={({ item }) => <HistoryCard />} />
    </VStack>
  )
}
