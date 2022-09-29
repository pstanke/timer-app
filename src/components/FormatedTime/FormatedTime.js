import styles from './FormatedTime.module.scss';
const FormatedTime = ({ time }) => {
  const formatTime = (ms) => {
    let milliseconds = ms % 1000,
      seconds = Math.floor((ms / 1000) % 60),
      minutes = Math.floor((ms / (1000 * 60)) % 60),
      hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
    minutes = String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');
    hours = String(hours).padStart(2, '0');

    return `${hours}:${minutes}:${seconds}.${milliseconds}`;
  };

  return <div className={styles.formatedTime}>{formatTime(time)}</div>;
};
export default FormatedTime;
