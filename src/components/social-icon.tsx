import type { IconType } from 'react-icons';
import { FaGithub, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import { FiMail } from 'react-icons/fi';
import type { SocialKind } from '@/content';

export const socialIcons: Record<SocialKind, IconType> = {
  x: FaXTwitter,
  linkedin: FaLinkedinIn,
  github: FaGithub,
  email: FiMail,
};
