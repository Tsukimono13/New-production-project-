import { Link, Route, Routes } from 'react-router-dom';
import './styles/index.scss';
import { Suspense } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { useTranslation } from 'react-i18next';
import { AppRouter } from './providers/ThemeProvider/router';
import { useTheme } from './providers/ThemeProvider';

export const App = () => {
    const { theme } = useTheme();
    const { t } = useTranslation();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback={<div>{t('Loading...')}</div>}>
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};
