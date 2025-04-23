import { QrCodePix } from "qrcode-pix";
import Image from "next/image";
import { useEffect, useState } from "react";
import { pixInfo } from "@/constants/env";

function generateTransactionId(): string {
  const timestamp = Date.now().toString(36);
  const random = Math.random()
    .toString(36)
    .substring(2, 25 - timestamp.length);
  return (timestamp + random).substring(0, 25);
}

export default function Pix(props: { value: number }) {
  const { value } = props;

  const [qrCode, setQrCode] = useState<string>("");
  const [rawPix, setRawPix] = useState<string>("");
  const { key, name, city } = pixInfo;
  const transactionId = generateTransactionId();

  useEffect(() => {
    async function generateDynamicPix() {
      const qrCodePix = QrCodePix({
        version: "01",
        key,
        name,
        city,
        transactionId,
        value: value,
      });

      const rawPixStr = qrCodePix.payload();
      const qrCodeBase64 = await qrCodePix.base64();

      setRawPix(rawPixStr);
      setQrCode(qrCodeBase64);
    }

    void generateDynamicPix();
  }, [key, value]);

  return (
    <>
      <Image
        src={qrCode}
        alt="Chave pix"
        width={0}
        height={0}
        sizes="100%"
        style={{
          width: "100%",
          height: "auto",
        }}
      />
      <p className="text-center">
        Abra o aplicativo do seu banco e escaneie o QR Code.
      </p>
      <p className="text-center font-semibold">Chave PIX: {key}</p>
    </>
  );
}
