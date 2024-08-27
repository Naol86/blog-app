import React from 'react';
import SecondaryBtn from '../Buttons/SecondaryBtn';

export default function BlogTag({ tags }: { tags: string[] }) {
  return (
    <>
      {tags.map((tag, index) => (
        <SecondaryBtn key={index} text={tag} />
      ))}
    </>
  );
}
