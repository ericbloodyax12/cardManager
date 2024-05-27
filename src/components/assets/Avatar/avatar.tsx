import React, { useState } from 'react';
import s from './avatar.module.scss';


type AvatarProps = {
  initialImageUrl?: string;
  size?: number;
  alt?: string;
};

export const Avatar = ({ initialImageUrl, size = 36 }: AvatarProps) => {
  const [imageUrl, setImageUrl] = useState<string | ArrayBuffer | null>(initialImageUrl || '');

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
      <div className={s.avatarContainer} style={{ width: size, height: size }}>
        {imageUrl ? (
            <img src={imageUrl as string} alt="User Avatar" className={s.avatarImage} />
        ) : (
            <div className={s.placeholder}>Upload Image</div>
        )}
        <input type="file" accept="image/*" onChange={handleImageUpload} className={s.fileInput} />
      </div>
  );
};
