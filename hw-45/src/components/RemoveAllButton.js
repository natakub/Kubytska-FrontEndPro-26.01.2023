import styles from "../css/RemoveAllButton.module.css";

function RemoveAllButton(props) {
  return (
    <button
      className={styles["remove-all-button"]}
      onClick={props.removeAllFunc}
    >
      Clear all
    </button>
  );
}

export default RemoveAllButton;
