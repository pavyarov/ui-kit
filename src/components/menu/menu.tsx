import * as React from 'react';
import { BEM } from '@redneckz/react-bem-helper';

import { Icons } from '../icon';
import { useClickOutside } from '../../hooks';

import styles from './menu.module.scss';

interface Props {
  className?: string;
  items: Array<{ label: string; icon: keyof typeof Icons; onClick: () => void }>;
}

const menu = BEM(styles);

export const Menu = menu(({ className, items }: Props) => {
  const [isListOpened, setIsListOpened] = React.useState(false);
  const node = useClickOutside(() => setIsListOpened(false));

  return (
    <div className={className} ref={node}>
      <MenuIcon onClick={() => setIsListOpened(!isListOpened)} />
      {isListOpened && (
        <ItemsList>
          {items.map(({ icon, label, onClick }, index) => {
            const ItemIcon = Icons[icon];
            return (
              <Item onClick={onClick} key={index}>
                <ItemIcon />
                <ItemLabel>{label}</ItemLabel>
              </Item>
            );
          })}
        </ItemsList>
      )}
    </div>
  );
});

const MenuIcon = menu.menuIcon(Icons.MoreOptions);
const ItemsList = menu.itemsList('div');
const Item = menu.item('div');
const ItemLabel = menu.itemLabel('span');
