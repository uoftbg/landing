import styles from "styles/mouse-scroll-icon.module.css";

export default function MouseScrollIcon() {
  return (
    <div className="scale-75">
      <div className={`${styles.mousey}`}>
        <div className={`${styles.scroller}`}></div>
      </div>
    </div>
  );
}
