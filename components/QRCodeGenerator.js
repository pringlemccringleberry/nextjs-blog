import React, { useState } from 'react';
import QRCode from 'qrcode.react';

const QRCodeGenerator = () => {
  const [inputText, setInputText] = useState("");

  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={inputText} onChange={handleChange} placeholder="Enter text here..."/>
      <div>
        <QRCode value={inputText} />
      </div>
    </div>
  );
};

export default QRCodeGenerator;
