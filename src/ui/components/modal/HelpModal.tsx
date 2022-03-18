// Copyright 2022 @paritytech/contracts-ui authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/outline';
import { BookOpenIcon } from '@heroicons/react/solid';
import { useTranslation } from 'react-i18next';
import { GithubLogo, StackExchangeLogo, ElementLogo } from './Logos';
import { ModalBase as Modal } from './ModalBase';
import type { ModalProps } from './ModalBase';

export const HelpModal = ({ isOpen, setIsOpen }: Omit<ModalProps, 'title'>) => {
  const { t } = useTranslation();

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={t('helpModalTitle', 'Help')}>
      <ul className="dark:text-gray-200 text-gray-600 text-sm">
        <li>
          <a
            className="group flex w-full justify-between items-center border-b dark:border-gray-800 border-gray-200 dark:text-white text-gray-600"
            href="https://paritytech.github.io/ink-docs/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex py-4">
              <div className="w-5 mr-2" style={{ position: 'relative', top: 2 }}>
                <BookOpenIcon className="h-5 w-5 text-indigo-400" aria-hidden="true" />
              </div>
              <div className="flex flex-col">
                <strong>{t('inkDocsTitle', 'ink! Docs')}</strong>
                <span className="dark:text-gray-400 text-gray-500">
                  {t('inkDocsText', 'Read more about the ink! smart contract language.')}
                </span>
              </div>
            </div>
            <ChevronRightIcon className="h-4 w-4 dark:text-gray-400 text-gray-500 group-hover:opacity-50" />
          </a>
        </li>
        <li>
          <a
            className="group flex w-full justify-between items-center border-b dark:border-gray-800 border-gray-200 dark:text-white text-gray-600"
            href="https://substrate.stackexchange.com/questions/tagged/smart-contract?sort=Newest"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex py-4">
              <div className="w-5 mr-2" style={{ position: 'relative', top: 2 }}>
                <StackExchangeLogo />
              </div>
              <div className="flex flex-col">
                <strong>{t('stackExchangeTitle', 'Stack Exchange')}</strong>
                <span className="dark:text-gray-400 text-gray-500">
                  {t('stackExchangeText', 'Browse through common questions.')}{' '}
                </span>
              </div>
            </div>
            <ChevronRightIcon className="h-4 w-4 dark:text-gray-400 text-gray-500 group-hover:opacity-50" />
          </a>
        </li>
        <li>
          <a
            className="group flex w-full justify-between items-center border-b dark:border-gray-800 border-gray-200 dark:text-white text-gray-600"
            href="https://matrix.to/#/#ink:matrix.parity.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex py-4">
              <div className="w-5 mr-2" style={{ position: 'relative', top: 2 }}>
                <ElementLogo />
              </div>
              <div className="flex flex-col">
                <strong>{t('elementTitle', 'Element Channel')}</strong>
                <span className="dark:text-gray-400 text-gray-500">
                  {t('elementText', 'Ask questions and help others.')}{' '}
                </span>
              </div>
            </div>
            <ChevronRightIcon className="h-4 w-4 dark:text-gray-400 text-gray-500 group-hover:opacity-50" />
          </a>
        </li>
        <li>
          <a
            className="group flex w-full justify-between items-center"
            href="https://github.com/paritytech/contracts-ui"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex py-4">
              <div className="w-5 mr-2 relative" style={{ position: 'relative', top: 1 }}>
                <GithubLogo />
              </div>
              <div className="flex flex-col">
                <strong>{t('githubTitle', 'Github Repo')}</strong>
                <span className="dark:text-gray-400 text-gray-500">
                  {t('githubText', 'Let us know if there is an issue.')}{' '}
                </span>
              </div>
            </div>
            <ChevronRightIcon className="h-4 w-4 dark:text-gray-400 text-gray-500 group-hover:opacity-50" />
          </a>
        </li>
      </ul>
    </Modal>
  );
};
