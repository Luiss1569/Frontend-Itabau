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
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { useLocation } from 'react-router-dom'

import stylesNavbar from "./styles/navBarStyle";
import logo from '../../assets/img/logo-itabau.png'

import { Link } from 'react-router-dom'

const useStylesNav = makeStyles(stylesNavbar);

export default function Components() {
    const classesNav = useStylesNav(stylesNavbar)
    let location = useLocation();

    const itabau = ['Nossa Historia', 'Historia do Sorvete', 'Galeria de Fotos', 'Pesquisa de Opinião']
    const optionItabau = ['historia', 'historia-sorvete', 'galeria', 'opiniao']

    const sorvetes = ['Lançamentos', 'Picolés', 'Massa Premium']
    const optionSorvetes = ['lancamentos', 'picoles', 'massa']

    const saibaMais = ['Receitas', 'Selos', 'Conheça as Frutas', 'Vídeos', 'Nossos Ingredientes']
    const optionSaibaMais = ['receitas', 'selos', 'frutas', 'videos', 'ingredientes']

    const contato = ['Itabaú Matriz', 'Atualização de Boletos']
    const optionContato = ['matriz', 'boletos']

    return (
        <div>
            <Header
                rightLinks={
                    <List className={classesNav.list}>
                        <Link to='/' className={classesNav.listItem} style={{ marginRight: 30 }} >
                            <Button className={classesNav.listItem} >Home</Button>
                        </Link>

                        <div className={classesNav.listItem }  style={{ marginRight: 30 }}>
                            <Combobox
                                location={location} 
                                name={'A Itabaú'}
                                options={itabau}
                                links={optionItabau}
                            />
                        </div>

                        <div className={classesNav.listItem }  style={{ marginRight: 30 }}>
                            <Combobox
                                location={location} 
                                name={'Sorvetes'}
                                options={sorvetes}
                                links={optionSorvetes}
                            />
                        </div>

                        <Link to='/encontrar' className={classesNav.listItem} style={{ marginRight: 30 }} >
                            <Button className={classesNav.listItem}>Onde Encontrar</Button>
                        </Link>

                        <div className={classesNav.listItem }  style={{ marginRight: 30 }}>
                            <Combobox
                                location={location} 
                                name={'Saiba Mais'}
                                options={saibaMais}
                                links={optionSaibaMais}
                            />
                        </div>

                        <div className={classesNav.listItem }  style={{ marginRight: 30 }}>
                            <Combobox
                                location={location} 
                                name={'Contato'}
                                options={contato}
                                links={optionContato}
                            />
                        </div>

                    </List>
                }

                smLinks={
                    <List component="nav" aria-label="secondary mailbox folder">
                        <ListItem
                            button
                            selected={ location.pathname == '/'}
                        >
                            <Link to={'/'} style={{ textDecoration: 'none', color: 'black' }}>
                                <ListItemText primary="HOME" />
                            </Link>
                        </ListItem>
                        <Divider />

                        <ListItem>
                            <ListItemText primary="A ITABAÚ" />
                        </ListItem>

                        {
                            itabau.map((option, index) => (
                                <ListItem
                                    button
                                    key={option}
                                    selected={ location.pathname == optionItabau[index]}
                                >
                                    <Link to={`/${optionItabau[index]}`} style={{marginLeft: 20, textDecoration: 'none', color: 'black' }}>
                                        <ListItemText primary={option} />
                                    </Link>
                                </ListItem>
                            ))
                        }
                        <Divider />

                        <ListItem>
                            <ListItemText primary="SORVETES" />
                        </ListItem>

                        {
                            sorvetes.map((option, index) => (
                                <ListItem
                                    button
                                    key={option}
                                    selected={ location.pathname == optionSorvetes[index]}
                                >
                                    <Link to={`/${optionSorvetes[index]}`} style={{ marginLeft: 20 ,textDecoration: 'none', color: 'black' }}>
                                        <ListItemText primary={option} />
                                    </Link>
                                </ListItem>
                            ))
                        }
                        <Divider />

                        <ListItem button selected={ location.pathname == 'encontrar'}>
                            <Link to='/encontrar' style={{ textDecoration: 'none', color: 'black' }}>
                                <ListItemText primary={'ONDE ENCONTRAR'} />
                            </Link>
                        </ListItem>

                        <Divider />

                        <ListItem>
                            <ListItemText primary="SAIBA MAIS" />
                        </ListItem>

                        {
                            saibaMais.map((option, index) => (
                                <ListItem
                                    button
                                    key={option}
                                    selected={ location.pathname == optionSaibaMais[index]}
                                >
                                    <Link to={`/${optionSaibaMais[index]}`} style={{marginLeft: 20, textDecoration: 'none', color: 'black' }}>
                                        <ListItemText primary={option} />
                                    </Link>
                                </ListItem>
                            ))
                        }
                        <Divider />

                        <ListItem>
                            <ListItemText primary="CONTATO" />
                        </ListItem>

                        {
                            contato.map((option, index) => (
                                <ListItem
                                    button
                                    key={option}
                                    selected={ location.pathname == optionContato[index]}
                                >
                                    <Link to={`/${optionContato[index]}`} style={{marginLeft: 20, textDecoration: 'none', color: 'black' }}>
                                        <ListItemText primary={option} />
                                    </Link>
                                </ListItem>
                            ))
                        }
                        <Divider />
                        <div style={{width: '100%', height: 200}}/>
                        <div style={{width:'100%', textAlign: 'center', color:'#A9A9A9'}}>V1.0 - Itabaú</div>
                        <div style={{width: '100%', height: 5}}/>
                    </List>
                }

                fixed
                color="transparent"
                changeColorOnScroll={{
                    height: 330,
                    color: "black"
                }}

            />
            <div>
                <img src={logo} alt='logo' style={{ position: 'fixed', zIndex: 1111, top: 1, left: '5%', width: 100 }} />
            </div>
        </div>
    );
}