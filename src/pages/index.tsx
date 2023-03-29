/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
import styles from '../styles/home.module.scss'
import Image from 'next/image'
import foto from '../../public/images/foto.png'
import imagem1 from '../../public/images/imagem1.png'
import imagem2 from '../../public/images/imagem2.png'
import imagem3 from '../../public/images/imagem3.png'
import imagem4 from '../../public/images/imagem4.png'
import imagem5 from '../../public/images/imagem5.png'
import ens from '../../public/images/ens.png'
import logo from '../../public/images/logo-black.png'
import lens from '../../public/images/lens.png'
import Link from 'next/link'
import { CiTwitter, CiYoutube, CiInstagram, CiLinkedin, CiMail } from 'react-icons/ci'
import { BsShare } from 'react-icons/bs'
import { RWebShare } from "react-web-share"
import { VscGithub } from 'react-icons/vsc'


export default function Home(){

  return (
    <div className={styles.container}>
      <Head>
        <title>Linkeh | Felipe Fatique</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta content="#515AFF" name="theme-color"></meta>
      </Head>

      <div className={styles.shareContainer}>
        
        <RWebShare
          data={{
            text: "Link | Felipe Fatique",
            url: "",
            title: "Link | Felipe Fatique",
          }}
          onClick={() => console.log("Shared Successfully!")}
        >
      
          <button>
            <BsShare size={20} color="#515AFF" />
          </button>

        </RWebShare>       
      
      </div>

      <main className={styles.mainContainer}>

        <Image src={foto} alt="Foto Vinícius Bedum" />

        <h2>Felipe Fatique</h2>
        <h3>Desenvolvedor FullStack JS, Solidity & DApps.</h3>
        <div className={styles.ensContainer}>
          <Image src={ens} alt="Logo ENS" />
          <p>fatique.eth</p>
        </div>
        
        <h4></h4>
        
        <div className={styles.buttons}>
          <Link target="_blank" href="https://www.pfpstudio.xyz/">
            <button><Image src={imagem1} alt="link imagem "/>
              <p>PFP Studio</p>
            </button>
          </Link>
        </div>

        <div className={styles.buttons}>
           <Link target="_blank" href="https://www.xcambo.me/">
            <button><Image src={imagem2} alt="link imagem 3"/>
              <p>XCambo</p>
            </button>
          </Link>
        </div>


        <div className={styles.buttons}>
          <Link target="_blank" href="https://discord.com/invite/2jhsuJvqPd">
            <button><Image src={imagem3} alt="link imagem 4"/>
              <p>Bootcamp by IBEED Studio & Sozei</p>
            </button>
          </Link>
        </div>

        <p>SOZEI</p>

        <div className={styles.buttons}>
          <Link target="_blank" href="https://sozei.com.br/">
            <button><Image src={imagem4} alt="link imagem 5" />
              <p>Traga sua empresa para a Web3</p>
            </button>
          </Link>
        </div>

        <div className={styles.buttons}>
          <Link target="_blank" href="https://calendly.com/felipe-fatique/web3-free-consulting">
            <button><Image src={imagem5} alt="link imagem 5" />
              <p>Free Consulting Web3</p>
            </button>
          </Link>
        </div>

      </main>

      <div className={styles.footerContainer}>
        <Link target="_blank" href="https://twitter.com/f_fatique">
          <CiTwitter size={35} color="black" />
        </Link>
        <Link target="_blank" href="https://www.instagram.com/ffatique/">
          <CiInstagram size={32} color="black" />
        </Link>
        <Link target="_blank" href="https://www.linkedin.com/in/felipe-fatique/">
          <CiLinkedin size={33} color="black" />
        </Link>
        <Link target="_blank" href="mailto:f_fatique@hotmail.com">
          <CiMail size={35} color="black" />
        </Link>
        <Link target="_blank" href="https://github.com/ffatique">
          <VscGithub size={30} color="black" />
        </Link>
      </div>

      <div className={styles.linkehContainer}>
        <Link target="_blank" href="https://twitter.com/f_fatique">
          <Image src={logo} alt="Logo Linkeh" />
        </Link>
      </div>    
    </div>
  )
}

