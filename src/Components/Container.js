import Styles from "./Container.module.css";

function Container () {
    return (
        <main className={Styles.main_container}>
            <div className={Styles.container}>
                <h1 className={Styles.heading}>Phone Number Validator</h1>
            </div>
        </main>
    )
}
export default Container;