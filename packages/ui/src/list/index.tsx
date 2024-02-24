import { FlashList } from '@shopify/flash-list'
import { useCallback } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Car } from '@t4/api/src/db/schema'

interface Props {
  data?: Car[]
  renderItem: (item: any) => React.ReactElement
  itemHeight: number
}

export function VirtualList<T>({ data, renderItem, itemHeight }: Props): React.ReactNode {
  const { bottom } = useSafeAreaInsets()

  const render = useCallback(
    (item) => {
      return renderItem(item.item)
    },
    [renderItem]
  )

  if (!data) {
    return null
  }

  return (
    <FlashList
      data={data}
      contentContainerStyle={{
        paddingBottom: bottom + 8,
      }}
      renderItem={render}
      estimatedItemSize={itemHeight}
    />
  )
}
