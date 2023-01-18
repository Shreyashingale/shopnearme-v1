import React from 'react'
import styles from './ShopsTable.module.css';

const ShopsTable = (props) => {
    const {shops} = props;
    const mapArray = (project) => {
        return ( 
            <tbody >
                <tr className="text-center" >
                    <td>{project.shopName}</td>
                    <td>{project.category}</td>
                    <td>{project.services}</td>
                    <td>{project.address}</td>
                    <td>{project.coOrdinates}</td>
                    
                    
                    
                </tr>
            </tbody>
        )
    }
  return (
    <div className='main-box'>

    <div className={styles.tableBox}>
        <table className={styles.tableCont}>
            <tr style={{backgroundColor:"grey"}}>
                <th>ShopName</th>
                <th>Category</th>
                <th> Services</th>
                <th>Address</th>
                <th>Coordinates</th>


            </tr>

            
            {shops && shops.map(mapArray)}


        </table>
    </div>
</div>
  )
}

export default ShopsTable