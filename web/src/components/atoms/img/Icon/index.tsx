import React, { InputHTMLAttributes } from 'react';

export enum AvailableIcons {
  logo = 'logo.svg',
  hero = 'hero.svg',
  tv = 'tv.svg',
  study = 'study.svg',
  heart = 'heart.svg',
  arrowLeft = 'arrow-left.svg',
  whatsapp = 'whatsapp.svg',
}

interface IconProps extends InputHTMLAttributes<HTMLImageElement> {
  iconName: AvailableIcons
  size?: number
  alt?: string,
  className?: string,
}

const Icon: React.FC<IconProps> = ({
  iconName, size, alt = '', className,
}) => (
  <img src={`/icons/${iconName}`} alt={alt} width={size} className={className} />
);

export default Icon;
