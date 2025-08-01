import type { PagesDataTemplates } from '../config';

export const renderDom = (rootQuery: string, block: PagesDataTemplates) => {
  const root = document.querySelector(rootQuery);

  if (!root) {
    throw new Error(`Root element not found: ${rootQuery}`);
  }

  root.innerHTML = '';
  root.appendChild(block.getContent()!);
};
