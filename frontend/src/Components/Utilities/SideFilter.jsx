import React, { useState } from 'react'
import Slider from '@mui/material/Slider';
import StarIcon from '@mui/icons-material/Star';
import FilterHook from '../../Hooks/Search/FilterHook';
import Rating from 'react-rating';
import { FaRegStar, FaStar } from "react-icons/fa6";

const SideFilter = () => {
    const [itemsCat, clickCategory, priceMin, onChagePriceMin, priceMax, onChagePriceMax, starRating, onChangeRating, clearRating] = FilterHook();
    
    return (
        <div className='sideFilter'>
            <div className='priceRange'>
                <h6>price <span>range</span></h6>
                <div className='currentRange'>
                    <input type='text' placeholder='MIN' value={priceMin} onChange={onChagePriceMin} />
                    <span>to</span>
                    <input type='text' placeholder='MAX' value={priceMax} onChange={onChagePriceMax} />
                </div>
            </div>
            <div className='catSection'>
                <h6>categories</h6>
                <div className='catInpits'>
                    <div className="d-flex gap-2">
                        <input type="checkbox" value="0" onChange={clickCategory} />
                        <div className="filter-sub me-2 ">all</div>
                    </div>
                    {
                        itemsCat ?
                            itemsCat.map((item, index) => (
                                <div className="d-flex gap-2" key={index}>
                                    <input type="checkbox" value={item._id} onChange={clickCategory} />
                                    <div className="filter-sub me-2 ">{item.name}</div>
                                </div>
                            ))
                        : null
                    }
                </div>
            </div>
            
            <div className='rateSection'>
                <h6>ratings above</h6>
                <div className='rateStars'>
                    <Rating
                        emptySymbol={<FaRegStar />}
                        fullSymbol={<FaStar />}
                        fractions={2}
                        className='fs-5 text-warning'
                        initialRating={starRating}
                        onChange={onChangeRating}
                    />
                    <div className='btn clearRate' onClick={clearRating}>clear rating</div>
                </div>
            </div>
        </div>
    )
}

export default SideFilter