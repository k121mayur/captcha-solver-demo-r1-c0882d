function getCaptchaText() {
    // Simulate solving captcha
    setTimeout(() => {
        document.getElementById('captcha-text').innerText = 'Solved Text';
    }, 15000);
}

function loadCaptcha() {
    const urlParams = new URLSearchParams(window.location.search);
    const captchaUrl = urlParams.get('url') || './assets/sample.png';
    document.getElementById('captcha-image').src = captchaUrl;
    getCaptchaText();
}

window.onload = loadCaptcha;
