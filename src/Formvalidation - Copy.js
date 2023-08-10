import React, { useState, useEffect } from "react";
import { useFormInputValidation } from "react-form-input-validation";

export default function Formvalidation() {

    const [fields, errors, form] = useFormInputValidation({
        email_address: "",
        password: "",
        age: "",
        profileimage: "",
      }, {
        email_address: "required|email",
        password: "required",
        age: "required",
        profileimage: "required",
      });

    //   useEffect(() => {
    //     if (form.isValidForm) {
    //         alert();
    //     }
    //   }, []);

      
      const onSubmit = async (event) => {
        const isValid = await form.validate(event);
        if (isValid) {

          console.log(fields.profileimage);
        }
      }


  return (
    <div>
        <form
            className="myForm"
            noValidate
            autoComplete="off"
            onSubmit={onSubmit}
        >
        <div className="row">
            <div className="col-md-12">
                <label className="form-label">Email</label>
                <input
                    className="form-control"
                    type="email"
                    name="email_address"
                    onBlur={form.handleBlurEvent}
                    onChange={form.handleChangeEvent}
                    value={fields.email_address}
                />
                <label className="error">
                {errors.email_address
                    ? errors.email_address
                    : ""}
                </label>
            </div>
  
            <div className="col-md-12">
                <label>Password</label>
                <input
                    className="form-control"
                    type="password"
                    name="password"
                    onBlur={form.handleBlurEvent}
                    onChange={form.handleChangeEvent}
                    value={fields.password}
                />
                <label className="error">
                {errors.password
                    ? errors.password
                    : ""}
                </label>
            </div>

            <div className="col-md-12">
                <label>Image</label>
                <input
                    className="form-control"
                    type="file"
                    name="profileimage"
                    onBlur={form.handleBlurEvent}
                    onChange={form.handleChangeEvent}
                    value={fields.profileimage}
                />
                <label className="error">
                {errors.profileimage
                    ? errors.profileimage
                    : ""}
                </label>
            </div>

            <div className="col-md-12">
                <label>select</label>
                <select
                aria-label="Default select example"
                className="form-control"
                name="age"
                onBlur={form.handleBlurEvent}
                onChange={form.handleChangeEvent}
                value={fields.age}
                >
                        <option value="">Select option</option>
                        <option value="1">Select option 1</option>
                        <option value="2">Select option 2</option>
                </select>
                <label className="error">
                {errors.age
                    ? errors.age
                    : ""}
                </label>
            </div>
  
            <div className="col-md-12">
                <button type="submit" className="btn btn-outline-success">Submit</button>
            </div>
      </div>
    </form>
    </div>
  )
}
