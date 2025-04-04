import React from 'react'
import styles from './style.module.css'

function SearchInput({setCity}) {
  const onBlurSearchCity = (e) => {
    setCity(e.target.value);
  };
  const onKeyDownEnterSearchCity = (e) => {
    if (e.key === 'Enter') {
      setCity(e.target.value);
    }
  };
  return (
    <input
      type="text"
      placeholder="Введите название города"
      className={styles.input}
      onBlur={onBlurSearchCity}
      onKeyDown={onKeyDownEnterSearchCity}
    ></input>
  );
}

export default SearchInput