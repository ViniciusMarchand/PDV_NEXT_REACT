
import { QrCodePix } from 'qrcode-pix';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { pixInfo } from '@/constants/env';

export default function Pix(props:{value:number}) {
    const { value } = props;

    const [qrCode, setQrCode] = useState<string>('');
    const [rawPix, setRawPix] = useState<string>('');
    const { key, name, city, transactionId } = pixInfo;

    useEffect(() => {
        async function generateDynamicPix() {
            const qrCodePix = QrCodePix({
                version: '01',
                key,
                name,
                city,
                transactionId, 
                value: value,
            })

            

            const rawPixStr = qrCodePix.payload()
            const qrCodeBase64 = await qrCodePix.base64()

            setRawPix(rawPixStr)
            setQrCode(qrCodeBase64)
        }

        void generateDynamicPix();
    }, [key, value])


    
    return <>
    <Image
      src={qrCode}
      alt="Chave pix"
      width={0}
        height={0}
      sizes="100%"
      style={{
        width: '100%',
        height: 'auto',
      }}
    />
    <p className='text-center'>
        {key}
    </p>
    </>;
}