import React from 'react';
import { classNames } from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss';
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { ExitButton } from 'shared/ui/ExitButton';
import { MailButton } from 'shared/ui/MailButton';
import { UserData } from 'shared/ui/UserData';
import { EnterDate } from 'shared/ui/EnterDate';

interface NavbarProps {
   className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
   return (
      <div className={classNames(cls.navbar, {}, [className])}>
         <div className={cls.divLeft}>
               Диспетчерский центр
         </div>
         <div className={cls.divRight}>
            <MailButton />

            <div className={cls.registrData}>
               <UserData />
               <EnterDate />

            </div>
            <ExitButton />
         </div>
      </div>
   );
};


