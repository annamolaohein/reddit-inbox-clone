import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-free/js/fontawesome";
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import "@fortawesome/free-solid-svg-icons";
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export default function Navigation() {
    return (
        <nav css={styles.myNav}>
            <h3 className='barIcon'><FontAwesomeIcon icon="fa-solid fa-bars" /></h3>
            <h3 className='inboxText'>Inbox</h3>
            <h3 className='ellIcon'><FontAwesomeIcon icon="fa-solid fa-ellipsis-vertical" /></h3>
            <h3 className='userIcon'><FontAwesomeIcon icon="fa-solid fa-circle-user" /></h3>
        </nav>

    )
}
const styles = {
    myNav: css`
        background-color: white;
        display: flex;
        padding-top: 10px;
        padding-bottom: 30px;
        & .barIcon{
            width: 10%;
            text-align: right;
            color: #a6a6a6;
        }
        & .inboxText{
            width: 70%;
            padding-left: 15px;
        }
        & .ellIcon{
            width: 10%;
        }
        & .userIcon{
            width: 10%;
        }
    `
}