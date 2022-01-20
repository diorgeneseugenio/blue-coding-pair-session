import React from 'react'

import { Button } from '@/presentation/components/Button/Button'

interface OwnProps {
  loadMore: () => void
}

export const LoadMoreButton = ({ loadMore }: OwnProps) => {
  return (
    <Button variant="primary" onClick={loadMore}>
      Load more!
    </Button>
  )
}
