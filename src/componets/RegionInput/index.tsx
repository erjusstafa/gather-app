import React, { useState } from 'react';
import Flag from 'react-world-flags';
import styles from './styles.module.css';

const RegionInput: React.FC = () => {
    const [selectedRegion, setSelectedRegion] = useState<string>('AU');

    return (
        <div className={styles.regionInputContainer}>
            <label htmlFor="region">Region</label>
            <div className={styles.inputWithFlag}>
                <Flag code={selectedRegion} className={styles.flag} />
                <select
                    value={selectedRegion}
                    onChange={(e) => setSelectedRegion(e.target.value)}
                    className={styles.select}
                >
                    <option value="AU" className={styles.option}>Australia</option>
                    <option value="US" className={styles.option}>United States</option>
                    <option value="GB" className={styles.option}>United Kingdom</option>
                    <option value="CA" className={styles.option}>Canada</option>
                </select>
            </div>
        </div>
    );
};

export default RegionInput;
