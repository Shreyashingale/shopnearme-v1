import React, { useState } from 'react'
import Menu from '../NavBar/Menu'
import styles from './Register.module.css'
import Form from 'react-bootstrap/Form';


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
      window.alert("Invalid Registration");
    }
    else {
      window.alert("succesfuly registered");
    }
  }
  return (
    <>
      <Menu />
      <div className={styles.formDiv}>
        <form method="POST" className={styles.formContainer}>
          <div className="form-group">
            <label >Shop Name</label>
            <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Enter Shop Name" name='shopName' value={shop.shopName} onChange={handleInputs} />
            <small className="form-text text-muted">Enter the shop name that you want to display</small>
          </div>
          <div className="form-group">
            <label>Category</label>
            {/* <input type="text" className="form-control" placeholder="Category" name='category' value={shop.category} onChange={handleInputs} /> */}
            { /*heres the issue fix this later**/}
            <Form  >
              <Form.Select onChange={handleCategory} aria-label="Default select example"  className="form-control">
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
            <input type="text" className="form-control" placeholder="pinCode" name='pinCode' value={shop.pinCode} onChange={handleInputs} />
          </div>
          <button type="submit" className="btn btn-dark" onClick={postData}>Register</button>
        </form>
      </div >
    </>
  )
}

export default Register
