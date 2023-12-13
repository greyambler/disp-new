import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import React, { useState } from "react";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";
import { ToggleButton } from 'shared/ui/ToggleButton/ui/ToggleButton';
import { LOCAL_STORAGE_COLLAPST_KEY } from 'app/providers/ThemeProvider/lib/ThemeContext';

interface SidebarProps {
   className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
   const [collapsed, setCollapsed] = useState(localStorage.getItem(LOCAL_STORAGE_COLLAPST_KEY) === "true")

   const onToggle = () => {
      setCollapsed(prev => !prev);
      localStorage.setItem(LOCAL_STORAGE_COLLAPST_KEY, "" + !collapsed)
   }

   return (
      <div
         className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
      >
         <div className={cls.toggleButton}>
            <ToggleButton collapsed={collapsed} onToggle={onToggle} />
         </div>

         <div className={cls.switchers}>
            <ThemeSwitcher />
         </div>
      </div>
   );
};
