import { AnimatePresence, motion, transform } from "framer-motion";
import styles from "../styles/Navbar.modules.scss";
import Link from "next/link";
import { HiDotsHorizontal } from "react-icons/hi";
import { FaTimes, FaBars } from "react-icons/fa";
import useBackground from "../context/BackgroundContext";
import { useState, useRef } from "react";

const opacityAnim = {
    hidden: {
        opacity: 0,
        transition: {
            duration: 0.5,
            ease: "easeInOut",
            delay: 1,
        },
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: "easeInOut",
            deleay: 1,
        },
    },
};

const NavbarAnim = {
    hidden: {
        x: "100vw",
        transition: {
            duration: 0.3,
            ease: "easeInOut",
            staggerChildren: 0.1,
            when: "afterChildren",
        },
    },
    visible: {
        x: 0,
        transition: {
            duration: 0.3,
            ease: "easeInOut",
            staggerChildren: 0.2,
        },
    },
};

const NavbarItemAnim = {
    hidden: {
        x:"10vh",
        opacity:0,
        transition: {
            duration: 0.3,
            ease:"easeInOut",
        },
    },
    visible: {
        x:0,
        opacity:1,
        transition: {
            duration: 0.3,
            ease: "easeInOut",
        },
    },
};

const NavbarBgAnim = {
    hidden:{
        width: 0,
        transition:{
            duration: 0.3,
            ease: "easeInOut",
            delay: 0.9,
        },
    },
    visible:{
        width:"100%",
        transition: {
            duration: 0.3,
            ease: "easeInOut",
        },
    },
};

const Navbar = () => {
    const { setBackground } = userBackground();
    const { navOpen, setNavOpen } = userState(false);

    return <div>Navbar</div>;
};

export default Navbar;