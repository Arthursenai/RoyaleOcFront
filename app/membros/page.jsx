"use client";
// Importações
import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Page() {
    // Estados para armazenar a lista de membros e dados adicionais.
    const [membros, setMembros] = useState([]);
    const [dados, setDados] = useState([]);
    const router = useRouter();

    // Função para deletar um membro.
    const deletar = async (id) => {
        const url = `/api/membros/${id}`;
        try {
            await axios.delete(url);
            setDados(dados.filter((membro) => membro.id !== id));
            setMembros(membros.filter((membro) => membro.id !== id));
        } catch (error) {
            console.error("Error deleting membro", error);
        }
    };
    console.log(dados, membros)

    const update = (id) => {
        router.push(`/membros/${id}`);
    };

    useEffect(() => {
        async function fetchMembros() {
            try {
                // Atualiza os estados com a lista de membros e dados adicionais.
                const response = await axios.get("/api/membros");
                setMembros(response.data.membros);
                setDados(response.data.membros);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchMembros();
    }, []);
    // Renderização do componente.
    return (
        <div className={styles.divPai}>
            <div>
                <Link href="/membros/cadastro">
                    <button type="submit" className={styles.botaoCadastro}>
                        <div className={styles.overlay}></div>
                        <div className={styles.overlay}></div>
                        <div className={styles.overlay}></div>
                        <span>Cadastro</span>
                    </button >
                </Link>
            </div>

            <div className={styles.divMembros}>
                <h1 className={styles.titulo}>Membros</h1>
                {/* Se há dados, exibe a lista de membros; caso contrário, exibe uma mensagem de carregamento ou erro. */}
                {dados.length ? (
                    // Se há membros, mapeia e exibe as informações de cada membro.
                    <div className={styles.map}>
                        {membros.map((membro) => (
                            <div key={membro.id}>
                                <div>
                                    {/*  Informações do membro */}

                                    <p className={styles.infos}>
                                        <strong>Nome:</strong> {membro.nome}
                                    </p>
                                    <p className={styles.infos}>
                                        <strong>Idade:</strong> {membro.idade}
                                    </p>
                                    <p className={styles.infos}>
                                        <strong>Cargo:</strong> {membro.cargo}
                                    </p>
                                    <p className={styles.infos}>
                                        <strong>Foto:</strong>
                                        <img src={membro.foto} width={200} height={200} />
                                    </p>
                                    <p className={styles.infos}>
                                        <strong>Descrição:</strong> {membro.descricao}
                                    </p>
                                </div>
                                <div>

                                    <button className={styles.btndelete} onClick={() => deletar(membro.id)}>
                                        <div className={styles.overlay}></div>
                                        <div className={styles.overlay}></div>
                                        <div className={styles.overlay}></div>
                                        <span>Deletar</span>
                                    </button >

                                    <button className={styles.btnupdate} onClick={() => update(membro.id)}>
                                        <div className={styles.overlay}></div>
                                        <div className={styles.overlay}></div>
                                        <div className={styles.overlay}></div>
                                        <span>Editar</span>
                                    </button >
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>carregando..</p>
                )}
            </div>
        </div>
    );
}