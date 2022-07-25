// This is a file used to validate the inputs of the form before sending the data
import React, { useState } from "react";
import { omit } from "lodash";

const useForm = (callback) => {
    //Form values
    const [values, setValues] = useState({});
    //Errors
    const [errors, setErrors] = useState({});

    const validate = (event, name, value) => {
        //A function to validate each input values

        switch (name) {
            case "firstName":
                if (new RegExp(/^[a-zA-Z]*$/).test(value)) {
                    // Checking if the name consists of letters
                    if (value.length <= 2) {
                        // Checking if the name meets the required length
                        setErrors({
                            ...errors,
                            firstName: "First name is too short.",
                        });
                    } else {
                        // set the error state empty or remove the error for username input
                        //omit function removes/omits the value from given object and returns a new object
                        let newObj = omit(errors, "firstName");
                        setErrors(newObj);
                    }
                } else {
                    setErrors({
                        ...errors,
                        firstName: "Enter correct name format",
                    });
                }
                break;

            case "lastName":
                if (new RegExp(/^[a-zA-Z]*$/).test(value)) {
                    // Checking if there is an error
                    if (value.length <= 2) {
                        setErrors({
                            ...errors,
                            lastName: "Last  name is too short.",
                        });
                    } else {
                        // set the error state empty or remove the error for username input
                        //omit function removes/omits the value from given object and returns a new object
                        let newObj = omit(errors, "lastName");
                        setErrors(newObj);
                    }
                } else {
                    setErrors({
                        ...errors,
                        lastName: "Enter correct name format",
                    });
                }

                break;

            case "email":
                if (
                    !new RegExp(
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    ).test(value)
                ) {
                    setErrors({
                        ...errors,
                        email: "Enter a valid email address",
                    });
                } else {
                    let newObj = omit(errors, "email");
                    setErrors(newObj);
                }
                break;

            case "contact":
                if (new RegExp(/^[0-9\b]+$/).test(value)) {
                    // Checking if there is an error
                    if (value.length <= 5) {
                        setErrors({
                            ...errors,
                            contact:
                                "Phone number atleast have at least 6 characters",
                        });
                    } else {
                        // set the error state empty or remove the error for username input
                        //omit function removes/omits the value from given object and returns a new object
                        let newObj = omit(errors, "contact");
                        setErrors(newObj);
                    }
                } else {
                    setErrors({
                        ...errors,
                        contact: "Enter correct phone number format",
                    });
                }

                break;

            case "password":
                if (
                    !new RegExp(
                        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/
                    ).test(value)
                ) {
                    setErrors({
                        ...errors,
                        password:
                            "Password should contains atleast 8 charaters and containing uppercase,lowercase and numbers",
                    });
                } else {
                    let newObj = omit(errors, "password");
                    setErrors(newObj);
                }
                break;

            default:
                break;
        }
    };

    //A method to handle form inputs
    const handleChange = (event) => {
        //To stop default events
        event.persist();

        let name = event.target.name;
        let val = event.target.value;

        validate(event, name, val);

        //Let's set these values in state
        setValues({
            ...values,
            [name]: val,
        });
    };

    const handleSubmit = (event) => {
        if (event) event.preventDefault();

        if (
            Object.keys(errors).length === 0 &&
            Object.keys(values).length !== 0
        ) {
            callback();
        } else {
            console.log(Object.keys(errors).length) 
            
        }
    };

    return {
        values,
        errors,
        handleChange,
        handleSubmit,
    };
};

export default useForm;
