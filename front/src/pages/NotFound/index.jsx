import error from '../../assets/404.png'
import { NotFoundWrapper } from './notfound.style'

const NotFound = () => {
  return (
    <NotFoundWrapper>
      <img src={error} alt="NotFound Image" />
      <p>Página no encontrada</p>
    </NotFoundWrapper>
  )
}

export default NotFound