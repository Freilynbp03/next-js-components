import React from "react";

import styles from "@styles/PriceCard.module.css"

const array = [
    {id:1, name: 'Basic', price: 19.99, benefits: ['500 GB Storage', '2 Users Allowed', 'Send up to 3 GB']},
    {id:2, name: 'Professional', price: 24.99, benefits: ['1 TB Storage', '5 Users Allowed', ' Send up to 10 GB']},
    {id:3, name: 'Master', price: 39.99, benefits: [' 2 TB Storage', '10 Users Allowed', 'Send up to 20 GB']},
]
// Our Pricing Annually Monthly Basic $19.99 $199.99 500 GB Storage 2 Users Allowed Send up to 3 GB Learn More Professional $24.99 $249.99 1 TB Storage 5 Users Allowed Send up 
// to 10 GB Learn More Master $39.99 $399.99 2 TB Storage 10 Users Allowed Send up to 20 GB Learn More
// Challenge by Frontend Mentor. Coded by Your Name Here.
const PriceCard = () => {
    return (
        <>
            <div className={styles.header}>
                <h2> Our Pricing</h2>
                <div>
                    <span>Annually</span>
                    {/* switch */}
                    <span>Monthly</span>
                </div>
            </div>
            <div className={styles['grid-container']}>
                {array.map(item=>
                    <div className={styles.card} key={item.id}>
                        <h6>{item.name}</h6>
                        <div className={styles.price}>
                            <span>$</span><h1>{item.price}</h1>
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
        </>
    )
}

export default PriceCard
