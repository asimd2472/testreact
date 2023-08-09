import React, { useState, useEffect } from 'react';
import useInfiniteScroll from "./useInfiniteScroll";

export default function List() {
    const [listItems, setListItems] = useState(Array.from(Array(30).keys(), n => n + 1));
    const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreListItems);

    function fetchMoreListItems() {
        setTimeout(() => {
        setListItems(prevState => ([...prevState, ...Array.from(Array(20).keys(), n => n + prevState.length + 1)]));
        setIsFetching(false);
        }, 1000);
    }

    function fetchdata(){

    }

  return (
    <div>
        <ul className="list-group mb-2">
            {listItems.map((listItem , keys)=> <li key={keys} className="list-group-item">List Item {listItem}</li>)}
        </ul>
        {isFetching && 'Fetching more list items...'}
    </div>
  )
}
