import React, { ChangeEvent, useState } from 'react';
import Flag from 'react-world-flags';
import styles from './style.module.css';

interface PhoneInputProps {
    phoneNumber: string;
    setPhoneNumber: (value: string) => void;
}

interface ICountryOptions {
    code: string;
    name: string;
    dialCode: string;
}

const PhoneInput: React.FC<PhoneInputProps> = ({ phoneNumber, setPhoneNumber }) => {
    const [selectedCountryCode, setSelectedCountryCode] = useState<string>('AU'); 

    const countryOptions :ICountryOptions[]= [
        { code: 'AU', name: 'Australia', dialCode: '+61' },
        { code: 'US', name: 'United States', dialCode: '+1' },
        { code: 'GB', name: 'United Kingdom', dialCode: '+44' },
        { code: 'CA', name: 'Canada', dialCode: '+1' },
        // Add more countries as needed
    ];

    const handleCountryChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setSelectedCountryCode(e.target.value);
    };

    const selectedCountry = countryOptions.find((country:ICountryOptions) => country.code === selectedCountryCode);

    return (
        <div className={styles.mobileNumberInputContainer}>
            <label htmlFor="mobileNumber">Mobile Number</label>
            <div className={styles.inputWithFlag}>
                {selectedCountry && (
                    <>
                        <Flag code={selectedCountry.code} className={styles.flag} />
                        <span className={styles.countryCode}>{selectedCountry.dialCode}</span>
                    </>
                )}
                <input
                    type="tel"
                    id="mobileNumber"
                    value={phoneNumber}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setPhoneNumber(e.target.value)}
                    className={styles.input}
                />
                <select
                    value={''}
                    onChange={handleCountryChange}
                    className={styles.select}
                >
                    {/* <option value="AU">Australia</option>
                    <option value="US">United States</option>
                    <option value="GB">United Kingdom</option>
                    <option value="CA">Canada</option> */}
                    {/* Add more options as needed */}
                </select>
            </div>
        </div>
    );
};

export default PhoneInput;
