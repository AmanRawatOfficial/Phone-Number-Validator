import Styles from "./Container.module.css";
import Form from "./Forms/Form";

function Container () {
    return (
        <main className={Styles.main_container}>
            <div className={Styles.container}>
                <h1 className={Styles.heading}>Phone Number Validator</h1>
                <Form />
            </div>
        </main>
    )
}
export default Container;