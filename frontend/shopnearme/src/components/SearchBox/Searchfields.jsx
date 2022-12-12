import React, { useState } from 'react'
import styles from './Searchfield.module.css';
import Form from 'react-bootstrap/Form';
import Menu from '../NavBar/Menu';
import axios from 'axios';
import ShopsTable from '../ShopsTable/ShopsTable';
const Searchfields = () => {
    const [shops, setShops] = useState('');
    const [table, setTable] = useState(false);
    const [categoryField, setCategoryfield] = useState('')
    const [dropDownField, setDropDownField] = useState('')
    const [pinCodeField, setPinCodeField] = useState('')
    const getShops = async (e) => {
        setTable(true)
        axios.get(`/getShopByPincode/${dropDownField}/${pinCodeField}`)
            .then((res) => {
                const allShops = res.data;
                console.log(allShops);
                setShops(allShops);
            })
            .catch((e) => {
                console.log(e);
            })
    }
    const changeInputField = (e) => {
        setCategoryfield(e.target.value)

    }
    const hanldeDropDownChange = (e) => {
        setDropDownField(e.target.value)
    }
    const changePincodeField = (e) => {
        setPinCodeField(e.target.value);
        console.log(pinCodeField);
    }

    return (
        <div>
            <Menu />
            <Form className={styles.form}>
                <div className={styles.inner}>
                    <div className={styles.inputBox}>
                        <Form.Control
                            type="search"
                            placeholder="Enter City Name"
                            className={styles.inputField}
                            aria-label="Search"
                            onChange={changeInputField}
                        />

                        <Form.Control
                            type="search"
                            placeholder="Enter PinCode"
                            className={styles.inputField}
                            aria-label="Search"
                            onChange={changePincodeField}
                        />

                        <Form.Select onChange={hanldeDropDownChange} aria-label="Default select example" className={styles.inputField}>
                            <option>Select Shop</option>
                            <option value="food">Food</option>
                            <option value="cafe">Cafe</option>
                            <option value="saloon">saloon</option>
                            {console.log(dropDownField)}

                        </Form.Select>

                        <button className={styles.searchBtn}  onClick={getShops}>Search</button>
                    </div>


                </div>

            </Form>
            {!table &&
                <h2 style={{ marginLeft: "600px", marginTop: "50px" }}>Welcome to the site :)</h2>
            }
            {shops.length > 0 && table && <ShopsTable shops={shops} />}
            {(table && !shops) &&

                <h2 style={{ marginLeft: "600px", marginTop: "50px" }}>Sorry,No Result Found</h2>
            }
        </div>
    )
}

export default Searchfields