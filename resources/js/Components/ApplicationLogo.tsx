import { SVGAttributes } from 'react';

export default function ApplicationLogo(props: SVGAttributes<SVGElement>) {
    return (
      <img src="/storage/logo.jpg" alt="Logo" width={100} height={100} {...props} />
    );
}
