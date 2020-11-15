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
					Olá Ednaldo
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
					R$ 11.459,00
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
		
		<div className="white-card-list">
			<div>
				<IconButton aria-label="phone">
					<Phone />
				</IconButton>
				<p>Recarregar celular</p>
			</div>
			<div>
				<IconButton aria-label="biometria">
					<Biometry />
				</IconButton>
				<p>Biometria</p>
			</div>
			<div>
				<IconButton aria-label="mercado cash">
					<Cash />
				</IconButton>
				<p>Mercado Cash</p>
			</div>
			<div>
				<IconButton aria-label="simule seu rendimento">
					<Graphs />
				</IconButton>
				<p>Simule seu Rendimento</p>
			</div>
		</div>
	  </main>
    </section>
  );
}

export default Home;
