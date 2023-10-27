import React, { useState } from 'react';

const CaptchaGenerator = () => {
    const [captchaText, setCaptchaText] = useState(generateCaptchaText());

    function generateCaptchaText() {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let captcha = '';
        for (let i = 0; i < 6; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            captcha += characters[randomIndex];
        }
        return captcha.toUpperCase();
    }

    const refreshCaptcha = () => {
        setCaptchaText(generateCaptchaText());
    };

    return (
        <div>
            <h2>CAPTCHA Generator</h2>
            <div className="captcha">
                <div className="captcha-image">{captchaText}</div>
                <button onClick={refreshCaptcha}>Refresh</button>
            </div>
        </div>
    );
};

export default CaptchaGenerator;
