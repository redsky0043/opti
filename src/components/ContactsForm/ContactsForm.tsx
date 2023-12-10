'use client'
import {useEffect, useState} from "react"
import FormInputText from "@/components/FormInputText"
import { yupResolver } from '@hookform/resolvers/yup'
import { FormProvider, useForm, SubmitHandler, Resolver } from "react-hook-form"

import validationSchema from './validation'

interface FormData {
    name: string;
    email: string;
    phone: string;
    message: string;
    terms: boolean;
}

export const ContactsForm = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const [isSuccess, setIsSuccess] = useState<boolean>(false)
    const [isError, setIsError] = useState<boolean>(false)
    const methods = useForm<FormData>({
        mode: 'onChange',
        // @ts-ignore
        resolver: yupResolver(validationSchema),
    })

    const { handleSubmit, reset, register, formState, setError, setFocus } = methods

    const { errors } = formState

    const onSubmit: SubmitHandler<FormData> = async (formData: {}) => {
        setLoading(true)

        const formDataToSend = new FormData()

        Object.keys(formData).forEach((key) => {
            // @ts-ignore
            formDataToSend.append(key, formData[key])
        })

        await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: formDataToSend,
        })
            .then(response => {
                setLoading(false)

                if (response.ok) {
                    setIsSuccess(true)

                    setTimeout(() => {
                        setIsSuccess(false)
                        reset()
                    }, 5000)
                }

                return response.json()
            })
            .then(({ violations }) => {
                if (violations) {
                    violations.forEach(({ propertyPath, title }: {propertyPath: string, title: string}) => {
                        // @ts-ignore
                        setError(propertyPath, {
                            type: 'custom',
                            message: title,
                        })
                    })
                }
            })
            .catch((e) => {
                setLoading(false)
                setIsError(true)
                setTimeout(() => {
                    setIsError(false)
                    reset()
                }, 5000)
                console.error('Server Error:', e)
            })
    }

    return (
        <FormProvider {...methods}>
            <section className="contact-form" id="contacts">
                <div className="container">
                    <div className="contact-form__wrapper">
                        <div className="contact-form__bg"></div>
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className={`contact-form__form ${loading ? 'contact-form__form--loading' : ''} ${isError ? 'contact-form__form--failed' : ''} ${isSuccess ? 'contact-form__form--loaded' : ''}`}
                        >
                            <h3 className="h3 title contact-form__headline">
                                Do you want to optimize your business success?
                            </h3>
                            <div className="contact-form__actions">
                                <div className="contact-form__inputs">
                                    <label className="textfield">
                                        <FormInputText
                                            name='name'
                                            label='Your name'
                                        />
                                    </label>
                                    <label className="textfield">
                                        <FormInputText
                                            name='email'
                                            label='Email address'
                                        />
                                    </label>
                                    <label className="textfield">
                                        <FormInputText
                                            type="tel"
                                            name='phone'
                                            label='Phone number'
                                        />
                                    </label>
                                    <label className="textfield textfield--textarea">
                                        <FormInputText
                                            rows={3}
                                            name='message'
                                            label='Your message'
                                        />
                                    </label>
                                </div>
                                <label className={`checkbox contact-form__checkbox ${errors.terms ? 'has-error' : ''}`}>
                                    <input
                                        className='checkbox__mark'
                                        type="checkbox"
                                        {...register('terms')}
                                    />
                                    <div className="checkbox__text">
                                        I agree with <a className="underline underline--reverse" href="terms-of-use">Terms of use</a> and <a className="underline underline--reverse" href="privacy-policy">Privacy policy</a>
                                    </div>
                                </label>
                                <button className="button button--blue contact-form__button">
                                    Send
                                </button>
                            </div>
                            <div className="contact-form__running">
                                <div className="marquee">
                                    <span>Fill out the form and receive prompt assistance. Fill out the form and receive prompt assistance.</span>
                                </div>
                            </div>
                            {isSuccess && <div className="contact-form__status contact-form__status--loaded">
                                🏀
                                <p className="title contact-form__title">
                                    Thank you for your interest
                                </p>
                                <p className="title contact-form__subtitle">
                                    Our team will contact you shortly.
                                </p>
                            </div>}
                            {loading && <div className="contact-form__status contact-form__status--loading">
                                🏃
                                <p className="title contact-form__title">
                                    Your application is being sent...
                                </p>
                            </div>}
                            {isError && <div className="contact-form__status contact-form__status--failed">
                                😩
                                <p className="contact-form__title">
                                    Something went wrong
                                </p>
                                <p className="contact-form__subtitle">
                                    Sorry, please try submitting the form later.
                                </p>
                            </div>}
                        </form>
                    </div>
                </div>
            </section>
        </FormProvider>
    )
}
