import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsSearch } from "../../../Redux/Actions/Product/ProductAction";

const ViewSearchProductsHook = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.ProductReducer.allProduct);

    let limit = 20;

    const getProducts = async(page) => {
        getStorge();

        await dispatch(getAllProductsSearch(`limit=${limit}&page=${page}&${queryCat}&${priceMinString}&${priceMaxString}${rateString}`))
    }

    useEffect(() => {
        if(products) {
            getProducts()
        }
    }, [])

    let items = []
    try {
        if(products.data.data) {
            items = products.data.data;
        }
        else {
            items = []
        }
    } catch(e) {}

    let pagination = [];
    try {
        if(products.data.paginationResult) {
            pagination = products.data.paginationResult.numberOfPages
        } else {
            pagination = []
        }
    } catch(err) {}

    //when click pagination
    const onPress = async (page, word) => {
        getStorge();

        await dispatch(getAllProductsSearch(`limit=${limit}&page=${page}&${queryCat}&${priceMinString}&${priceMaxString}`))
    }

    let queryCat = "";
    let priceMin = "";
    let priceMax = "";
    let priceMinString = "";
    let priceMaxString = "";
    let rating = "";
    let rateString = "";
    
    const getStorge = () => {
        if (localStorage.getItem('catChecked') != null) {
            queryCat = localStorage.getItem('catChecked')
        }
        if (localStorage.getItem('priceMin') != null) {
            priceMin = localStorage.getItem('priceMin')
        }
        if (localStorage.getItem('priceMax') != null) {
            priceMax = localStorage.getItem('priceMax')
        }
        // change priceMin to priceMinString
        if(priceMin === '') {
            priceMinString = ''
        } else {
            priceMinString = `price[gte]=${priceMin}`
        }
        // change priceMax to priceMaxString
        if(priceMax === '') {
            priceMaxString = ''
        } else {
            priceMaxString = `price[lte]=${priceMax}`
        }

        if (localStorage.getItem('rating') != null) {
            rating = localStorage.getItem('rating')
        }
        if(rating === '') {
            rateString = ''
        } else {
            rateString = `ratingsAverage=${rating}`
        }
    }

    return [items, pagination, onPress, getProducts]
}

export default ViewSearchProductsHook