"use client";
import React, { use } from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import style from './page.module.css';
import { useRouter } from 'next/navigation';
import { FiSearch } from 'react-icons/fi';
import Link from 'next/link';
// npm install react-icons --save
// Todas as funções devem ser comentadas

function cardspage() {
    const [cardsData, setCardsData] = useState([]);
    const [search, setSearch] = useState("");
    const [selectedRarity, setSelectedRarity] = useState("all");
    const [selectedType, setSelectedType] = useState("all");
    const [selectedElixir, setSelectedElixir] = useState("all");
    const [allClean, setAllClean] = useState(false);
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

    useEffect(() => {
        setCardsData(filterRarity());
    }, [selectedRarity, selectedType, selectedElixir, search]);


    const filterRarity = () => {
        if (selectedRarity != "all" && selectedType != "all" && selectedElixir != "all") {
            return cardsData.filter((card) => card.rarity == selectedRarity && card.type == selectedType && card.elixir == selectedElixir);
        }

        else if (selectedRarity != "all" && selectedType != "all") {
            return cardsData.filter((card) => card.rarity == selectedRarity && card.type == selectedType);
        }

        else if (selectedRarity != "all" && selectedElixir != "all") {
            return cardsData.filter((card) => card.rarity == selectedRarity && card.elixir == selectedElixir);
        }

        else if (selectedType != "all" && selectedElixir != "all") {
            return cardsData.filter((card) => card.type == selectedType && card.elixir == selectedElixir);
        }

        else if (selectedRarity != "all") {

            return cardsData.filter((card) => card.rarity == selectedRarity);
        }

        else if (selectedType != "all") {
            return cardsData.filter((card) => card.type == selectedType);
        }

        else if (selectedElixir != "all") {
            return cardsData.filter((card) => card.elixir == selectedElixir);
        }

        else if (search != "") {
            return cardsData.filter((card) => card.name.toLowerCase().includes(search.toLowerCase()));
        }

        else {
            return cardsData;
        }
    }

    const clearFilters = () => {
        setSelectedRarity("all");
        setSelectedType("all");
        setSelectedElixir("all");
        setSearch("");
        setAllClean(true);
    }

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
        <main className={style.mainBg}>

            <h1 className={style.title}>RoyaleOcto</h1>
            <div className={style.containerFilters}>
                <div className={style.containerSearch}>
                    <input type="text" placeholder="Pesquisar Cartas" className={style.search} onChange={(e) => setSearch(e.target.value)} />
                    <FiSearch className={style.icon}  />
                </div>
                <select className={style.select} onChange={(e) => setSelectedType(e.target.value)}>
                    <option value="all">Tipo:</option>
                    <option value='Tropa'>Tropa</option>
                    <option value='Construção'>Construção</option>
                    <option value='Feitiço'>Feitiço</option>
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
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                    <option value={8}>8</option>
                    <option value={9}>9</option>
                    <option value={10}>10</option>
                </select>
                <button className={style.scbtnred} onClick={clearFilters}>Redefinir Filtros</button>
            </div>
            <div className={style.containerCard}>
                {cardsData.map((card) => (
                    <div key={card.id} >
                        <Link className={style.linkremove} href={`/cardsdetail/${card.id}`}>
                            <div className={style.card}>
                                <div className={style.containerButtons}>
                                    <div className={style.containerS}>
                                        <button className={style.buttonEdit}>
                                            <img src={"/images/info.png"} width={31} height={29} onClick={() => editCard(card.id)} />
                                        </button>
                                        <button className={style.buttonDelete}>
                                            <img src={"/images/excluir.png"} width={34} height={30} onClick={() => deleteCard(card.id)} />
                                        </button>
                                    </div>
                                </div>
                                <div className={style.containerImage}>
                                    <img src={card.image} width={110} height={125} />
                                </div>
                                <p className={style.cardName}>{card.name}</p>

                            </div>
                        </Link>
                    </div>
                ))
                }
            </div>

        </main>

    )
}

export default cardspage;