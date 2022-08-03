import React from "react";

// import styles
import styles from "@styles/QrCode.module.css";
import Image from "next/image";

// import images
import qrCodeImage from '@assets/images/qr-code/image-qr-code.png'

const QrCode = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.card}>
                    <div className={styles['container-image-qr-code']}>
                        <Image src={qrCodeImage} alt="image-qr-code"/>
                    </div>
                    <h2>Improve your front-end skills by building projects</h2>
                    <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
                </div>
            </div>
        </>
    )
}

export default QrCode;