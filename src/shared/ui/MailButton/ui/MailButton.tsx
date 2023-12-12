import { classNames } from 'shared/lib/classNames/classNames';
import cls from './MailButton.module.scss';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import DisableIcon from 'shared/assets/icons/mailDisable.svg';

interface MailButtonProps {
   className?: string;
}

export const MailButton = (props: MailButtonProps) => {
   const {
      className,
   } = props;
   const toggleExit = () => {
      console.log("mail ")
   }

   return (
      <Button
         theme={ThemeButton.CLEAR}
         className={classNames(cls.MailButton, {}, [className])}
         onClick={toggleExit}
      >
         <DisableIcon />
      </Button >
   );
};
