import * as yup from 'yup'

const schema = yup.object().shape({
    name: yup.string().min(2).required('Your name is required'),
    email: yup.string().email('Must be a valid email').required('Email address is required'),
    phone: yup.string().min(8).required('Phone number is required'),
    terms: yup.bool().oneOf([true], 'You must agree to the Terms of Use and Privacy Policy'),
})

export default schema
