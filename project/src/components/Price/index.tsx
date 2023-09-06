import { PriceProps } from '../../types/interface'

export function Price({ price }: PriceProps): JSX.Element {
  return (
    <div className="price">{price}</div>
  );
}
