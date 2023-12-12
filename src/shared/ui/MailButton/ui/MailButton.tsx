import { classNames } from 'shared/lib/classNames/classNames';
import cls from './MailButton.module.scss';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import LightIcon from 'shared/assets/icons/mail-ligth.svg';
import DarkIcon from 'shared/assets/icons/mail-dark.svg';
import { Theme, useTheme } from 'app/providers/ThemeProvider';

interface MailButtonProps {
   className?: string;
}

export const MailButton = (props: MailButtonProps) => {
   const {
      className,
   } = props;
   const { theme } = useTheme();

   const toggleExit = () => {
      console.log("mail ")
   }

   return (
      <Button
         theme={ThemeButton.CLEAR}
         className={classNames(cls.MailButton, {}, [className])}
         onClick={toggleExit}
      >
         {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}

      </Button >
   );
};
