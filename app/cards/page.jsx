"use client";
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import style from './page.module.css';
import { useRouter } from 'next/router';
// npm install react-icons --save

function cardspage() {
    const [cardsData, setCardsData] = useState([]);
    const router = useRouter();
    
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get("/api/cards");
                setCardsData(response.data.cards);
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, []);
    console.log(cardsData);

    const editCard = (id) => {
        router.push(`/cards/${id}`);
    }
 

    const deleteCard = async (id) => {
        const url = `/api/cards/${id}`;
        try {
            await axios.delete(url);
            setCardsData(cardsData.filter((card) => card.id !== id));
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <main>
            <h1>Card List</h1>
            <div className={style.containerCard}>
            {
                cardsData.map((card) => (
                        <div key={card.id} >
                            <div className={style.card}>       
                            <div className={style.containerButtons}>
                             <h2 className={style.cardName}>{card.name}</h2>
                             <div className={style.containerS}>
                                <img src={"/images/info.png"} width={37} height={35} className={style.buttonEdit} onClick={() => editCard(card.id)}/>
                                <img src={"/images/excluir.png"}  width={40} height={36} className={style.buttonDelete} onClick={() => deleteCard(card.id)}/>
                            </div>    
                            </div>   
                            <img src={card.image} width={200} height={195}/>
                            {card.type ? <p className={style.cardName}>{card.type}</p> : null}
                           
                        </div>
                        </div>
                    ))
            }
            </div>

        </main>

    )
}

export default cardspage