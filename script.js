function generateQRCode() {
  const text = document.getElementById('text-input').value; // Hämta texten
  const qrCodeContainer = document.getElementById('qr-code-container'); // Behållare för QR-koden

  // Töm eventuell tidigare QR-kod
  qrCodeContainer.innerHTML = "";

  // Kontrollera om input är tomt
  if (text.trim() === "") {
    alert("Please enter text or a URL to generate a QR code.");
    return;
  }

  // Skapa ett canvas-element
  const canvas = document.createElement("canvas");
  qrCodeContainer.appendChild(canvas);

  // Generera QR-koden och rita den i canvas
  QRCode.toCanvas(canvas, text, {
    width: 200, // Bredd på QR-koden i pixlar
    margin: 2,  // Marginal runt QR-koden
    color: {
      dark: "#000000",  // Svart för själva QR-koden
      light: "#ffffff"  // Vit bakgrund
    }
  }, (error) => {
    if (error) {
      console.error("QR Code generation error:", error);
      alert("Failed to generate QR Code. Please try again.");
    }
  });
}
