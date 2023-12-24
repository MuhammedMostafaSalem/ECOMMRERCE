import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../../Redux/Actions/Category/CategoryAction";
import ViewSearchProductsHook from "../Admin/Product/ViewSearchProductsHook";

const FilterHook = () => {
    const [items, pagination, onPress, getProducts] = ViewSearchProductsHook();
    
    const dispatch = useDispatch();
    const [priceMin, setPriceMin] = useState('');
    const [priceMax, setPriceMax] = useState('');
    const [starRating, setStarRating] = useState('')
    const [catChecked, setCatChecked] = useState([])

    const categories = useSelector(state => state.CategoryReducer.allCategories);

    useEffect(() => {
        if(categories) {
            dispatch(getAllCategories())
        }
    }, [])

    let itemsCat = []
    try {
        if(categories.data.data) {
            itemsCat = categories.data.data;
        }
        else {
            itemsCat = []
        }
    } catch(e) {}

    var queryCat = "";
    //when user press any category
    const clickCategory = (e) => {
        let value = e.target.value;

        if(value === "0") {
            setCatChecked([])
        } else {
            if(e.target.checked === true) {
                setCatChecked([...catChecked, value])
            } else if(e.target.checked === false) {
                const newArry = catChecked.filter(e => e !== value)
                setCatChecked(newArry)
            }
        }
    }
    useEffect(() => {
        queryCat = catChecked.map(val => 'category[in][]=' +val).join('&');
        localStorage.setItem('catChecked', queryCat)
        setTimeout(() => {
            getProducts()
        }, 1000)
    }, [catChecked])
    
    // when add price
    const onChagePriceMin = (e) => {
        localStorage.setItem("priceMin", e.target.value)
        setPriceMin(e.target.value)
    }
    const onChagePriceMax = (e) => {
        localStorage.setItem("priceMax", e.target.value)
        setPriceMax(e.target.value)
    }
    useEffect(() => {
        setTimeout(() => {
            getProducts();
        }, 1000);
    }, [priceMin, priceMax])

    //when user press any ratingsAverage
    const onChangeRating = (newRating) => {
        localStorage.setItem("rating", newRating)
        setStarRating(newRating)
    }
    const clearRating = (event) => {
        localStorage.removeItem("rating")
        setStarRating('');
    }
    useEffect(() => {
        setTimeout(() => {
            getProducts();
        }, 1000);
    }, [starRating])

    return [itemsCat, clickCategory, priceMin, onChagePriceMin, priceMax, onChagePriceMax, starRating, onChangeRating, clearRating]
}

export default FilterHook