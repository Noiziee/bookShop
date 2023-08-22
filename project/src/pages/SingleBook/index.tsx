import { Title } from '../../components/Title'
import { BackHome } from '../../components/BackHome'
import { BookInfo } from '../../components/BookInfo'
export function SingleBook(): JSX.Element {
  return (
    <div>
      <BackHome />
      <Title>Single Book</Title>
      <BookInfo />
    </div>
  )
}