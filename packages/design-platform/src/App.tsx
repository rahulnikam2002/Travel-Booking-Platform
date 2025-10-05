import ButtonExamples from "./components/Button/Button.simple";
import { ExpandTab } from "./components/ExpandTab/ExpandTab";
import styles from "./styles.module.css"

function App() {
  return (
    <div className={styles.app}>
      <h1>Design  System</h1>

      <h2>Buttons</h2>
      <ExpandTab title="Button Examples">
        <ButtonExamples />
      </ExpandTab>

      <div className={styles.spacer}>
        <ExpandTab title="Checkbox">
          <ButtonExamples />
        </ExpandTab>
      </div>
    </div>
  );
}

export default App;
