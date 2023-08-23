import { RatingProps } from '../../types/type'
import star from '../../images/star.svg'
import mutedStar from '../../images/mutedStar.svg'

export function Rating({ rating }: RatingProps): JSX.Element {
  const parsedRating = parseInt(rating, 10)

  const starRating = [
    mutedStar,
    star,
  ]

  const stars = Array.from({ length: 5 }, (_, index) => (
    <img
      className="rating"
      key={index}
      src={starRating[index >= parsedRating ? 0 : 1]}
      alt={index >= parsedRating ? 'Muted Star' : 'Active Star'}
    />
  ))
  return <div>{stars}</div>
}