import { Link } from 'react-router-dom'
import AppBar from "@material-ui/core/AppBar/AppBar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Divider } from "@material-ui/core";
import { Menu, Notifications } from "@material-ui/icons";
import {ReactComponent as NotificationIcon} from '../../assets/home/notification.svg';
import {ReactComponent as MenuIcon} from '../../assets/home/menu.svg';
import {ReactComponent as BlueArrowTop} from '../../assets/home/blue-arrow-top.svg';
import {ReactComponent as ArrowRight} from '../../assets/home/right-small-arrow.svg';
import {ReactComponent as Money} from '../../assets/home/money.svg';
import {ReactComponent as QRCode} from '../../assets/home/qr-code.svg';
import {ReactComponent as Biometry} from '../../assets/home/biometry.svg';
import {ReactComponent as Graphs} from '../../assets/home/graphs.svg';
import {ReactComponent as Coin} from '../../assets/home/coin.svg';
import {ReactComponent as Phone} from '../../assets/home/phone.svg';
import {ReactComponent as New} from '../../assets/home/new.svg';
import {ReactComponent as Cash} from '../../assets/home/cash.svg';
import {ReactComponent as EarnCash} from '../../assets/home/earn-cashback.svg';
import {ReactComponent as CashbackTag}  from '../../assets/home/cashback-tag.svg';
import mercadoLivreLogo from '../../assets/home/logos/mercado-livre.png';
import amazonLogo from '../../assets/home/logos/amazon.png';
import kabumLogo from '../../assets/home/logos/kabum.png';
import rennerLogo from '../../assets/home/logos/renner.png';
import saraivaLogo from '../../assets/home/logos/saraiva.png';
import feiraNovaLogo from '../../assets/home/logos/feira-nova.png';
import uberLogo from '../../assets/home/logos/uber.png';
import uberEatsLogo from '../../assets/home/logos/uber-eats.png';


import React from "react";

import "./Home.scss";

function Home() {
  return (
    <section>
      <header className="home-header-menu">
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className=""
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
			
			<div>
				<p>
					Olá Marilene
				</p>
				<h6>
					Nível 1 - Mercado Pontos
				</h6>
			</div>            

			<IconButton
              edge="start"
              className=""
              color="inherit"
              aria-label="menu"
            >
              <NotificationIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
		
		<div className="home-header-card">
			<div className="home-header-balance">
				<h3>
					R$ 2.397,98
				</h3>
				<p>
					M$ 1.523,00
				</p>
			</div>  
			<Divider />
			
			<div className="arrow-top-button">
				<IconButton aria-label="blue arrow">
					<BlueArrowTop />
				</IconButton>
			</div>
		</div>
		
      </header>
	  
	  <main>
		
		<div className="invisible-card-list">
			<div>
				<IconButton aria-label="qr code">
					<QRCode />
				</IconButton>
				<p>Código QR</p>
			</div>
			<div>
				<IconButton aria-label="add money">
					<Money />
				</IconButton>
				<p>Adicionar dinheiro</p>
			</div>
			<div>
				<IconButton aria-label="transfer money">
					<Money />
				</IconButton>
				<p>Transferir dinheiro</p>
			</div>
			<div>
				<IconButton aria-label="withdraw money">
					<Money />
				</IconButton>
				<p>Sacar dinheiro</p>
			</div>
		</div>
		
		<div className="white-card">
			<Coin style={{width: "188px", height: "100%"}}/>
			<p>Use o mercado cash (M$) para comprar produtos com estabelecimentos que aceitam Mercado pago</p>
		</div>
		
		<div className="white-card-list">
			<div>
				<IconButton aria-label="phone">
					<Phone />
				</IconButton>
				<p>Recarregar celular</p>				
			</div>
			<div>
				<Link to={'/biometria'}>
					<IconButton aria-label="biometria">
						<Biometry />
					</IconButton>
				</Link>
				<New />
				<p>Biometria</p>				
			</div>
			<div>
				<Link to={'/cash'}>
					<IconButton aria-label="mercado cash">
						<Cash />
					</IconButton>
				</Link>
				<New />
				<p>Mercado Cash</p>				
			</div>
			<div>
				<Link to={'/financeiro'}>
					<IconButton aria-label="simule seu rendimento">
						<Graphs />
					</IconButton>
				</Link>
				<New />
				<p>Simule seu Rendimento</p>				
			</div>
		</div>
		
		<div className="white-card-with-header">
			<header><EarnCash />Ganhe cashback!</header>
			<main style={{textAlign: "center"}}>
			
				<p>Comprando nos sites</p>
				<div className="earn-cashback-card-list white-card-list">
					<div>
						<IconButton>
							<img src={mercadoLivreLogo}/>
						</IconButton>
						<div className="cashback-tag">
							<CashbackTag/>
							<p>8%</p>
						</div>
					</div>
					<div>
						<IconButton>
							<img style={{height: '15px'}} src={amazonLogo}/>
						</IconButton>	
						<div className="cashback-tag">
							<CashbackTag/>
							<p>6%</p>
						</div>
					</div>
					<div>
						<IconButton>
							<img style={{height: '25px'}} src={kabumLogo}/>
						</IconButton>	
						<div className="cashback-tag">
							<CashbackTag/>
							<p>6%</p>
						</div>
					</div>
					<div>
						<IconButton>
							<img style={{height: '17px'}} src={rennerLogo}/>
						</IconButton>
						<div className="cashback-tag">
							<CashbackTag/>
							<p>5%</p>
						</div>
					</div>
					<div>
						<IconButton>
							<img style={{height: '8px'}} src={saraivaLogo}/>
						</IconButton>
						<div className="cashback-tag">
							<CashbackTag/>
							<p>5%</p>
						</div>
					</div>
					<div>
						<IconButton>
							<img style={{height: '15px'}} src={feiraNovaLogo}/>
						</IconButton>
						<div className="cashback-tag">
							<CashbackTag/>
							<p>4%</p>
						</div>
					</div>
				</div>
				<br/>
				<p>Comprando nos aplicativos</p>
				<div style={{gridTemplateColumns: '1fr 1fr', marginLeft: '50px', marginRight: '50px'}} className="earn-cashback-card-list white-card-list">
					<div>
						<IconButton aria-label="phone">
							<img style={{height: '10px'}} src={uberLogo}/>
						</IconButton>
						<div className="cashback-tag">
							<CashbackTag/>
							<p>4%</p>
						</div>
						
					</div>
					<div>
						<IconButton aria-label="phone">
							<img style={{height: '17px'}} src={uberEatsLogo}/>
						</IconButton>
						<div className="cashback-tag">
							<CashbackTag/>
							<p>4%</p>
						</div>
					</div>
				</div>
				
				<div className="card-list">
				</div>
			</main>
		</div>
		
	  </main>
    </section>
  );
}

export default Home;
