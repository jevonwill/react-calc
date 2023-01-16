import { React, useState } from 'react';
import { useFormik } from 'formik';


function Calc() {
    const [freightText, setFreight] = useState('0');
    const [clearenceText, setClearence] = useState('0');
    const [emailText, setEmail] = useState(' ');
    const validate = values => {
        const errors = {};
        if (!values.height) {
            errors.height = "Required";
        } else if (values.height.length > 5) {
            errors.height = "Must be less than 5 digits"
        }
        
        if (!values.width) {
            errors.width = "Required";
        } else if (values.width.length > 5) {
            errors.width = "Must be less than 5 digits"
        }
        
        if (!values.length) {
            errors.length = "Required";
        } else if (values.length.length > 5) {
            errors.length = "Must be less than 5 digits"
        }
        
        if (!values.phone) {
            errors.phone = "Required";
        } else if (values.phone.length > 11) {
            errors.phone = "Must be less than 11 digits"
        }
         if (!values.email) {
            errors.email = "Required";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = "Invalid email address"
        }
        
        if (!values.address) {
            errors.address = "Required";
        } 

        if (!values.value) {
            errors.value = "Required";
        } else if (values.value.length > 9) {
            errors.width = "Must be less than 9 digits"
        }

        return errors;
    };

    const formik = useFormik({
        initialValues: {
            height: '',
            width: '',
            length: '',
            phone: '',
            email: '',
            address: '',
            value: '',
            clearence: '',
        },
        validate,
        onSubmit: values => {
           const endpoint = "https://332vcbcn85.execute-api.us-east-1.amazonaws.com/default/ubt-landing-page";
           const phone = values.phone;
           const freight = (values.height + values.width + values.length) * 2; 
           const clearence = values.value * values.clearence;
           const email = values.email;

           const body = JSON.stringify({
            phone: values.phone,
            email: values.email,
            address: values.address,
            value: values.value,
            freight: freight,
            clearence: clearence
           });

           const requestOptions = {
            method: "POST",
            body
           };

           fetch(endpoint, requestOptions)
            .then((response) => {
                if (!response.ok) throw new Error("Error in fetch!");
                return response.json();
            })
            .then((response) => {
                console.log("Email sent successfully!")
            })
            .catch((error) => {
                console.log("An error occurred!")
            })

           setFreight(freight)
           setClearence(clearence)
           setEmail(email)
          
        }
    }) 
    
    return (
        <div className='Calc container mx-auto bg-white py-10 px-6 sm:w-260 w-500'>
            <div className='container mx-auto'>
                <form onSubmit={formik.handleSubmit} className="mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4 ">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Height
                        </label>
                        <input 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder='Height in inches'
                        id="height"
                        type="number" 
                        step="1"
                        name="height"
                        onChange={formik.handleChange}
                        value={formik.values.height}
                        />
                    </div>
                    <div className="mb-4 ">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Width
                        </label>
                        <input 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder='Width in inches'
                        id="width"
                        type="number" 
                        step="1"
                        name="width"
                        onChange={formik.handleChange}
                        value={formik.values.width}
                        />
                    </div>

                    <div className="mb-4 ">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Length
                        </label>
                        <input 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder='Length in inches'
                        id="length"
                        type="number" 
                        step="1"
                        name="length"
                        onChange={formik.handleChange}
                        value={formik.values.length}
                        />
                    </div>
                    
                    <div className="mb-4 ">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Phone
                        </label>
                        <input 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder='813-123-4567'
                        id="phone"
                        type="number" 
                        step="1"
                        name="phone"
                        onChange={formik.handleChange}
                        value={formik.values.phone}
                        />
                    </div>
                    
                    <div className="mb-4 ">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Email
                        </label>
                        <input 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder='yourname@email.com'
                        id="email"
                        type="email" 
                        name="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        />
                    </div>
                    
                    <div className="mb-4 ">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Address
                        </label>
                        <input 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder='Ex: 5441 SW 134th Ave, Miramar, FL, 33027'
                        id="address"
                        type="text" 
                        name="address"
                        onChange={formik.handleChange}
                        value={formik.values.address}
                        />
                    </div>
                    
                    <div className="mb-4 ">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Value
                        </label>
                        <input 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder='Value of item(s) in USD'
                        id="value"
                        type="number" 
                        step="1"
                        name="value"
                        onChange={formik.handleChange}
                        value={formik.values.value}
                        />
                    </div>
                    
                    <div className="mb-4 ">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Clearence
                        </label>
                        <select 
                        className=""
                        id="clearence"
                        type="number" 
                        step="1"
                        name="clearence"
                        onChange={formik.handleChange}
                        value={formik.values.clearence}
                        >
                            <option value="0.505">Car parts</option>
                            <option value="0.605">Mattresses & Furniture</option>
                            <option value="0.185">Tablets and Computers</option>
                            <option value="0.03">Books</option>
                            <option value="0.205">Marine related items, plumbing, tiles, phones, fabric</option>
                            <option value="0.355">TVs, most other electronics, clothing, household items</option>

                        </select>
                    </div>
                    
                    <div className="flex items-center justify-between">
                        <button className="bg-gold  text-white py-2 px-4 rounded " type="submit">
                            Submit
                        </button>
                    </div>
                </form>

                <div className='mb-4'>
                    <h2 className='text-xl'>Grand Total</h2>
                    <p>Freight: ${freightText}</p>
                    <p>Clearence: ${clearenceText}</p>
                    <p>One of our representatives will reach out to you at: {emailText}</p>
                </div>
            </div>
        </div>
    );
}

export default Calc;