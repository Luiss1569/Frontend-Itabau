import React from "react";
// nodejs library that concatenates classes
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "./HeaderConfigs";
import Combobox from './styles/combox'
import List from "@material-ui/core/List";
import Button from "@material-ui/core/Button"

import stylesNavbar from "./styles/navBarStyle";
import logo from '../../assets/img/logo-itabau.png'

import { Link } from 'react-router-dom'

const useStylesNav = makeStyles(stylesNavbar);

export default function Components(props) {
    const classesNav = useStylesNav(stylesNavbar)
    return (
        <div>
            <Header
                rightLinks={
                    <List className={classesNav.list}>
                        <Link to='/' className={classesNav.listItem} style={{ marginRight: 30 }}>
                            <Button className={classesNav.listItem}>Home</Button>
                        </Link>

                        <div className={classesNav.listItem} style={{ marginRight: 30 }}>
                            <Combobox name={'A Itabaú'}
                                options={['Nossa Historia', 'Historia do Sorvete', 'Galeria de Fotos', 'Pesquisa de Opinião']}
                                links={['historia', 'historia-sorvete', 'galeria', 'opiniao']}
                            />
                        </div>

                        <div className={classesNav.listItem} style={{ marginRight: 30 }}>
                            <Combobox name={'Sorvetes'}
                                options={['Lançamentos', 'Picolés', 'Massa Premium']}
                                links={['lancamentos', 'picoles', 'massa']}
                            />
                        </div>

                        <Link to='/encontrar' className={classesNav.listItem} style={{ marginRight: 30 }}>
                            <Button className={classesNav.listItem}>Onde Encontrar</Button>
                        </Link>

                        <div className={classesNav.listItem} style={{ marginRight: 30 }}>
                            <Combobox name={'Saiba Mais'}
                                options={['Receitas', 'Selos', 'Conheça as Frutas', 'Vídeos', 'Nossos Ingredientes']}
                                links={['receitas', 'selos', 'frutas', 'videos', 'ingredientes']}
                            />
                        </div>

                        <div className={classesNav.listItem} style={{ marginRight: 30 }}>
                            <Combobox name={'Contato'}
                                options={['Itabaú Matriz', 'Atualização de Boletos']}
                                links={['matriz', 'boletos']}
                            />
                        </div>

                    </List>
                }

                smLinks={
                    <List className={classesNav.list}>



                    </List>
                }

                fixed
                color="transparent"
                changeColorOnScroll={{
                    height: 390,
                    color: "black"
                }}

            />
            <div>
                <img src={logo} alt='logo' style={{ position: 'fixed', zIndex: 1111, top: 1, left: '5%', width: 100 }} />
            </div>
        </div>
    );
}