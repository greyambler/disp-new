import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ToggleButton.module.scss';
import { useState } from 'react';
import LightIconRigth from 'shared/assets/icons/arrowsRight-ligth.svg';
import DarkIconRigth from 'shared/assets/icons/arrowsRight-dark.svg';
import LightIconLeft from 'shared/assets/icons/arrowsLeft-ligth.svg';
import DarkIconLeft from 'shared/assets/icons/arrowsLeft-dark.svg';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Theme, useTheme } from 'app/providers/ThemeProvider';

interface ToggleButtonProps {
   className?: string;
   collapsed: boolean;
   onToggle: () => void;
}

export const ToggleButton = (props: ToggleButtonProps) => {
   const {
      className,
      collapsed,
      onToggle
   } = props;
   const { theme } = useTheme();

   return (
      <Button
         theme={ThemeButton.CLEAR}
         className={classNames(cls.ToggleButton, {}, [className])}
         onClick={onToggle}
      >
         {theme === Theme.DARK
            ? (collapsed ? <DarkIconRigth /> : <DarkIconLeft />)
            : (collapsed ? <LightIconRigth /> : <LightIconLeft />)
         }
      </Button>
   );
};
