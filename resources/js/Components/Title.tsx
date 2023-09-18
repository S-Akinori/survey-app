import React from 'react';

interface Props extends React.HTMLAttributes<HTMLHeadingElement> {
  title: string;
  Tag?: 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const Title = ({ title, Tag = 'h2', ...props }: Props) => {
  return (
    <Tag {...props} className={'font-semibold text-xl text-gray-800 leading-tight ' + props.className}>{title}</Tag>
  );
}

export default Title