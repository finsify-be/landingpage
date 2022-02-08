/* eslint-disable @typescript-eslint/indent */
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { useLocation } from '@docusaurus/router';
import Link from '@docusaurus/Link';
import { useThemeConfig } from '@docusaurus/theme-common';
import useHideableNavbar from '@theme/hooks/useHideableNavbar';
import useLockBodyScroll from '@theme/hooks/useLockBodyScroll';
import clsx from 'clsx';
import Head from '@docusaurus/Head';
import styles from './styles.module.scss';
import Translate, { translate } from '@docusaurus/Translate';
import { NavBar } from './navbar';
const Navbar = () => {
  const { pathname } = useLocation();
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  useLockBodyScroll(isNavbarVisible);
  const links = [...NavBar];
  const { navbarRef, isNavbarVisible: isHeaderVisibleAfterScroll } =
    useHideableNavbar(true);

  return (
    <header
      ref={navbarRef}
      className={clsx('fixed top-0 inset-x-0 z-50 h-22', styles.header, {
        [styles.headerHidden]: !isHeaderVisibleAfterScroll,
      })}
    >
      <Head>
        <meta name="author" content="Finsify Technology Co., Ltd" />
        <meta
          property="al:android:url"
          content="https://moneylover.me/download"
        />
        <meta property="al:android:package" content="com.bookmark.money" />
        <meta property="al:android:app_name" content="MoneyLover" />

        <meta
          name="keywords"
          content={translate({
            id: 'meta.keywords',
          })}
        />
        <meta
          name="description"
          content={translate({ id: 'meta.description' })}
        />
        <meta property="og:title" content={translate({ id: 'og.title' })} />
        <meta
          property="og:description"
          content={translate({ id: 'og.description' })}
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://moneylover.me/" />
        <meta property="og:site_name" content="Moneylover" />
        <meta
          property="og:image"
          content="https://moneylover.me/source/ml-cover.png"
        />
        <meta property="fb:app_id" content="192450854108398" />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="57x57"
          href={useBaseUrl('img/favicons/apple-icon-57x57.png')}
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="114x114"
          href={useBaseUrl('img/favicons/apple-icon-114x114.png')}
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="72x72"
          href={useBaseUrl('img/favicons/apple-icon-72x72.png')}
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="144x144"
          href={useBaseUrl('img/favicons/apple-icon-144x144.png')}
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="60x60"
          href={useBaseUrl('img/favicons/apple-icon-60x60.png')}
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="120x120"
          href={useBaseUrl('img/favicons/apple-icon-120x120.png')}
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="76x76"
          href={useBaseUrl('img/favicons/apple-icon-76x76.png')}
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="152x152"
          href={useBaseUrl('img/favicons/apple-icon-152x152.png')}
        />
        <link
          rel="icon"
          type="image/png"
          href={useBaseUrl('img/favicons/favicon-196x196.png')}
          sizes="196x196"
        />
        <link
          rel="icon"
          type="image/png"
          href={useBaseUrl('img/favicons/favicon-96x96.png')}
          sizes="96x96"
        />
        <link
          rel="icon"
          type="image/png"
          href={useBaseUrl('img/favicons/favicon-32x32.png')}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={useBaseUrl('img/favicons/favicon-16x16.png')}
          sizes="16x16"
        />
        <link
          rel="icon"
          type="image/png"
          href={useBaseUrl('img/favicons/favicon-128.png')}
          sizes="128x128"
        />
        <meta name="application-name" content="Money Lover" />
        <meta name="msapplication-TileColor" content="#FFFFFF" />
        <meta
          name="msapplication-TileImage"
          content={useBaseUrl('img/favicons/ms-icon-144x144.png')}
        />
        <meta
          name="msapplication-square70x70logo"
          content={useBaseUrl('img/favicons/ms-icon-70x70.png')}
        />
        <meta
          name="msapplication-square150x150logo"
          content={useBaseUrl('img/favicons/ms-icon-150x150.png')}
        />
        <meta
          name="msapplication-wide310x150logo"
          content={useBaseUrl('img/favicons/mstile-310x150.png')}
        />
        <meta
          name="msapplication-square310x310logo"
          content={useBaseUrl('img/favicons/ms-icon-310x310.png')}
        />
      </Head>
      <div className="absolute top-0 left-0 z-40 w-full bg-monochrome-white">
        <nav className="flex items-center justify-between h-22 container">
          <Link to={useBaseUrl('/')}>
            <img src={useBaseUrl('/img/logo.svg')} alt="drill-logo" />
          </Link>
          <div className="md:flex items-center">
            <ul className="invisible md:visible fixed md:static flex flex-row gap-6 items-center">
              {links.map(({ to = '', label = '' }: any) => (
                <li key={to}>
                  <Link
                    style={{ textDecoration: 'none' }}
                    className={`flex items-center h-22
                      text-16 text-dark-brown
                      ${
                        pathname.includes(to.split('/')[0])
                          ? styles.activeTab
                          : styles.tab
                      }
                      `}
                    to={useBaseUrl(to)}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="dropdown inline-block relative">
              <button className="text-dark-brown py-2 px-6 rounded inline-flex items-center">
                <span className="mr-1">Ngôn ngữ</span>
                <svg
                  class="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </button>
              <ul className="dropdown-menu w-full hidden absolute pt-1">
                <li className="text-center">
                  <Link
                    style={{ textDecoration: 'none' }}
                    className="text-16 font-medium text-dark-brown"
                    href="/"
                  >
                    Tiếng Việt
                  </Link>
                </li>
                <li className="text-center">
                  <Link
                    style={{ textDecoration: 'none' }}
                    className="text-16 font-medium text-dark-brown"
                    href="/en"
                  >
                    English
                  </Link>
                </li>
              </ul>
            </div>
            <button
              aria-label="menu button"
              style={{
                backgroundPosition: 'center',
              }}
              className={clsx(
                `flex items-center justify-center w-9 h-9 md:hidden text-green-ml fill-current ${
                  isNavbarVisible ? 'bg-close' : 'bg-menu'
                } bg-no-repeat`,
              )}
              type="button"
              onClick={() => setIsNavbarVisible(!isNavbarVisible)}
            />
          </div>
        </nav>
      </div>
      {isNavbarVisible && (
        <nav className="visible md:invisible fixed w-full h-full left-0 top-14">
          <div className="bg-monochrome-white">
            <div className="container pt-2 pb-6">
              <ul>
                {links.map(({ to = '', label = '' }: any) => (
                  <li className="border-t border-monochrome-medium-tint">
                    <Link
                      style={{
                        textDecoration: 'none',
                      }}
                      className="inline-flex text-16 font-medium text-dark-brown leading-24 py-4 w-full h-full"
                      to={useBaseUrl(to)}
                      onClick={() => setIsNavbarVisible(false)}
                    >
                      <Translate>{label}</Translate>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* <div className="dropdown inline-block relative">
              <button className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
                <span className="mr-1">Dropdown</span>
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{' '}
                </svg>
              </button>
              <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
                <li className="">
                  <a
                    className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    One
                  </a>
                </li>
                <li className="">
                  <a
                    className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    Two
                  </a>
                </li>
                <li className="">
                  <a
                    className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    Three is the magic number
                  </a>
                </li>
              </ul>
            </div> */}
          </div>
          <div
            className="w-full h-full bg-monochrome-black bg-opacity-50"
            onClick={() => setIsNavbarVisible(!isNavbarVisible)}
          />
        </nav>
      )}
      <script
        src="https://unpkg.com/@themesberg/flowbite@latest/dist/flowbite.bundle.js"
        defer
      ></script>
    </header>
  );
};

export default Navbar;
