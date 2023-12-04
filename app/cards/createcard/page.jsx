"use client";
import Image from "next/image"
import stylesM from "../../components/modalatributes/modalatributes.module.css"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import axios from "axios"
import { useState, useEffect } from "react"
import styles from "../createcard/page.module.css"
import CardInfo from "../../components/cardinfo/cardinfo";
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };




export default function createCard() {
  const [cards, setCards] = useState([])
  const [name, setName] = useState("")
  const [level, setLevel] = useState("")
  const [rarity, setRarity] = useState("")
  const [type, setType] = useState("")
  const [elixir, setElixir] = useState("")
  const [image, setImage] = useState("")
  const [description, setDescription] = useState("")
  const [hp, setHp] = useState("")
  const [deploytime, setDeploytime] = useState("")
  const [shieldhp, setShieldhp] = useState("")
  const [damage, setDamage] = useState("")
  const [damagepersecond, setDamagepersecond] = useState("")
  const [rangeddamage, setRangeddamage] = useState("")
  const [damageondistance, setDamageondistance] = useState("")
  const [damageonarea, setDamageonarea] = useState("")
  const [damageonimpact, setDamageonimpact] = useState("")
  const [damageontower, setDamageontower] = useState("")
  const [chargedamage, setChargedamage] = useState("")
  const [damageondeath, setDamageondeath] = useState("")
  const [spawnspeed, setSpawnspeed] = useState("")
  const [duration, setDuration] = useState("")
  const [radius, setRadius] = useState("")
  const [width, setWidth] = useState("")
  const [efecttime, setEfecttime] = useState("")
  const [freezetime, setFreezetime] = useState("")
  const [unities, setUnities] = useState("")
  const [arena, setArena] = useState("")
  const [target, setTarget] = useState("")
  const [projectilerange, setProjectilerange] = useState("")
  const [range, setRange] = useState("")
  const [speed, setSpeed] = useState("")
  const [impactspeed, setImpactspeed] = useState("")
  const [id, setId] = useState("")
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const handleImage = (e) => {
    const file = e.target.files[0]
    setImage(URL.createObjectURL(file))
  }


  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post("/api/cards", {
          name,
          level,
          rarity,
          type,
          elixir,
          image,
          description
        })
      setName("")
      setLevel("")
      setRarity("")
      setType("")
      setElixir("")
      setImage("")
      setDescription("")
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  const addAtributes = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post("/api/cards", {
          hp,
          deploytime,
          shieldhp,
          damage,
          damagepersecond,
          rangeddamage,
          damageondistance,
          damageonarea,
          damageonimpact,
          damageontower,
          chargedamage,
          damageondeath,
          spawnspeed,
          duration,
          radius,
          width,
          efecttime,
          freezetime,
          unities,
          arena,
          target,
          projectilerange,
          range,
          speed,
          impactspeed
        })
      setHp("")
      setDeploytime("")
      setShieldhp("")
      setDamage("")
      setDamagepersecond("")
      setRangeddamage("")
      setDamageondistance("")
      setDamageonarea("")
      setDamageonimpact("")
      setDamageontower("")
      setChargedamage("")
      setDamageondeath("")
      setSpawnspeed("")
      setDuration("")
      setRadius("")
      setWidth("")
      setEfecttime("")
      setFreezetime("")
      setUnities("")
      setArena("")
      setTarget("")
      setProjectilerange("")
      setRange("")
      setSpeed("")
      setImpactspeed("")
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  const removeAtributes = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post("/api/cards", {
          hp,
          deploytime,
          shieldhp,
          damage,
          damagepersecond,
          rangeddamage,
          damageondistance,
          damageonarea,
          damageonimpact,
          damageontower,
          chargedamage,
          damageondeath,
          spawnspeed,
          duration,
          radius,
          width,
          efecttime,
          freezetime,
          unities,
          arena,
          target,
          projectilerange,
          range,
          speed,
          impactspeed
        })
      setHp("")
      setDeploytime("")
      setShieldhp("")
      setDamage("")
      setDamagepersecond("")
      setRangeddamage("")
      setDamageondistance("")
      setDamageonarea("")
      setDamageonimpact("")
      setDamageontower("")
      setChargedamage("")
      setDamageondeath("")
      setSpawnspeed("")
      setDuration("")
      setRadius("")
      setWidth("")
      setEfecttime("")
      setFreezetime("")
      setUnities("")
      setArena("")
      setTarget("")
      setProjectilerange("")
      setRange("")
      setSpeed("")
      setImpactspeed("")
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }
  



  return (
    <main className={styles.backgroundimage}>
      <div className={styles.conatainerInputs}>
        <input className={styles.input} type="text" maxLength={30} placeholder="Nome da sua carta" value={name} onChange={e => setName(e.target.value)} />
        <select className={styles.select}
          value={level}
          onChange={e => setLevel(e.target.value)}
        >
          <option value="">Selecione o nível</option>
          <option value={1}>Nível 1</option>
          <option value={2}>Nível 2</option>
          <option value={3}>Nível 3</option>
          <option value={4}>Nível 4</option>
          <option value={5}>Nível 5</option>
          <option value={6}>Nível 6</option>
          <option value={7}>Nível 7</option>
          <option value={8}>Nível 8</option>
          <option value={9}>Nível 9</option>
          <option value={10}>Nível 10</option>
          <option value={11}>Nível 11</option>
          <option value={12}>Nível 12</option>
          <option value={13}>Nível 13</option>
          <option value={14}>Nível 14</option>
          <option value={15}>Nível 15</option>
        </select>

        <select className={styles.select}
          value={rarity}
          onChange={e => setRarity(e.target.value)}
        >
          <option value="">Selecione a raridade</option>
          <option value="Comum">Comum</option>
          <option value="Raro">Raro</option>
          <option value="Épico">Épico</option>
          <option value="Lendário">Lendário</option>
          <option value="Campeão">Campeão</option>
        </select>

        <select className={styles.select}
          value={type}
          onChange={e => setType(e.target.value)}
        >
          <option value="">Selecione o Tipo</option>
          <option value="Tropa">Tropa</option>
          <option value="Feitiço">Feitiço</option>
          <option value="Construção">Construção</option>
        </select>

        <select className={styles.select}
          value={elixir}
          onChange={e => setElixir(e.target.value)}
        >
          <option value="">Selecione a quantidade de elixir</option>
          <option value={1}>1 Elixir</option>
          <option value={2}>2 Elixir</option>
          <option value={3}>3 Elixir</option>
          <option value={4}>4 Elixir</option>
          <option value={5}>5 Elixir</option>
          <option value={6}>6 Elixir</option>
          <option value={7}>7 Elixir</option>
          <option value={8}>8 Elixir</option>
          <option value={9}>9 Elixir</option>
          <option value={10}>10 Elixir</option>
        </select>

        <input type = "file" className={styles.file} onChange={handleImage} />
        <textarea className={styles.input} placeholder="Descrição da carta" value={description} onChange={e => setDescription(e.target.value)} />
        <button className={styles.scbtnyellow} onClick={handleSubmit}>Criar</button>
        {
      type == "Tropa" ? (
        <div className={styles.shabuya}>
          <button className={styles.scbtnyellow2} onClick={handleOpen}>Adicionar Atributos</button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Atributos para tropas
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <select>
                <option value="">Selecione os atributos</option>
                <option value="Pontos de Vida"><img src={"/images/hp.png"}/>Pontos de Vida</option>
                <option value="Dano"><img src={"/images/dano.png"}/>Dano</option>
                <option value="Dano por segundo<"><img src={"/images/danosegundo.png"}/>Dano por segundo</option>
                <option value="Dano a distância"><img src={"/images/danoadistancia.png"}/>Dano a distância</option>
                <option value="Dano de longa distância"><img src={"/images/danoaodistancia.png"}/>Dano de longa distância</option>
                <option value="Dano em área"><img src={"/images/danoarea.png"}/>Dano em área</option>
                <option value="Dano no impacto"><img src={"/images/danoimpacto.png"}/>Dano no impacto</option>
                <option value="Dano na torre"><img src={"/images/danotorre.png"}/>Dano na torre</option>
                <option value="Dano carregado"><img src={"/images/danocarregado.png"}/>Dano carregado</option>
                <option value="Dano na morte"><img src={"/images/danomorte.png"}/>Dano na morte</option>
                <option value="Velocidade de mobilização"><img src={"/images/velocidadespawn.png"}/>Velocidade de spawn</option>
                <option value="Duração"><img src={"/images/duracao.png"}/>Duração</option>
                <option value="Tempo de congelamento"><img src={"/images/tempocongelamento.png"}/>Tempo de congelamento</option>
                <option value="Unidades"><img src={"/images/unidades.png"}/>Unidades</option>
                <option value="Alvo"><img src={"/images/alvo.png"}/>Alvo</option>
                <option value="Alcance do projétil"><img src={"/images/alcanceprojeto.png"}/>Alcance do projétil</option>
                <option value="Alcance"><img src={"/images/alcance.png"}/>Alcance</option>
                <option value="Velocidade"><img src={"/images/velocidade.png"}/>Velocidade</option>
                <option value="Velocidade de impacto"><img src={"/images/velocidadeimpacto.png"}/>Velocidade de impacto</option>
                <option value="Pontos de vida do escudo"><img src={"/images/pontosvidaescudo.png"}/>Pontos de vida do escudo</option>
                </select>
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <input type="text" className={stylesM.atributos} placeholder="Valor do atributo" />
              </Typography>
              <div className={stylesM.containerButtons}>
                <button className={stylesM.scbtnyellow} onClick={addAtributes}>Adicionar atributo</button>
                <button className={stylesM.scbtnyellow} onClick={removeAtributes}>Remover atributo</button>
              </div>
            </Box>
          </Modal>
        </div>
      ) : (
        type == "Construção" ? (
          <div className={styles.shabuya}>
          <button className={styles.scbtnyellow2} onClick={handleOpen}>Adicionar Atributos</button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Atributos para construção
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <select>
                <option value="">Selecione os atributos</option>
                <option value="Pontos de Vida"><img src={"/images/hp.png"}/>Pontos de Vida</option>
                <option value="Dano"><img src={"/images/dano.png"}/>Dano</option>
                <option value="Dano por segundo<"><img src={"/images/danosegundo.png"}/>Dano por segundo</option>
                <option value="Dano a distância"><img src={"/images/danoadistancia.png"}/>Dano a distância</option>
                <option value="Dano de longa distância"><img src={"/images/danoaodistancia.png"}/>Dano de longa distância</option>
                <option value="Dano em área"><img src={"/images/danoarea.png"}/>Dano em área</option>
                <option value="Dano na torre"><img src={"/images/danotorre.png"}/>Dano na torre</option>
                <option value="Dano carregado"><img src={"/images/danocarregado.png"}/>Dano carregado</option>
                <option value="Dano na morte"><img src={"/images/danomorte.png"}/>Dano na morte</option>
                <option value="Velocidade de mobilização"><img src={"/images/velocidadespawn.png"}/>Velocidade de spawn</option>
                <option value="Duração"><img src={"/images/duracao.png"}/>Duração</option>
                <option value="Unidades"><img src={"/images/unidades.png"}/>Unidades</option>
                <option value="Alvo"><img src={"/images/alvo.png"}/>Alvo</option>
                <option value="Alcance"><img src={"/images/alcance.png"}/>Alcance</option>
                  </select>
                </Typography>
                <div className={stylesM.containerButtons}>
                <button className={stylesM.scbtnyellow} onClick={addAtributes}>Adicionar atributo</button>
                <button className={stylesM.scbtnyellow} onClick={removeAtributes}>Remover atributo</button>
              </div>
            </Box>
          </Modal>
        </div>
      ) : (
        type == "Feitiço" ? (
          <div className={styles.shabuya}>
          <button className={styles.scbtnyellow2} onClick={handleOpen}>Adicionar Atributos</button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Atributos para feitiços
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <select>
                <option value="">Selecione os atributos</option>
                <option value="Dano em área"><img src={"/images/danoarea.png"}/>Dano em área</option>
                <option value="Dano na torre"><img src={"/images/danotorre.png"}/>Dano na torre</option>
                <option value="Duração"><img src={"/images/duracao.png"}/>Duração</option>
                <option value="Tempo de congelamento"><img src={"/images/tempocongelamento.png"}/>Tempo de congelamento</option>
                <option value="Unidades"><img src={"/images/unidades.png"}/>Unidades</option>
                <option value="Alcance"><img src={"/images/alcance.png"}/>Alcance</option>
                <option value="Alvo"><img src={"/images/alvo.png"}/>Alvo</option>
                <option value="Raio"><img src={"/images/alcanceprojeto.png"}/>Raio</option>
                <option value="Paralisação"><img src={"/images/tempocongelamento.png"}/>Paralisação</option>
  
                  </select>              
              </Typography>
              <div className={stylesM.containerButtons}>
                <button className={stylesM.scbtnyellow} onClick={addAtributes}>Adicionar atributo</button>
                <button className={stylesM.scbtnyellow} onClick={removeAtributes}>Remover atributo</button>
              </div>
            </Box>
          </Modal>
        </div>
      ) : null
      )
      ) 
        } 
      </div>


      <div className={styles.containerCard}>
        <CardInfo
          name={name}
          image={image}
          type={type}
          rarity={rarity}
          elixir={elixir}
          hp={hp}
          deploytime={deploytime}
          shieldhp={shieldhp}
          description={description}
          damage={damage}
          damagepersecond={damagepersecond}
          rangeddamage={rangeddamage}
          damageondistance={damageondistance}
          damageonarea={damageonarea}
          damageonimpact={damageonimpact}
          damageontower={damageontower}
          chargedamage={chargedamage}
          damageondeath={damageondeath}
          spawnspeed={spawnspeed}
          duration={duration}
          radius={radius}
          width={width}
          efecttime={efecttime}
          freezetime={freezetime}
          unities={unities}
          arena={arena}
          target={target}
          projectilerange={projectilerange}
          range={range}
          speed={speed}
          impactspeed={impactspeed}
          id={id}
          level={level}
        />
      </div>
    </main>
  )
}