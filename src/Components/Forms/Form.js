import Styles from "./Form.module.css";

function Form () {
    return (
        <form className={Styles.form_container}>
            <lable className={Styles.form_lable}>Country Code</lable>
            <input type="number"  className={`${Styles.input} ${Styles.c_code}`} placeholder="91"></input>
            <lable className={Styles.form_lable}>Phone Number</lable>
            <input type="number"  className={`${Styles.input} ${Styles.p_number}`} placeholder="1234567890"></input>
            <button className={Styles.form_button}>Submit</button>
        </form>
    );
}
export default Form;