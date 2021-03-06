import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { translate } from '@docusaurus/Translate';
import PropTypes, { InferProps } from 'prop-types';
import Link from '@docusaurus/Link';

export const CTA = ({ sendGaEvent }: InferProps<typeof CTA.propTypes>) => {
  return (
    <section id="cta" className="container mt-18 lg:mt-44 lg:mb-14">
      <div className="relative grid grid-cols-12 bg-green-ml py-12 lg:py-20 rounded-2xl">
        <div className="col-span-12 col-start-1 lg:col-start-3 lg:col-end-8">
          <p className="mb-2 text-center tracking-tight lg:text-left text-monochrome-white text-24 leading-32 font-medium lg:font-medium lg:text-40 lg:leading-52">
            {translate({ id: 'cta.slogan' })}
          </p>
          <p
            style={{ color: '#F3F3F3' }}
            className="mb-9 tracking-tight text-center lg:text-left leading-32"
          >
            {translate({ id: 'cta.slogan.sub' })}
          </p>
          <div className="flex justify-center lg:justify-start w-full">
            <Link
              target="_blank"
              to="https://itunes.apple.com/app/apple-store/id486312413?pt=694013&ct=landing&mt=8"
              className="mr-1"
              onClick={() => sendGaEvent('goAppStore')}
            >
              <img src={useBaseUrl('img/marketplace/appstore.svg')} alt="" />
            </Link>
            <Link
              target="_blank"
              to="https://play.google.com/store/apps/details?id=com.bookmark.money&referrer=utm_source%3Dlanding"
              className="ml-1"
              onClick={() => sendGaEvent('goPlayStore')}
            >
              <img src={useBaseUrl('img/marketplace/google-play.svg')} alt="" />
            </Link>
          </div>
        </div>
        <img
          className="invisible w-1/5 lg:visible absolute bottom-0 lg:left-2/3"
          src={useBaseUrl('img/MOCKUP@4x.png')}
          alt=""
        />
      </div>
    </section>
  );
};

CTA.propTypes = {
  sendGaEvent: PropTypes.func,
};
