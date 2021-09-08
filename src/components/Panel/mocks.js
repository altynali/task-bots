import {
  ChipIcon,
  ClipboardListIcon,
  CogIcon,
  CreditCardIcon,
  IdentificationIcon,
  UserAddIcon,
  CheckIcon,
  ChartPieIcon,
  DatabaseIcon,
} from '@heroicons/react/outline';

import vk from '../../images/vk.png';
import ig from '../../images/ig.png';
import tt from '../../images/tt.png';
import yt from '../../images/yt.png';
import tg from '../../images/tg.png';

export const pagesBuyer = [
  {
    url: 'tasks',
    icon: ClipboardListIcon,
    name: 'Задания',
  },
  {
    url: 'referrals',
    icon: UserAddIcon,
    name: 'Рефералы',
  },
  {
    url: 'contests',
    icon: CheckIcon,
    name: 'Конкурсы',
  },
  {
    url: 'settings',
    icon: CogIcon,
    name: 'Настройки',
  },
  {
    url: 'custom_services',
    icon: DatabaseIcon,
    name: 'Собственные услуги',
  },
];

export const pagesSeller = [
  {
    url: 'tasks',
    icon: ClipboardListIcon,
    name: 'Задания',
  },
  {
    url: 'bots',
    icon: ChipIcon,
    name: 'Боты для заработка',
  },
  {
    url: 'balance_seller',
    icon: CreditCardIcon,
    name: 'Баланс',
  },
  {
    url: 'statistics',
    icon: ChartPieIcon,
    name: 'Моя статистика',
  },
  {
    url: 'accounts',
    icon: IdentificationIcon,
    name: 'Мои аккаунты',
  },
  {
    url: 'settings',
    icon: CogIcon,
    name: 'Настройки',
  },
  {
    url: 'custom_services',
    icon: DatabaseIcon,
    name: 'Собственные услуги',
  },
];

export const platformTranslation = [
  {
    full: 'Все платформы',
    short: 'Все платформы',
    platform: 'all',
  },
  {
    image: ig,
    full: 'Instagram',
    short: 'IG',
    platform: 'instagram',
  },
  {
    image: tt,
    full: 'TikTok',
    short: 'TT',
    platform: 'tiktok',
  },
  {
    image: vk,
    full: 'ВКонтакте',
    short: 'VK',
    platform: 'vk',
  },
  {
    image: yt,
    full: 'YouTube',
    short: 'YT',
    platform: 'youtube',
  },
  {
    image: tg,
    full: 'Telegram',
    short: 'TG',
    platform: 'telegram',
  },
];

export const platforms = [
  {
    id: '1',
    label: 'Все платформы',

    value: 'all',
  },
  {
    id: '2',
    label: 'Instagram',
    value: 'instagram',
  },
  {
    id: '3',
    label: 'TikTok',
    value: 'tiktok',
  },
  {
    id: '4',
    label: 'ВКонтакте',
    value: 'vk',
  },
  {
    id: '5',
    label: 'YouTube',
    value: 'youtube',
  },
  {
    id: '6',
    label: 'Telegram',
    value: 'telegram',
  },
];

export const taskTypes = [
  {
    id: '1',
    label: 'Все',
    value: 'all',
  },
  {
    id: '2',
    label: 'Лайки',
    value: 'like',
  },
  {
    id: '3',
    label: 'Просмотры',
    value: 'view',
  },
  {
    id: '4',
    label: 'Подписчики',
    value: 'follow',
  },
  {
    id: '5',
    label: 'Комментарии',
    value: 'comment',
  },
  {
    id: '6',
    label: 'Голоса',
    value: 'vote',
  },
  {
    id: '7',
    label: 'Репосты',
    value: 'repost',
  },
];

// export const states = [
//   {
//     id: '1',
//     label: 'Все',
//     value: 'all',
//   },
//   {
//     id: '2',
//     label: 'На очереди',
//     value: 'in_queue',
//   },
//   {
//     id: '3',
//     label: 'В процессе',
//     value: 'in_work',
//   },
//   {
//     id: '4',
//     label: 'Неверные данные',
//     value: 'wrong_data',
//   },
//   {
//     id: '5',
//     label: 'Отмененные',
//     value: 'canceled',
//   },
//   {
//     id: '6',
//     label: 'Приостановленные',
//     value: 'paused',
//   },
//   {
//     id: '7',
//     label: 'Завершённые',
//     value: 'completed',
//   },
// ];

export const actions = [
  {
    id: '1',
    label: 'Удалить',
    value: 'delete',
  },
  {
    id: '2',
    label: 'Отменить',
    value: 'cancel',
  },
  {
    id: '3',
    label: 'Приостановить',
    value: 'pause',
  },
  {
    id: '4',
    label: 'Продолжить',
    value: 'continue',
  },
  {
    id: '5',
    label: 'Пополнить',
    value: 'refill',
  },
  {
    id: '6',
    label: 'Продвинуть',
    value: 'top-up-order',
  },
];

export const listTypes = [
  {
    id: '1',
    label: 'По убыванию',
    value: 'desc_order',
  },
  {
    id: '2',
    label: 'По возрастанию',
    value: 'asc_order',
  },
];
