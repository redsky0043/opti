import { FC } from 'react'
import {Controller, useFormContext} from 'react-hook-form'

export interface IFormInputTextProps {
    name: string,
    label: string,
    checkbox?: boolean,
    type?: string,
    helperText?: string | unknown,
    rows?: any,
    restProps?: {},
    disabled?: boolean,
    multiline?: boolean,
}

const FormInputText: FC<IFormInputTextProps> = ({
    name,
    label,
    helperText,
    rows = null,
    checkbox = false,
    type = 'text',
    disabled = false,
    multiline = false,
    ...restProps
}) => {
    const {control} = useFormContext()

    return (
        <Controller
            name={name}
            defaultValue=""
            control={control}
            render={({field, fieldState}) => (
                <>
                    {fieldState.error && <span className="textfield__error">
                        {fieldState.error.message}
                    </span>}
                    {rows && <textarea
                            {...restProps}
                            rows={rows}
                            placeholder=" "
                            disabled={disabled}
                            value={field.value}
                            className={`textfield__input ${fieldState.error && 'has-error'}`}
                            onChange={event => (field.onChange(event.target.value))}
                    />}
                    {!rows && <input
                        type={type}
                        {...restProps}
                        placeholder=" "
                        disabled={disabled}
                        value={field.value}
                        className={`textfield__input ${fieldState.error && 'has-error'}`}
                        onChange={event => (field.onChange(event.target.value))}
                    />}
                    <span className="textfield__label">
                        {label}
                    </span>
                </>
            )}
        />
    )
}

export default FormInputText
