import { Title } from "../Title"
export function Subscribe(): JSX.Element {
  return (
    <div className="subscribe">
      <div className="subscribe__inner">
        <Title>Subscribe to Newsletter</Title>
        <p className="subscribe__text">Be the first to know about new IT books, upcoming releases, exclusive offers and more.</p>
        <div className="input-group mb-3 mt-3">
          <input type="email" className="form-control" placeholder="Your email" />
          <button className="btn btn-secondary">Subscribe</button>
        </div>
      </div>
    </div>
  )
}