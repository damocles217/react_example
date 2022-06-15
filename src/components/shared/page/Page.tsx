import React, { ComponentType, ReactNode } from 'react';
import style from './page.module.scss';

// Types
import { PagePropsType } from '../../../../types/page';

const Page: ComponentType<PagePropsType> = ({ children }) => {
	return <div className={style.page}>{children}</div>;
};

export default Page;
