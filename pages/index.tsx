import { Box, chakra, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/Skills";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import Proficiency from "../components/Proficiency";
import Projects from "../components/Projects";
import store from "../store/store";
import { Provider } from "react-redux";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <Provider store={store}>
      <Box bg="#E5E5E5">
        <Head>
          <title>
            Hazel Orlendo - Frontend Software Engineer, • Angular.js • React.js
            • Next.js
          </title>
          <meta
            name="description"
            content="
        Hazel is a Frontend Software Engineer conversant with Angular, React and Next js"
          />
          <meta name="theme-color" content="#ffffff" />

          <meta name="og:type" content="website" />
          <meta
            name="og:title"
            content="
          Hazel is a Frontend Software Engineer conversant with Angular, React and Next js"
          />
          <meta
            name="keywords"
            content="hazel,orlendo,software engineer, frontend engineer"
          />
          <meta
            name="og:description"
            content="
          Hazel is a Frontend Software Engineer conversant with Angular, React and Next js"
          />
          <meta name="og:image" content="/assets/hazel.jpg" />

          <link rel="icon" href="/favicon.ico" />

          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Navbar />
        <chakra.main className={styles.main} justifyContent="initial">
          <About />
          <Proficiency />
          <Projects />
        </chakra.main>

        <footer className={styles.footer}>
          <Footer />
        </footer>
      </Box>
    </Provider>
  );
};

export default Home;
