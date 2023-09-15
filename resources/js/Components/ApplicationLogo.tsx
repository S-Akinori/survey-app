import { ImgHTMLAttributes } from 'react';

export default function ApplicationLogo(props: ImgHTMLAttributes<HTMLImageElement>) {
    return (
      <img src="/images/logo.jpg" alt="Logo" width={100} height={100} {...props} />
    );
}
