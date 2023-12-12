import { classNames } from 'shared/lib/classNames/classNames';
import { Theme, useTheme } from "app/providers/ThemeProvider";
import cls from './ExitButton.module.scss';
import EnableIcon from 'shared/assets/icons/exitEnable.svg';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

interface ExitButtonProps {
   className?: string;
}

export const ExitButton = (props: ExitButtonProps) => {
   const {
      className,
   } = props;

   const toggleExit = () => {
      console.log("exit ")
   }

   return (
      <Button
         theme={ThemeButton.CLEAR}
         className={classNames(cls.ExitButton, {}, [className])}
         onClick={toggleExit}
      >
         <EnableIcon />
      </Button >
   );
};
