
import s from './staticAvatar.module.scss';

type HeaderWithAvatarProps = {
  title: string;
  avatarUrl: string;
};

export const StaticAvatar = ({ title, avatarUrl }: HeaderWithAvatarProps) => {
  return (
      <header className={s.header}>
        <div className={s.logo}>{title}</div>
        <img src={avatarUrl} alt="User Avatar" className={s.avatar} />
      </header>
  );
};