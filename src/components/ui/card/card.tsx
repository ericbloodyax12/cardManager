import {ComponentPropsWithoutRef, forwardRef} from "react";
import s from './card.module.scss'
import {clsx} from "clsx";


// ComponentPropsWithoutRef используется для определения пропсов компонента без прямой привязки к DOM-элементу.
// forwardRef - это функция высшего порядка, которая позволяет передавать ref из родительского компонента во вложенный компонент

export type CardProps = {} & ComponentPropsWithoutRef<'div'>
// Объединяет пустой объект {} с пропсами компонента без привязки к DOM-элементу <div>.
// Это означает, что CardProps будет содержать все пропсы, кроме пропсов, привязанных к DOM-элементу <div>

// Cоздаем компонент Card с помощью функции forwardRef. Этот компонент принимает вложенный компонент с типом HTMLDivElement
// (то есть DOM-элемент <div>) и пропсы CardProps. Внутри компонента мы достаем className и все остальные пропсы из restProps.
// Мы также получаем ref, который будет передан из родительского компонента с использованием forwardRef.
export const Card = forwardRef<HTMLDivElement, CardProps>(({ className, ...restProps },ref) => {
    const classNames = {root: clsx(s.root, className)}
    return (
        <div className={classNames.root} ref={ref} {...restProps}>

        </div>
    );
})
