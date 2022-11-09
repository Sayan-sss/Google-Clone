import {useState, useEffect} from 'react'
import API_KEY from './Keys'

const CONTEXT_KEY = "7235fa12cc978436f";

const useGoogleSearch = (term) => {
  const [data, setdata] = useState(null);
  useEffect(() => {
    const fetchData = async() => {
        fetch(
            `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
        )
        .then(response => response.json())
        .then(result => {
            setdata(result);
        })
    }
    fetchData();
  }, [term])
  return {data}
};

export default useGoogleSearch
