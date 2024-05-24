import cls from './Button.module.scss'
import { classNames } from '../../../utils/classNames'

export const Button = (props) => {
    const { children, btnClass, ...otherProps } = props

    return (
        <button 
            className={classNames(cls.btn, [cls[btnClass]])}
        {...otherProps} >
            {children}
            
        </button>
    )
}