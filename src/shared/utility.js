export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    }
}

export const checkValidity = (value, rules) => {
    let isValid = true;
    if(rules && rules.required) {
        isValid = value.trim() !== '' && isValid
    }

    if(rules && rules.minLength) {
        isValid = value.length >= rules.minLength && isValid
    }

    if(rules && rules.maxLength) {
        isValid = value.length <= rules.maxLength && isValid
    }

    if(rules.isEmail) {
        const pattern = /[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)/
        isValid = pattern.test(value) && isValid
    }

    if(rules.isNumeric) {
        const pattern = /^\d+$/;
        isValid = pattern.test(value) && isValid
    }

    return isValid;
}