import React, { InputHTMLAttributes } from 'react';

export enum AvailableIcons {
  logo = 'logo.svg'
}

interface IconProps extends InputHTMLAttributes<HTMLImageElement> {
  iconName: AvailableIcons
  size?: number
  alt?: string
}

const Icon: React.FC<IconProps> = ({ iconName, size, alt = '' }) => (
  <img src={`/icons/${iconName}`} alt={alt} width={size} />
);

export default Icon;
