
import { QrCodePix } from 'qrcode-pix';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Pix(props:{value:number}) {
    const { value } = props;

    const [qrCode, setQrCode] = useState<string>('');
    const [rawPix, setRawPix] = useState<string>('');
    const key = 'vinicius.dasilva.marchand@gmail.com';

    useEffect(() => {
        async function generateDynamicPix() {
            const qrCodePix = QrCodePix({
                version: '01',
                key: 'vinicius.dasilva.marchand@gmail.com',
                name: 'Vinicius Marchand',
                city: 'SAO_PAULO',
                transactionId: '312312e', 
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