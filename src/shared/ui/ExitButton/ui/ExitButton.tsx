import { classNames } from 'shared/lib/classNames/classNames';
import { Theme, useTheme } from "app/providers/ThemeProvider";
import cls from './ExitButton.module.scss';
import LightIcon from 'shared/assets/icons/exit-ligth.svg';
import DarkIcon from 'shared/assets/icons/exit-dark.svg';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

interface ExitButtonProps {
   className?: string;
}

export const ExitButton = (props: ExitButtonProps) => {
   const {
      className,
   } = props;
   const { theme } = useTheme();

   const toggleExit = () => {
      console.log("exit ")
   }

   return (
      <Button
         theme={ThemeButton.CLEAR}
         className={classNames(cls.ExitButton, {}, [className])}
         onClick={toggleExit}
      >
         {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
      </Button >
   );
};
