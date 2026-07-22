//#region QR Code reader

//#region prepare scanner

// scanner body
const scannerPage = document.createElement('div');
scannerPage.id = 'qrCodeScanner';

let scanner;

// activate scanner
const qrcodePage = document.getElementById('qrcodePage');

export function startScanner() {
  qrcodePage.appendChild(scannerPage);
  qrcodePage.style.display = 'flex'

  scanner = new Html5QrcodeScanner(
    'qrCodeScanner', {
    fps: 10,
    qrbox: { width: 250, height: 250 },
    aspectRatio: 1.0,
    useBarCodeDetectorIfSupported: true
  }, false)

  function qrReadSucssess(text, result) {
    console.log(text, result);
  }
  function qrReadFailure(error) {

  }

  scanner.render(qrReadSucssess, qrReadFailure)

  // const cancelQrBtn = document.createElement('button');
  // cancelQrBtn.classList.add('icon-cancel');
  // cancelQrBtn.id = 'cancelQrBtn'
  // qrcodePage.appendChild(cancelQrBtn);
  document.getElementById('html5-qrcode-button-camera-permission') ? document.getElementById('html5-qrcode-button-camera-permission').classList.add('icon-notice') : null;
  document.getElementById('html5-qrcode-anchor-scan-type-change').classList.add('icon-photo');
  document.getElementById('qrCodeScanner__header_message').classList.add('icon-warning')

}
document.getElementById('cancelQrBtn').addEventListener('click', () => {
    scannerPage.remove()
    stopScanner()
  })

// diactivate scanner
export function stopScanner() {
  scanner.clear().then(() => console.log('scanner stoped')).catch(error => console.log(error));
  qrcodePage.style.display = 'none'
}

//#endregion

//#endregion
