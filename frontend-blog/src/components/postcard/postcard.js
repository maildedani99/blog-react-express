import React from 'react';
import Logo from '../logo/logo';
import styles from './postcard.module.css';

const PostCard = (props) => {
  const {icon, title, description} = props;

  return (
    <div className={styles.__postcard_div}>
      <div className={styles.__card_header}>
        <div className={styles.__card_icon}>
          <Logo width="60px" icon={icon} />
        </div>

        <div className={styles.__card_title}>
          <p>{title}</p>
        </div>
      </div>
      <div className={styles.__card_content}>
        <p>{description}</p>
      </div>
    </div>
  );
};
export default PostCard;
