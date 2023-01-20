import React, { useState } from "react";
import { FormatRupiah } from "@arismun/format-rupiah";
import Modal from "./Modal";

const Card = ({book}) => {
    
    const [show, setShow] = useState(false);
    const [bookItem, setItem] = useState();
    return (
        <>
            {
                book.map((item) => {
                    let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.thumbnail;
                    let title = item.volumeInfo.title;
                    let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
                    if (thumbnail != undefined && amount != undefined) {
                        return (
                            <>
                                <div className="card" onClick={()=>{setShow(true);setItem(item)}}>
                                    <img src={thumbnail} alt="" />
                                    <div className="bottom">
                                        <h3 className="title">{title}</h3>
                                    </div>
                                    <p className="amount">
                                        <FormatRupiah value={amount} />
                                    </p>
                                </div>
                                <Modal show={show} item={bookItem} onClose={()=>setShow(false)}/>
                            </>
                        )       
                    }    
                })
            }
        </>
    )
}
export default Card;