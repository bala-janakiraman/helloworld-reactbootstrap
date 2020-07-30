import React from 'react'

const  SearchResults =(props)=>(
<>
<h2>Your search results for <b>{props.message}</b> ... </h2>
<p>It does not matter what your search is, the answer is <b>42!</b></p>
</>
)


export default SearchResults