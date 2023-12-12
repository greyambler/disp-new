import { classNames } from 'shared/lib/classNames/classNames';
import cls from './UserData.module.scss';

interface UserDataProps {
   className?: string;
}

export const UserData = (props: UserDataProps) => {
   const {
      className,
   } = props;

   return (
      <div className={classNames(cls.UserData, {}, [className])}>
         <div>{`тело1 тело1`}</div>
      </div>
   );
};
