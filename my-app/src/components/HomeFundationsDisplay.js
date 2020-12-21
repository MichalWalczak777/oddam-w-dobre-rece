import React from "react";
import {useState, useEffect} from "react";
import Pagination from "./Pagination";

const HomeFundationsDisplay = ({data, header}) => {

    const [fundationsList, setFundationsList] = useState(data);
    const [currentPage, setCurrentPage] = useState(1);

    console.log(data);
    console.log(fundationsList);

    useEffect( ()=>{
        setFundationsList(data);
        setCurrentPage(1);
    },[data])

    const fundationsPerPage = 3;
    const indexOfLastFundation = currentPage * fundationsPerPage;
    const indexOfFirstFundation = indexOfLastFundation - fundationsPerPage;
    const currentFundations = fundationsList?.slice(indexOfFirstFundation, indexOfLastFundation);

    const paginate = pageNumber =>{
        setCurrentPage(pageNumber.selected+1);
    }

    return(
        <div className="homeFundationsDisplay">
            <p className="homeFundationsDisplay-header">{header}</p>
            <ul className="homeFundationsDisplay-list">
                {currentFundations?.map((fundation, i) => 
                                                <li key={fundation.name} >
                                                    <div className="homeFundationsDisplay-fundationDataBox">
                                                        <p className="homeFundationsDisplay-fundationName">{fundation.name}</p>
                                                        <p className="homeFundationsDisplay-fundationDescription">{fundation.description}</p>
                                                    </div>
                                                    <p className="homeFundationsDisplay-fundationNeeds">{fundation.needs}</p>
                                                </li>)}
            </ul>
            <Pagination positionsTotal={fundationsList.length} positionsPerPage={fundationsPerPage} paginate={paginate}></Pagination>
        </div>
    )
}


export default HomeFundationsDisplay;