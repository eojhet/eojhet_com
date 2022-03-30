import GetToken from "../../../components/getToken";
import styles from "./index.module.scss";

export default function Profile () {

  const token = GetToken();

  return (
    <div className={styles.container}>
      <h1>Welcome</h1>
      <div className={styles.content}>
        {token ? token : null}
      </div>
    </div>
  )
}