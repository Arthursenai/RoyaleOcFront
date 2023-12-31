"use client";
import React from 'react';
import { useState, useEffect } from 'react';
import Header from '../components/header/header';
import axios from 'axios';
import style from './page.module.css';
import { useRouter } from 'next/navigation';
import { FiSearch } from 'react-icons/fi';
import Link from 'next/link';
import CardInfo from '../components/cardinfo/cardinfo';
import Footer from '../components/footer/footer';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { Rings } from 'react-loader-spinner';
// npm install react-icons --save
// Todas as funções devem ser comentadas

function cardspage() {
    const [cardsData, setCardsData] = useState([]);
    const [search, setSearch] = useState("");
    const [selectedRarity, setSelectedRarity] = useState("");
    const [selectedType, setSelectedType] = useState("");
    const [selectedElixir, setSelectedElixir] = useState("");
    const router = useRouter();


    useEffect(() => {
        async function fetchData() {
            try {
                let queryParams = '';
                if (search) {
                    queryParams += `name=${search}&`;
                }
                if (selectedRarity) {
                    queryParams += `rarity=${selectedRarity}&`;
                }
                if (selectedType) {
                    queryParams += `type=${selectedType}&`;
                }
                if (selectedElixir) {
                    queryParams += `elixir=${selectedElixir}&`;
                }

                if (queryParams.length > 0) {
                    queryParams = queryParams.slice(0, -1);
                }
                const response = await axios.get(`/api/cards?${queryParams}`);
                setCardsData(response.data.cards);
            } catch (error) {
                console.error(error);
            }
        }

        fetchData();
    }, [selectedRarity, selectedType, selectedElixir, search]);





    function clearFilters() {
        setSelectedRarity("");
        setSelectedType("");
        setSelectedElixir("");
        setSearch("");
    }
    // Função para editar um membro
    const editCard = (id) => {
        router.push(`/cards/${id}`);
    }

    // Função para deletar um membro
    const deleteCard = async (id) => {
        const url = `/api/cards/${id}`;
        try {
            await axios.delete(url);
            setCardsData(cardsData.filter((card) => card.id !== id));
        } catch (error) {
            console.error(error);
        }
    }
    // Função para rolar até uma determinada posição na página
    const scrollToUp = () => {
        window.scrollTo(0, 0);
    }
    // Função para rolar até uma determinada posição na página
    const scrollToDown = () => {
        window.scrollTo(0, 1000000);
    }

    return (
        <main className={style.mainBg}>
            <Header />
            <main className={style.main22}>
                {/* Seção de introdução */}
            <div className={style.containerScrolls}>
                <button onClick={scrollToUp}>
                    <IoIosArrowUp />
                </button>
                <button onClick={scrollToDown}>
                    <IoIosArrowDown />
                </button>
            </div>
            {/* Seção de introdução as cartas */}
            <h1 className={style.title}>Cartas</h1>
            <div className={style.containerSearch}>
                <input type="text" placeholder="Pesquisar Cartas" className={style.search} value={search} onChange={(e) => setSearch(e.target.value)} />
                <FiSearch className={style.icon} />
            </div>
            {/* Seção de filtros */}
            <div className={style.containerFilters}>
                <select className={style.select} value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
                    <option value="">Tipo:</option>
                    <option value='Tropa'>Tropa</option>
                    <option value='Construção'>Construção</option>
                    <option value='Feitiço'>Feitiço</option>
                </select>
                <select className={style.select} value={selectedRarity} onChange={(e) => setSelectedRarity(e.target.value)}>
                    <option value="">Raridade:</option>
                    <option value="Comum">Comum</option>
                    <option value="Raro">Raro</option>
                    <option value="Épico">Épico</option>
                    <option value="Lendário">Lendário</option>
                    <option value="Campeão">Campeão</option>
                </select>
                <select className={style.select} value={selectedElixir} onChange={(e) => setSelectedElixir(e.target.value)}>
                    <option value="">Elixir:</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                    <option value={8}>8</option>
                    <option value={9}>9</option>
                    {cardsData.map((card) => (
                        card.elixir > 9 ?
                            <option value={10}>10</option>
                            : null))
                    }
                </select>
                <button className={style.scbtnred} onClick={() => clearFilters("teste")}>Redefinir Filtros</button>
            </div>

            <div className={style.containerCard}>
            {/* Seção de cards */}
                {
                    cardsData.length === 0 ?
                        <div className={style.containerLoading}>
                            <Rings
                                height="300"
                                width="400"
                                color="#fff"
                                radius="6"
                                wrapperStyle={{}}
                                wrapperClass=""
                                visible={true}
                                ariaLabel="rings-loading"
                            />
                        </div> :
                        //map percorre o array e retorna um novo array com ordem de elixir crescente
                        cardsData.sort((a, b) => a.elixir - b.elixir).map((card) => (
                            <div key={card.id} >
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
                                    <Link className={style.linkremove} href={`/cardsdetail/${card.id}`}>
                                        <div className={style.containerImage}>
                                            <img src={card.image} width={110} height={125} />
                                        </div>
                                    </Link>
                                    <p className={style.cardName}>{card.name}</p>

                                </div>
                            </div>
                        ))
                }
            </div>
            </main>
            <div className={style.containerFooter}>
            <Footer />
            </div>
        </main>

    )
}

export default cardspage