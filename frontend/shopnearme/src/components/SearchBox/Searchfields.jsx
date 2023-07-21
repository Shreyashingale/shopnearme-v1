import React, { useState } from 'react'
import styles from './Searchfield.module.css';
import Form from 'react-bootstrap/Form';
import Menu from '../NavBar/Menu';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import ShopsTable from '../ShopsTable/ShopsTable';
import badRequest from '../../assets/images/badRequest.png'
import welcome from '../../assets/images/welcome.png'
import { TailSpin } from 'react-loader-spinner';

const Searchfields = () => {
    const [shops, setShops] = useState('');
    const [table, setTable] = useState(false);
    const [categoryField, setCategoryfield] = useState('')
    const [dropDownField, setDropDownField] = useState('')
    const [pinCodeField, setPinCodeField] = useState('')
    const [loader, setLoader] = useState(false);
    const getShops = async (e) => {
        e.preventDefault()
        setLoader(true);
        setTimeout(() => {
            setLoader(false);
            setTable(true);
        }, 2000);
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
                            onChange={changeInputField}
                        />

                        <Form.Control
                            type="search"
                            placeholder="Enter PinCode"
                            className={styles.inputField}
                            onChange={changePincodeField}
                        />
                        <Form.Select onChange={hanldeDropDownChange} className={styles.inputField}>
                            <option>Select Shop</option>
                            <option value="food">Food</option>
                            <option value="cafe">Cafe</option>
                            <option value="saloon">saloon</option>
                            {console.log(dropDownField)}

                        </Form.Select>


                        <button className={styles.searchBtn} onClick={getShops}>Search</button>
                    </div>


                </div>
            </Form>
            {!table && !loader &&
                <>
                    <img className={styles.image} src={welcome} />
                </>
            }
            {loader && !table &&
                <TailSpin
                    height="60"
                    width="200"
                    color="#343a40"
                    ariaLabel="tail-spin-loading"
                    radius="1"
                    wrapperClass={styles.loader}
                />
            }
            {shops.length > 0 && table && <ShopsTable shops={shops} />}
            {(table && !shops) &&
                <>
                    <img className={styles.image} src={badRequest} alt="" />
                </>

            }
        </div>
    )
}

export default Searchfields