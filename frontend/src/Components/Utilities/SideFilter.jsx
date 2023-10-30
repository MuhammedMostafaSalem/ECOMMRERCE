import React from 'react'
import Slider from '@mui/material/Slider';
import StarIcon from '@mui/icons-material/Star';

const SideFilter = () => {
    return (
        <div className='sideFilter'>
            <div className='priceSection'>
                <h6>price</h6>
                <div className='rangePrice d-flex gap-3'>
                    <p>0</p>
                    <Slider
                        size="small"
                        aria-label="Small"
                        valueLabelDisplay="auto"
                        min={0}
                        max={2500}
                    />
                    <p>2500</p>
                </div>
            </div>
            <div className='catSection'>
                <h6>categories</h6>
                <div className='catInpits'>
                    <div className="d-flex gap-2">
                        <input type="checkbox" value="" />
                        <div className="filter-sub me-2 ">الكل</div>
                    </div>
                    <div className="d-flex gap-2">
                        <input type="checkbox" value="" />
                        <div className="filter-sub me-2 ">موبايل</div>
                    </div>
                    <div className="d-flex gap-2">
                        <input type="checkbox" value="" />
                        <div className="filter-sub me-2 ">لابتوب</div>
                    </div>
                    <div className="d-flex gap-2">
                        <input type="checkbox" value="" />
                        <div className="filter-sub me-2 ">مكياج</div>
                    </div>
                    <div className="d-flex gap-2">
                        <input type="checkbox" value="" />
                        <div className="filter-sub me-2 ">سماعة</div>
                    </div>
                </div>
            </div>
            
            <div className='rateSection'>
                <h6>ratings above</h6>
                <div className='rateStars'>
                    <div className="d-flex gap-2">
                        <StarIcon className='iconStar' />
                    </div>
                    <div className="d-flex gap-2">
                        <StarIcon className='iconStar' />
                        <StarIcon className='iconStar' />
                    </div>
                    <div className="d-flex gap-2">
                        <StarIcon className='iconStar' />
                        <StarIcon className='iconStar' />
                        <StarIcon className='iconStar' />
                    </div>
                    <div className="d-flex gap-2">
                        <StarIcon className='iconStar' />
                        <StarIcon className='iconStar' />
                        <StarIcon className='iconStar' />
                        <StarIcon className='iconStar' />
                    </div>
                    <div className="d-flex gap-2">
                        <StarIcon className='iconStar' />
                        <StarIcon className='iconStar' />
                        <StarIcon className='iconStar' />
                        <StarIcon className='iconStar' />
                        <StarIcon className='iconStar' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideFilter