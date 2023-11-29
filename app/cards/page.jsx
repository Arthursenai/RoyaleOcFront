"use client";
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import style from './page.module.css';
import { useRouter } from 'next/navigation';
// npm install react-icons --save
// Todas as funções devem ser comentadas

function cardspage() {
    const [cardsData, setCardsData] = useState([]);
    const [search, setSearch] = useState("");
    const [filteredCards, setFilteredCards] = useState([cardsData]);
    const [selectedRarity, setSelectedRarity] = useState("all");
    const [selectedType, setSelectedType] = useState("all");
    const [selectedElixir, setSelectedElixir] = useState("all");
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


    useEffect(() => {
        handleSearch();
    }
    , [search, selectedRarity, selectedType, selectedElixir]);


  

    
    const filterCards = () => {
        let filtering = cardsData.slice();
        let filter = false

        if (selectedRarity !== "all") {
            filtering = filtering.filter((card) =>{
                filter = true;
                return card.rarity === selectedRarity;
            });
        }
        if (selectedType !== "all") {
            filtering = filtering.filter((card) =>{
                filter = true;
                return card.type === selectedType;
            });
        }
        if (selectedElixir !== "all") {
            filtering = filtering.filter((card) =>{
                filter = true;
                return card.elixir === selectedElixir;
            });
        }
        return filter;
    }

    const handleSearch = () => {
        //  cópia dos dados originais
        let cardsToFilter = cardsData.slice(); 
        
            const searchLower = search.toLowerCase();
            cardsToFilter = cardsToFilter.filter((card) => {
                const cardName = card.name?.toLowerCase() || '';
                return cardName.includes(searchLower);
            });
    
        
            setFilteredCards(cardsToFilter);
        };

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
            <h1 className={style.title}>RoyaleOcto</h1>
            <div className={style.containerFilters}>
                <input type="text" placeholder="Pesquisar Cartas" className={style.search} onChange={(e) => setSearch(e.target.value)}/>
                <select className={style.select} onChange={(e) => setSelectedType(e.target.value)}>
                    <option value="all">Tipo:</option>
                    <option value="Tropa">Tropa</option>
                    <option value="Construção">Construção</option>
                    <option value="Feitiço">Feitiço</option>
                </select>
                <select className={style.select} onChange={(e) => setSelectedRarity(e.target.value)}>
                    <option value="all">Raridade:</option>
                    <option value="Comum">Comum</option>
                    <option value="Raro">Raro</option>
                    <option value="Épico">Épico</option>
                    <option value="Lendário">Lendário</option>
                    <option value="Campeão">Campeão</option>
                </select>
                <select className={style.select} onChange={(e) => setSelectedElixir(e.target.value)}>
                    <option value="all">Elixir:</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value ="10">10</option>
                </select>
                </div>
            <div className={style.containerCard}>
                { filterCards == true ? filteredCards.map((card) => 
                  <div key={card.id} >
                  <div className={style.card}>       
                  <div className={style.containerButtons}>
                   <div className={style.containerS}>
                      <img src={"/images/info.png"} width={31} height={29} className={style.buttonEdit} onClick={() => editCard(card.id)}/>
                      <img src={"/images/excluir.png"}  width={34} height={30} className={style.buttonDelete} onClick={() => deleteCard(card.id)}/>
                  </div>    
                  </div>  
                  <div className={style.containerImage}> 
                  <img src={card.image} width={110} height={125}/>
                  </div>
                   <p className={style.cardName}>{card.name}</p>
                  {/* {card.type ? <p className={style.cardType}>{card.type}</p> : null} */}
                 
              </div>
              </div>        
                ) : cardsData.map((card) =>  
                 <div key={card.id} >
                <div className={style.card}>       
                <div className={style.containerButtons}>
                 <div className={style.containerS}>
                    <img src={"/images/info.png"} width={31} height={29} className={style.buttonEdit} onClick={() => editCard(card.id)}/>
                    <img src={"/images/excluir.png"}  width={34} height={30} className={style.buttonDelete} onClick={() => deleteCard(card.id)}/>
                </div>    
                </div>  
                <div className={style.containerImage}> 
                <img src={card.image} width={110} height={125}/>
                </div>
                 <p className={style.cardName}>{card.name}</p>
                {/* {card.type ? <p className={style.cardType}>{card.type}</p> : null} */}
               
            </div>
            </div>    
                )
            }
            </div>

        </main>

    )
}

export default cardspage