import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Table from '../Table'
import Paper from '@material-ui/core/Paper';
import Grow from '@material-ui/core/Grow';
import Lottie from 'react-lottie';

import animationTablet from '../../assets/animations/tablet.json'

import './style.css'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

export default function ScrollableTabsButtonAuto(props) {
  const [value, setValue] = React.useState(0);
  // eslint-disable-next-line
  const [checked, setChecked] = React.useState(true)

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          centered
          selectionFollowsFocus
        >
          {
            props.picoles.map((picole, index) => (
              <Tab label={picole.nome} style={{ fontFamily: "Philosopher" }} key={picole.nome} {...a11yProps(index)} />
            ))
          }
        </Tabs>
      </AppBar>

      {
        props.picoles.map((picole, index) => (

          <TabPanel value={value} index={index} key={picole.nome+index}>
            <Grow in={checked} style={{padding: 0}}>
              <div className="container container-sorvete animated" id="container-tab">
                {
                  picole.img ? (
                    <div className="content-img left" style={{ maxWidth: 300 }}>
                      <img src={`${window.location.origin}/picoles${picole.img}`} alt={picole.nome} />
                    </div>
                  ) : (<div className="content-img left" style={{ maxWidth: 20, height: 10 }}/>)
                }
                <div className="content-itens left info" >
                  <div className="box">
                    <label><span>Ingredientes:</span>{"  " + picole.ingredientes}</label>
                  </div>
                  {picole.contem ? (
                    <div className="box">
                      <label><span>Contem:</span>{"  " + picole.contem}</label>
                    </div>
                  ) : " "}
                  {picole.alergicos ? (
                    <div className="box">
                      <label><span>Alergicos:</span>{"  " + picole.alergicos}</label>
                    </div>
                  ) : " "}
                  {picole.não_contem ? (
                    <div className="box">
                      <label><span>Não Contem:</span>{"  " + picole.não_contem}</label>
                    </div>
                  ) : " "}
                  <div className="box">
                    <label><span>Atenção:</span>{"  " + picole.atencao}</label>
                  </div>
                  <div className="box">
                    <label><span>Validade:</span>{"  " + picole.Validade}</label>
                  </div>
                  <p>{picole.ps}</p>

                </div>

                <div className="content-itens table" >
                  <Paper elevation={2} style={{ padding: 10 }}>
                    <div className="box">
                      <div style={{ marginTop: -50 }}>
                        <Lottie options={{
                          loop: true,
                          autoplay: true,
                          animationData: animationTablet,
                          rendererSettings: {
                            preserveAspectRatio: 'xMidYMid slice'
                          }
                        }}
                          height={80}
                          width={80} />
                        <label><span>Informação Nutricional:</span>
                        </label>
                      </div>
                    </div>
                    <p style={{ marginTop: -5 }}>Porção de 65g (1 Unidade)</p>
                    <Table head={picole.table_head} table={picole.table} key={picole.nome} />
                  </Paper>
                </div>

              </div>
            </Grow>
          </TabPanel>
        ))
      }
    </div>
  );
}