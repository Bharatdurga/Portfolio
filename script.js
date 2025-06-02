let currentCertificate = 1;

function showCertificate(certificateId) {
    const certificate = document.getElementById(certificateId);
    const popupImage = document.getElementById('popupImage');
    popupImage.src = certificate.querySelector('img').src;
    document.getElementById('popup').style.display = 'block';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

function showNextCertificate() {
    currentCertificate++;
    if (currentCertificate > 3) {
        currentCertificate = 1;
    }
    showCertificate('certificate' + currentCertificate);
}
