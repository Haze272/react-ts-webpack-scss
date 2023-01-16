import * as React from 'react';

import styles from './App.scss';

export const App: React.FC = () => {
    const [count, setCount] = React.useState<number>(0);

    const onIncrement = React.useCallback(() => setCount(count + 1), [count]);

    return (
        <div className={styles['App']}>
            <h1>Hello World Template!</h1>
        </div>
    );
};
