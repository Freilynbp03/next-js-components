import React, { useState } from "react";
import styles from "@styles/PriceCard.module.css";

import Image from 'next/image';

const array = [
    {id:1, name: 'Basic', priceByMonthly: 19.99, priceByAnnually: 199.99, benefits: ['500 GB Storage', '2 Users Allowed', 'Send up to 3 GB']},
    {id:2, name: 'Professional', priceByMonthly: 24.99, priceByAnnually: 249.99, benefits: ['1 TB Storage', '5 Users Allowed', ' Send up to 10 GB']},
    {id:3, name: 'Master', priceByMonthly: 39.99, priceByAnnually: 399.99, benefits: [' 2 TB Storage', '10 Users Allowed', 'Send up to 20 GB']},
]

import bgBottom from '@assets/images/pricing-component/bg-bottom.svg'
import bgTop from '@assets/images/pricing-component/bg-top.svg'

const PriceCard = () => {
    const [monthly, changePaymentPeriod] = useState<Boolean>(false)

    function handleClick() {
        changePaymentPeriod(!monthly)
    }
    return (
        <>
        <div className={styles.container}>
            <div className={styles['bg-bottom']}>
                <Image src={bgBottom} alt="bg-bottom" />
            </div>
            <div className={styles['bg-top']}>
                <Image src={bgTop} alt="bg-top" />
            </div>
            <div className={styles.header}>
                <h2> Our Pricing</h2>
                <div>
                    <span>Annually</span>
                    <div className={`${styles.switch} ${monthly ? styles.active : ''}`} onClick={handleClick}></div>
                    <span>Monthly</span>
                </div>
            </div>
            <div className={styles['grid-container']}>
                {array.map(item=>
                    <div className={styles.card} key={item.id}>
                        <h6>{item.name}</h6>
                        <div className={styles.price}>
                            <span>$</span><h1>{monthly ? item.priceByMonthly : item.priceByAnnually}</h1>
                        </div>
                        <ul className={styles.benefits}>
                            {item.benefits.map((item, index)=>
                                <li key={index}>{item}</li>
                            )}
                        </ul>
                        <button>LEARN MORE</button>
                    </div>
                )}
            </div>
        </div>
        </>
    )
}

export default PriceCard
