import React from 'react'
import { useState } from 'react';

const StarRating = () => {
    const [rating, setRating] = useState(0);

    const handleClick = (star) => {
        setRating(star);
    };

    return (
        <div>
            {[1, 2, 3, 4, 5].map((star) => (
                <div
                    key={star}
                    onClick={() => handleClick(star)}
                    style={{
                        display: 'inline-block',
                        cursor: 'pointer',
                        color: star <= rating ? 'var(--secondarycolor)' : 'gray',

                    }}
                >
                    {star <= rating ? <i class="ri-star-fill"></i> : <i class="ri-star-line"></i>}

                </div>
            ))}
        </div>
    );
}

export default StarRating