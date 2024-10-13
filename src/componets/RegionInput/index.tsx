import React, { useState } from 'react';
import Flag from 'react-world-flags';
import styles from './styles.module.css';

const RegionInput: React.FC = () => {
    const [selectedRegion, setSelectedRegion] = useState<string>('AU'); // Default to Australia

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
                <option value="AU">Australia</option>
                <option value="US">United States</option>
                <option value="GB">United Kingdom</option>
                <option value="CA">Canada</option>
                {/* Add more options as needed */}
            </select>
            </div>
            
        </div>
    );
};

export default RegionInput;
