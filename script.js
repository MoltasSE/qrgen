function generateQRCode() {
  const text = document.getElementById('text-input').value;
  const qrCodeContainer = document.getElementById('qr-code');

  // Clear any existing QR code
  qrCodeContainer.innerHTML = "";

  if (text.trim() === "") {
    alert("Please enter text or a URL to generate a QR code.");
    return;
  }

  // Generate QR code
  QRCode.toCanvas(qrCodeContainer, text, {
    width: 200,
    margin: 2,
    color: {
      dark: "#000000",  // QR code color
      light: "#ffffff"  // Background color
    }
  }, (error) => {
    if (error) {
      console.error("QR Code generation failed:", error);
    }
  });
}
