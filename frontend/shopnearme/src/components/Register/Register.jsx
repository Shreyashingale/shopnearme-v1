import React, { useState } from 'react'
import Menu from '../NavBar/Menu'
import styles from './Register.module.css'
import Form from 'react-bootstrap/Form';
import { TailSpin } from 'react-loader-spinner';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const Register = () => {
  

  const [categoryValue, setCategoryValue] = useState("");
  const handleCategory = (e) => {
    setCategoryValue(e.target.value);
  }
  //issue faced the name of variable should be equal to the schema names
  const [shop, setShop] = useState({
    shopName: "", category: "", services: "", address: "", coOrdinates: ""
  });
  shop["category"] = categoryValue;//object properties
  const [loader , setLoader] = useState(false);
  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    console.log(shop[name]);
    setShop({ ...shop, [name]: value })
    console.log(shop);

  }
  const postData = async (e) => {
    e.preventDefault();
    setLoader(true);
    const { shopName, category, services, address, coOrdinates, pinCode } = shop;

    const res = await fetch('/addShop', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        shopName, category, services, address, coOrdinates, pinCode
      })
    });
    const data = await res.json();
    if (res.status === 422 || !data) {
      setLoader(false);
      toast.error('Invalid Registration', {
        position: toast.POSITION.TOP_CENTER
    });
    }
    else {
      setLoader(false);
      toast.success('Registration Successful', {
        position: toast.POSITION.TOP_CENTER
    });;
    }
  }
  return (
    <>
      <Menu />
      <ToastContainer />
      <div className={styles.formDiv}>
        <form method="POST" className={styles.formContainer}>
          <div className="form-group">
            <label >Shop Name</label>
            <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Enter Shop Name" name='shopName' value={shop.shopName} onChange={handleInputs} />
            <small className="form-text text-muted">Enter the shop name that you want to display</small>
          </div>
          <div className="form-group">
            <label>Category</label>
            <Form  >
              <Form.Select onChange={handleCategory} aria-label="Default select example" className="form-control">
                <option>Select Shop</option>
                <option value="food">Food</option>
                <option value="cafe">Cafe</option>
                <option value="saloon">saloon</option>
                {console.log(categoryValue)};
              </Form.Select>
            </Form>

          </div>
          <div className="form-group">
            <label>Services</label>
            <input type="text" className="form-control" placeholder="Services" name='services' value={shop.services} onChange={handleInputs} />
          </div>
          <div className="form-group">
            <label>Address</label>
            <input type="text" className="form-control" placeholder="Address" name='address' value={shop.address} onChange={handleInputs} />
          </div>
          <div className="form-group">
            <label>Coordinates</label>
            <input type="text" className="form-control" placeholder="Coordinates" name='coOrdinates' value={shop.coOrdinates} onChange={handleInputs} />
          </div>
          <div className="form-group">
            <label>Pincode</label>
            <input type="text" className="form-control" placeholder="Pincode" name='pinCode' value={shop.pinCode} onChange={handleInputs} />
          </div>
          <div className={styles.btnDiv}>
            <button type="submit" className={styles.searchBtn} onClick={postData}>Register</button>
            {loader && 
            <TailSpin
                height="20"
                width="20"
                color="#ffff"
                radius="2"
                wrapperClass={styles.loader}
              />
            }
          </div>


        </form>
      </div >
    </>
  )
}

export default Register
