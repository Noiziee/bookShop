import { ReactNode } from 'react'

interface PriceProps {
  children?: ReactNode
  price: string
}

export function Price({ price }: PriceProps): JSX.Element {
  return (
    <div className="price">{price}</div>
  );
}
