/* eslint-disable @typescript-eslint/indent */
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useEffect, useState } from 'react';

import useBaseUrl from '@docusaurus/useBaseUrl';
import { useLocation } from '@docusaurus/router';
import Link from '@docusaurus/Link';
import {
  useThemeConfig,
  useAlternatePageUtils,
} from '@docusaurus/theme-common';
import useHideableNavbar from '@theme/hooks/useHideableNavbar';
import useLockBodyScroll from '@theme/hooks/useLockBodyScroll';
import clsx from 'clsx';
import Head from '@docusaurus/Head';
import styles from './styles.module.scss';
import Translate, { translate } from '@docusaurus/Translate';
import { NavBar } from './navbar';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
const Navbar = () => {
  const {
    i18n: { currentLocale, locales, localeConfigs },
  } = useDocusaurusContext();
  const alternatePageUtils = useAlternatePageUtils();

  const localeItems = locales.map((locale) => {
    return {
      locale,
    };
  });

  const renderLangLink = (locale) => {
    if (!pathname.includes('/vi') && locale === 'en') {
      return (
        <li className="border-t border-monochrome-medium-tint md:border-none">
          <a
            style={{ textDecoration: 'none' }}
            className={clsx(
              'inline-flex text-16 font-medium text-dark-brown leading-24 py-4 w-full h-full gap-x-2',
            )}
            href="/vi"
          >
            <img
              className="w-6 inline-block"
              src={useBaseUrl(`/img/vi.svg`)}
              alt="Vietnam"
            />
            Vietnamese
          </a>
        </li>
      );
    } else if (pathname.includes('/vi') && locale === 'vi') {
      return (
        <li className="border-t border-monochrome-medium-tint md:border-none">
          <a
            style={{ textDecoration: 'none' }}
            className={clsx(
              'inline-flex text-16 font-medium text-dark-brown leading-24 py-4 gap-x-1 w-full h-full',
            )}
            href="/"
          >
            <img
              className="w-6 inline-block"
              src={useBaseUrl(`/img/en.svg`)}
              alt="English"
            />{' '}
            English
          </a>
        </li>
      );
    }
  };
  const { pathname } = useLocation();
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  useLockBodyScroll(isNavbarVisible);
  const links = [...NavBar];
  const { navbarRef, isNavbarVisible: isHeaderVisibleAfterScroll } =
    useHideableNavbar(true);

  return (
    <header
      ref={navbarRef}
      className={clsx(
        'fixed top-0 inset-x-0 z-50 h-20 bg-transparent border-none',
        styles.header,
        {
          [styles.headerHidden]: !isHeaderVisibleAfterScroll,
        },
      )}
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
        <meta property="og:image" content={useBaseUrl('/img/ml-cover.png')} />
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
        <script
          id="ze-snippet"
          src="https://static.zdassets.com/ekr/snippet.js?key=cb0be492-0505-495c-8751-093cf97db217"
        ></script>
        <script src={useBaseUrl('/config-zendesk.js')}></script>
      </Head>
      <div className="absolute top-0 left-0 z-40 w-full bg-monochrome-white">
        <nav className="flex items-center justify-between h-20 container">
          <Link to={useBaseUrl('/')}>
            <img
              className="w-48"
              src={useBaseUrl('/img/logo.svg')}
              alt="Money Lover"
            />
          </Link>
          <div className="md:flex items-center">
            <ul className="invisible md:visible fixed md:static flex flex-row gap-6 lg:gap-x-8 items-center mt-1">
              {links.map(({ to = '', label = '' }: any) => (
                <li key={to}>
                  <Link
                    style={{ textDecoration: 'none' }}
                    className={`flex items-center font-medium 
                      text-16 text-dark-brown`}
                    to={useBaseUrl(to)}
                  >
                    {label}
                  </Link>
                </li>
              ))}
              {localeItems &&
                localeItems.map(({ locale }) => renderLangLink(locale))}
            </ul>

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
        <nav className="visible md:invisible fixed w-full h-20 left-0 top-14">
          <div className="bg-monochrome-white">
            <div className="container mt-4 pt-2 pb-4">
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
                {localeItems &&
                  localeItems.map(({ locale }) => renderLangLink(locale))}
              </ul>
            </div>
          </div>
          <div
            className="w-full h-full bg-monochrome-black bg-opacity-50"
            onClick={() => setIsNavbarVisible(!isNavbarVisible)}
          />
        </nav>
      )}
    </header>
  );
};

export default Navbar;
