import { Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, styled, TextField } from "@mui/material"
import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { IUserActionTypes } from "../../types/types";

const StyledForm = styled('form')(() => ({
    width: '300px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '20px',
}))

export const NewUserForm = () => {
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [patronymic, setPatronymic] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [gender, setGender] = useState<string>('');
    const dispatch = useDispatch();
    const handleChange = (event: SelectChangeEvent) => {
        setGender(event.target.value);
    };

    const clearFields = () => {
        setFirstName('');
        setLastName('');
        setPatronymic('');
        setPhone('');
        setEmail('');
        setGender('');
    }
    const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newUser = {
            firstname: firstName,
            patronymic: patronymic,
            lastname: lastName,
            phone: phone,
            email: email,
            gender: gender,
        }
        dispatch({ type: IUserActionTypes.CREATE_USER, payload: newUser });
        clearFields();
    }
    return (
        <StyledForm onSubmit={handleSubmitForm}>
            <TextField
                label="Имя"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
                size="small"
                type="text"
                variant="outlined"
                required />
            <TextField
                label="Отчество"
                onChange={(e) => setPatronymic(e.target.value)}
                value={patronymic}
                size="small"
                type="text"
                variant="outlined" />
            <TextField
                label="Фамилия"
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
                size="small"
                type="text"
                variant="outlined"
                required />
            <TextField
                label="Телефон"
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                size="small"
                type="number"
                variant="outlined"
                required />
            <TextField
                label="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                size="small"
                type="email"
                variant="outlined"
                required />
            <FormControl fullWidth>
                <InputLabel size="small" id="gender-select-label">Пол</InputLabel>
                <Select
                    size="small"
                    labelId="gender-select-label"
                    id="gender-select"
                    value={gender}
                    label="Пол"
                    onChange={handleChange}
                >
                    <MenuItem value='male'>Мужчина</MenuItem>
                    <MenuItem value='female'>Женщина</MenuItem>
                </Select>
            </FormControl>
            <Button variant="contained" color="primary" type='submit'>
                Добавить пользователя
            </Button>
        </StyledForm>
    )
}