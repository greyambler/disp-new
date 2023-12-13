import { classNames } from 'shared/lib/classNames/classNames';
import cls from './EnterDate.module.scss';

interface EnterDateProps {
   className?: string;
}

export const EnterDate = (props: EnterDateProps) => {
   const {
      className,
   } = props;

   return (
      <div className={classNames(cls.EnterDate, {}, [className])}>
       <div>{`Вход: тело1 тело1`}</div>
      </div>
   );
};
