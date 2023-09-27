import React from 'react'

export default function From() {
  return (
    <form class="form-inline">
  <div class="form-group mb-2">
    <label for="Email" class="sr-only">Email</label><br/>
    <input type="text" id="Email" placeholder="Email"/>
  </div>
  <div class="form-group mx-sm-3 mb-2">
    <label for="name" class="sr-only">Name</label><br/>
    <input type="text" id="name" placeholder="Name"/>
  </div>
  <div class="form-group mx-sm-3 mb-2">
    <label for="sirname" class="sr-only">Sir Name</label><br/>
    <input type="text" id="sirname" placeholder=" Sir Name"/>
  </div>
  <div class="form-group mx-sm-3 mb-2">
    <label for="Password" class="sr-only">Password</label><br/>
    <input type="password" id="Password" placeholder="Password"/>
  </div>
  <div class="form-group mx-sm-3 mb-2">
    <label for="number" class="sr-only">Number</label><br/>
    <input type="number" id="number" placeholder="Number"/>
  </div>
  <div class="form-group mx-sm-3 mb-2">
    <label for="Description" class="sr-only">Description</label><br/>
    <input type="textarea" id="Description" placeholder="Description"/>
    </div>
 
  <button type="submit" class="btn btn-primary mb-2">Submit</button>
</form>
  )
}
