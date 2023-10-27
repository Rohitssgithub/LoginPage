import React, { useState } from 'react';

const CaptchaGenerator = () => {
    const [captchaText, setCaptchaText] = useState(generateCaptchaText());

    function generateCaptchaText() {
        const numbers = '0123456789';
        const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';

        let captcha = '';
        captcha += getRandomCharacter(numbers, 2);
        captcha += getRandomCharacter(uppercaseLetters, 2);
        captcha += getRandomCharacter(lowercaseLetters, 2);

        // Shuffle the captcha text to randomize the order
        captcha = shuffleString(captcha);

        return captcha;
    }

    function getRandomCharacter(source, count) {
        let result = '';
        for (let i = 0; i < count; i++) {
            const randomIndex = Math.floor(Math.random() * source.length);
            result += source[randomIndex];
        }
        return result;
    }

    function shuffleString(string) {
        console.log('string', string)
        const array = string.split('');
        console.log('array', array)
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array.join('');
    }

    const refreshCaptcha = () => {
        setCaptchaText(generateCaptchaText());
    };

    return (
        <div>
            <h2>CAPTCHA Generator</h2>
            <div className="captcha">
                <div className="captcha-image">{captchaText}</div>
                <button className='btn btn-danger' onClick={refreshCaptcha}>Refresh</button>
            </div>
        </div>
    );
};

export default CaptchaGenerator;
