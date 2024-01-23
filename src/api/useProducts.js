import axios from './axios';
import { useEffect, useState } from 'react'

export default function useProducts() {
    const [data, setData] = useState()
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        axios.get("/products").then(res => res.data).then(data => {
            setData(data)
        }).finally(() => {
            setLoading(false)
        })
    }, [])

    return {
        data: data,
        loading: loading,
    }
}
