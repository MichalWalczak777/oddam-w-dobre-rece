import React from "react";
import {useState, useEffect} from "react";
import Pagination from "./Pagination";

const HomeFundationsDisplay = ({data}) => {

    const [fundationsList, setFundationsList] = useState(data);
    const [currentPage, setCurrentPage] = useState(1);

    console.log(data);
    console.log(fundationsList);

    useEffect( ()=>{
        setFundationsList(data);
    },[data])

    const fundationsPerPage = 3;
    const indexOfLastFundation = currentPage * fundationsPerPage;
    const indexOfFirstFundation = indexOfLastFundation - fundationsPerPage;
    const currentFundations = fundationsList?.slice(indexOfFirstFundation, indexOfLastFundation);

    const paginate = pageNumber =>{
        setCurrentPage(pageNumber.selected+1);
    }

    return(
        <>
            <ul>
                {currentFundations?.map((fundation, i) => 
                                                <li key={fundation.name} >
                                                    <div>
                                                        <p>{fundation.name}</p>
                                                        <p>{fundation.description}</p>
                                                    </div>
                                                    <p>{fundation.needs}</p>
                                                </li>)}
            </ul>
            <Pagination positionsTotal={fundationsList.length} positionsPerPage={fundationsPerPage} paginate={paginate}></Pagination>
        </>
    )
}


export default HomeFundationsDisplay;