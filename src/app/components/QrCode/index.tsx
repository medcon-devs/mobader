import React from 'react';
import { QRCodeSVG } from 'qrcode.react';

type QRCodeGeneratorProps = {
  value: string; // Ensure the value is a string
};

const QRCodeGenerator: React.FC<QRCodeGeneratorProps> = ({ value }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: 300, height: 300 }}>
      <QRCodeSVG value={value} size={256} style={{ border: '6px solid #000', padding: '8px' ,borderRadius:'10px'}} />
    </div>
  );
};

export default QRCodeGenerator;
