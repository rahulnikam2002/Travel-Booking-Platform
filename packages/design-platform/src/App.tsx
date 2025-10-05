import ButtonExamples from "./components/Button/Button.simple";
// import CheckboxInfoList from "./components/CheckboxInfoList";
import { CheckboxInfoRow } from "./components/CheckboxInfoRow/CheckboxInfoRow";
import { ExpandTab } from "./components/ExpandTab/ExpandTab";
import styles from "./styles.module.css"

// const dummyDataForCheckboxInfoList = [
//   { title: 'Non Stop', description: '$ 100', isChecked: false },
//   { title: '1 Stop', description: '$ 80', isChecked: true },
//   { title: '2+ Stops', description: '$ 50', isChecked: false },
//   { title: 'Red Eye Flights', description: '$ 120', isChecked: false },
//   { title: 'Early Morning Flights', description: '$ 110', isChecked: true },
//   { title: 'Late Night Flights', description: '$ 90', isChecked: false },
// ];

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.spacer}>
        <h1>Design  System</h1>
      </div>

      <ExpandTab title="Button Examples">
        <ButtonExamples />
      </ExpandTab>

      <div className={styles.spacer}>
        <ExpandTab opened={true} title="Checkbox | Checkbox Info list">
          <div className={styles.spacer}>
            <h2>Single Checkbox Row</h2>
            <CheckboxInfoRow title="Non Stop" isChecked={false} onChange={(e) => console.log(e)} description="$ 100" />
          </div>

          <div className={styles.spacer}>
            <h2>Checkbox Info List</h2>
            {/* <CheckboxInfoList items={dummyDataForCheckboxInfoList} isExpandable={true} minItemsToShow={3} /> */}
          </div>
        </ExpandTab>
      </div>
    </div>
  );
}

export default App;
