import s from './Loader.module.css'
import preloader from '../../assets/images/preloader.svg'

export const Loader = () => <div className={s.loader}>  <img src={preloader}/></div>
