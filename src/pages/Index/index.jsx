import React, { useState, useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import api from "../../services/api";

import Header from "../../components/Header";
import Carrossel from "../../components/Carrossel/indexCarrossel";
import Footer from "../../components/Footer";
import Location from "../../components/Location";
import FlipCarrossel from "../../components/FlipCarrossel";

import Lottie from "react-lottie";

import animationLocation from "../../assets/animations/location-finding.json";
import animationIce from "../../assets/animations/ice-cream.json";
import animationFacebook from "../../assets/animations/facebook.json";
import animationInstagram from "../../assets/animations/instagram.json";
import iceLoad from "../../assets/animations/iceLoad.json";

import i1 from "../../assets/img/index/i1.jpg";
import i3 from "../../assets/img/index/i3.jpg";
import i4 from "../../assets/img/index/i5.jpg";
import familia from "../../assets/img/index/familia.png";

import c1 from "../../assets/img/carrossel/01.jpg";
import c2 from "../../assets/img/carrossel/02.jpg";
import c3 from "../../assets/img/carrossel/03.jpg";
import c4 from "../../assets/img/carrossel/04.jpg";
import c5 from "../../assets/img/carrossel/05.jpg";
import c6 from "../../assets/img/carrossel/06.jpg";

import "./styles.css";
import { Link } from "react-router-dom";

// const c1 = `${window.location.origin}/img/carrossel/c1.jpg`
// const c2 = `${window.location.origin}/img/carrossel/c2.jpg`
// const c3 = `${window.location.origin}/img/carrossel/c3.jpg`
// const c4 = `${window.location.origin}/img/carrossel/c4.jpg`
// const c5 = `${window.location.origin}/img/carrossel/c5.jpg`

function Index() {
  const location = useLocation();
  const [load, setLoad] = useState(
    location.pathname === "/home" ? false : true
  );
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
  const [locations, setLocations] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      setLoad(false);
    }, 3000);
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          setLat(position.coords.latitude);
          setLong(position.coords.longitude);
        },
        function (error) {
          console.log(error);
        },
        { enableHighAccuracy: true }
      );
    }
    try {
      document
        .querySelectorAll(".animated div[prime]")[0]
        .removeAttribute("data-about");
      document
        .querySelectorAll(".animated div[prime]")[1]
        .removeAttribute("data-about");
    } catch (e) {
      console.log(e);
    }
    setTimeout(function () {
      document.querySelectorAll(".container-ice[visible]").forEach((div) => {
        div.removeAttribute("visible");
      });
    }, 4000);
  },[]);

  useMemo(() => {
    console.log(lat, long);
    async function getLocations() {
      if (lat & long) {
        const response = await fetch(
          `${api}/php/cliente/get.php?lat=${lat}&long=${long}&limit=5`,
          {
            method: "get",
          }
        ).then(function (response) {
          return response.json();
        });
        if (response.data) {
          setLocations([]);
        } else {
          setLocations(response);
        }
        console.log(response);
      }
    }
    getLocations();
    // eslint-disable-next-line
  }, [long]);

  return (
    <>
      <Header />
      <Carrossel images={[c1, c2, c3, c4, c5, c6]} />
      <div className={"margin"} />

      <div className={"container-ice"} visible="true">
        <Lottie
          options={{
            loop: false,
            autoplay: !load,
            animationData: animationIce,
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice",
            },
          }}
          height={300}
          width={200}
        />
      </div>

      <div className="container animated margin1">
        <div className="content-img left " prime="true" data-about="true">
          <img src={i3} alt="picoles sem açucar" />
        </div>

        <div className="content-itens right" prime="true" data-about="true">
          <h3>Picolés 100% Naturais</h3>
          <label>VEGANOS - CREMOSOS – RECHEADOS – ZERO AÇÚCAR</label>
          <p>
            {" "}
            Em todos não há adição de aditivos e ou ingredientes artificiais ou
            idênticos ao natural.... É simplesmente NATURAL, saboroso e
            saudável.
          </p>
          <Link
            to={"/picoles/naturais"}
            style={{
              textDecoration: "none",
              display: "flex",
              flexDirection: "collum",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ padding: 5 }}>
              <div className="button"> Tabela Nutricional</div>
            </div>
            <div style={{ padding: 5 }}>
              <div className="button">Lista de Ingredientes</div>
            </div>
            <div style={{ padding: 5 }}>
              <div className="button" style={{ marginBottom: 5 }}>
                Lista de Sabores
              </div>
            </div>
          </Link>
        </div>
      </div>

      <div className="container  container-reverse  animated">
        <div className="content-img left " data-about="true">
          <img src={i1} alt="picoles sem açucar" />
        </div>

        <div className="content-itens right " data-about="true">
          <h3>Picolés Orgânicos</h3>
          <label>VEGANOS - CREMOSOS – ZERO AÇÚCAR</label>
          <p>
            {" "}
            Em toda cadeia, da matéria-prima ao processo de produção, nossos
            picolés tem as principais certificações que regulam o segmento.
            Somos auditados pelo IBD (Instituto Bio Dinâmico), o qual nos
            concede o selo SISORG ( Sistema Brasileiro de Avaliação de
            Conformidade Orgânica) este último selo é obrigatório estar aparente
            nas embalagens de todos os produtos orgânicos. Ser um sorvete
            orgânico é ter em sua composição produtos cultivado e ou produzidos
            sem agrotóxicos e sem fertilizantes químicos, não ter aditivos
            artificiais ou idênticos ao natural . A produção orgânica melhora a
            qualidade de vida do homem do campo, mantêm a vida do solo intacta,
            conserva o lençol freático e não agridem a natureza.
          </p>
          <Link
            to={"/picoles/organicos"}
            style={{
              textDecoration: "none",
              display: "flex",
              flexDirection: "collum",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ padding: 5 }}>
              <div className="button"> Tabela Nutricional</div>
            </div>
            <div style={{ padding: 5 }}>
              <div className="button">Lista de Ingredientes</div>
            </div>
            <div style={{ padding: 5 }}>
              <div className="button" style={{ marginBottom: 5 }}>
                Lista de Sabores
              </div>
            </div>
          </Link>
        </div>
      </div>

        <div className="container contaier-massa animated">
        <div className="content-img left " data-about="true">
          <img src={i4} alt="picoles sem açucar" />
        </div>

        <div className="content-itens right" data-about="true">
          <h3>Massa Premium</h3>
          <label>TRADICIONAIS – VEGANOS – ZERO AÇÚCAR</label>
          <p>
            Pra quem não abre mão da qualidade, uma linha especial de Sorvetes no formato Massa Premium, com uma
            grande variedade de deliciosos sabores, são feitos com produtos
            selecionados e de alta qualidade. Em sua calda base não é adicionado
            nenhum tipo de gordura vegetal e todos tem em sua composição açúcar
            orgânico.
          </p>
          <Link
            to={"/massa"}
            style={{
              textDecoration: "none",
              display: "flex",
              flexDirection: "collum",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ padding: 5 }}>
              <div className="button" style={{ marginBottom: 5 }}>
                Lista de Sabores
              </div>
            </div>
          </Link>
        </div>
      </div>
        
      <div
        className="container container-map animated"
        style={{
          backgroundColor: "#f7f7f7",
          paddingBottom: locations ? 25 : 50,
        }}
      >
        <div className="content-itens right" data-about="true">
          <Lottie
            options={{
              loop: true,
              autoplay: true,
              animationData: animationLocation,
              rendererSettings: {
                preserveAspectRatio: "xMidYMid slice",
              },
            }}
            height={200}
            width={200}
          />
          <h3>Onde comprar sorvetes Itabaú?</h3>
          <Link to={"/encontrar"} style={{ textDecoration: "none" }}>
            <div className="button">Pesquisar Endereço</div>
          </Link>
        </div>
      </div>
      {locations ? (
        <>
          <div
            className="container container-map container-location container-historia animated"
            style={{ paddingBottom: 70, paddingTop: 100, marginTop: -5 }}
          >
            <div className="content-itens left" data-about>
              <h3>Locais Próximos</h3>
            </div>
            <div
              className="content-location  galery right"
              data-about
              style={{ padding: 0, marginTop: 20 }}
            >
              {<Location locations={locations} index={true} />}
            </div>
          </div>
        </>
      ) : (
        <></>
      )}

      <FlipCarrossel />

      <div className="container  container-vid animated">
        <div className="content-itens right" data-about="true">
          <h3>Reportagens da Itabaú</h3>
          <Link to={"/videos"} style={{ textDecoration: "none" }}>
            <div className="button">Ver todos os vídeos</div>
          </Link>
        </div>

        <div className="content-img left" data-about="true">
          <Link to="">
            {/* eslint-disable-next-line*/}
            <iframe
              src="//www.youtube.com/embed/8Yoytt2b-o0?feature=youtu.be&amp;wmode=transparent"
              allowfullscreen=""
              className="uk-responsive-width"
              width="480"
              height="270"
            ></iframe>
          </Link>
        </div>
      </div>

      <div className="container container-familia animated">
        <div className="content-itens left" data-about="true">
          <h3>
            Sorvetes saudavéis feitos pela nossa <strong>FAMÍLIA</strong> em
          </h3>
          <p styçe={{ whiteSpace:'nowrap'}}>São Bento do Sapucaí-SP</p>
        </div>
        <div className="content-img right" data-about="true">
          <img src={familia} alt="familia" />
        </div>
      </div>

      <div className="container container-social animated">
        <div className="content-itens left" data-about="true" style={{width: '90%', maxWidth: 1000}}>
          <h3>Junte-se à família Itabaú</h3>
          <p>
            Curta e acompanhe a Itabaú nas principais redes sociais, mande seus
            comentários, críticas, sugestões, dúvidas e fique por dentro de
            todas as novidades. Seja muito bem vindo a nossa família.
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flex: 1,
              justifyContent: "center",
            }}
          >
            <a
              href="https://www.facebook.com/ItabauSorvete"
              target="_blank"
              rel="noreferrer"
            >
              <div style={{ pointerEvents: "none" }}>
                <Lottie
                  options={{
                    loop: true,
                    autoplay: true,
                    animationData: animationFacebook,
                    rendererSettings: {
                      preserveAspectRatio: "xMidYMid slice",
                    },
                  }}
                  height={100}
                  width={100}
                />
              </div>
            </a>
            <a
              href="https://www.instagram.com/itabau_sorvetes/"
              target="_blank"
              rel="noreferrer"
            >
              <div style={{ pointerEvents: "none" }}>
                <Lottie
                  options={{
                    loop: true,
                    autoplay: true,
                    animationData: animationInstagram,
                    rendererSettings: {
                      preserveAspectRatio: "xMidYMid slice",
                    },
                  }}
                  height={100}
                  width={100}
                />
              </div>
            </a>
          </div>
        </div>
      </div>

      <div class="powr-instagram-feed" id="08012390_1605915823"></div>
      <div className="asndaoidna"></div>
      <Footer />

      {load ? (
        <div
          style={{
            position: "fixed",
            backgroundColor: "#fff",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 2010,
            display: "flex",
            flex: 1,
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Lottie
            options={{
              loop: true,
              autoplay: true,
              animationData: iceLoad,
              rendererSettings: {
                preserveAspectRatio: "xMidYMid slice",
              },
            }}
            height={400}
            width={400}
          />
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default Index;
