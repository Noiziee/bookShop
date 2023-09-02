import { CounterProps } from '../../types/type'

export function Counter({ value, onChange, price, onTotalSumChange }: CounterProps): JSX.Element {

  const handleIncrement = () => {
    const newValue = value + 1
    onChange(newValue)
    onTotalSumChange(calculateTotalSum(newValue))
  }

  const handleDecrement = () => {
    if (value > 1) {
      const newValue = value - 1
      onChange(newValue)
      onTotalSumChange(calculateTotalSum(newValue))
    }
  }

  const calculateTotalSum = (newValue: number): number => {
    return newValue * price
  }

  return (
    <div className="counter">
      <button onClick={handleDecrement}>-</button>
      <span>{value}</span>
      <button onClick={handleIncrement}>+</button>
    </div>
  )
}