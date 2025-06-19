import { useEffect, useState } from "react"

const useData = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);



    useEffect(() => {
        const fetchData = async (url) => {
            setLoading(true);

            try {
                const res = await fetch(url);

                if (!res.ok) {
                    throw new Error('Something is wrong.....')
                }
                const data = await res.json();
                setData(data.products)

            } catch (error) {
                setError(error.message)

            } finally {
                setLoading(false)
                setError(null)
            }
        }
        fetchData(url)
    }, [url])

    return { data, loading, error }

}


export default useData