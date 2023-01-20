import React, {useState} from "react";
import Card from "./Card";
import axios from "axios";
const Main = () => {
    const [search, setSearch] = useState("");
    const [bookData, setBookData] = useState([]);
    const searchBook = (evt) => {
        if (evt.key==="Enter") {
            axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyB_XtbJ3adfgScGYQJY34Sy2W-YhoraD-Y'+'&maxResults=40')
            .then(results=>setBookData(results.data.items))
            .catch(err=>console.log(err))
        }
    }
    return (
        <>
            {/* Navbar */}
            <div className="navbar">
                <div className="logo">
                    <a href="">FindBook</a>
                </div>
            </div>

            {/* Header Section */}
            <section className="header">
                <div className="row">
                    <h2>Find Your Book</h2>
                    <div className="search">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input type="text" value={search} onChange={e=>setSearch(e.target.value)} onKeyPress={searchBook} placeholder="Enter Your Book Name" />
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="container">
                {
                    <Card book={bookData} />
                }
            </section>
        </>
    )
}
export default Main;