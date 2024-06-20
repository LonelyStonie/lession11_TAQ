import React, { Component } from 'react'

export default function TaqCategoryList({renderTaqCategories}) {
    console.log("renderTaqCategories: ", renderTaqCategories);
    let TaqCategoryElement = renderTaqCategories.map((TaqCategory,index)=>{
        return(
            <tr key={index}>
                <th>{index+1}</th>
                <td>{TaqCategory.TAQid}</td>
                <td>{TaqCategory.TAQcategoryname}</td>
                <td>{TaqCategory.TAQcategorystatus===true?"Hien thi":"Tam Khoa"}</td>
            </tr>
        )
    })
    return (
      <div className='container m-2'>
        <h2>Danh Sach Loai San Pham</h2>
        <table className='table table-bordered'>
            <thead>
                <th>#</th>
                <th>Ma Loai</th>
                <th>Ten Loai</th>
                <th>Trang Thai</th>
                <th>Chuc Nang</th>
            </thead>
            <tbody>
                {TaqCategoryElement}
            </tbody>
        </table>
        <button className='btn btn-primary'>ADD NEW</button>
      </div>
    )
  }

