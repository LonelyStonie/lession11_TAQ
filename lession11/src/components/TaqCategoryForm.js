import React, { Component } from 'react'

export default class TaqCategoryForm extends Component {
    return (
      <div>
        <form>

        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">Category Name</span>
         <input type="text" class="form-control" 
         name='TaqCategoryName'
         value={''}
         placeholder="Category Name" aria-label="Category Name" aria-describedby="basic-addon1">
        </div>
        </form>
        
        <form>
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">Category status</span>
         <input type="text" class="form-control" 
         name='Category status'
         placeholder="Category status" aria-label="Category status" aria-describedby="basic-addon1">
        </div>

        </form>
      </div>
    )
  }
}
