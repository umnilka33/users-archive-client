import { Card, CardActions, CardContent, IconButton, Tooltip, Typography } from "@mui/material"
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { IUser } from "../../types/types";

interface UserCardProps {
    user: IUser,
    onDelete: (id: string) => void
}
export const UserCard = (props: UserCardProps) => {
    const { user, onDelete } = props;
    const handleDelete = () => onDelete(user.id!)

    const getGender = (gender: string) => {
        if (gender === 'male')
            return 'Мужчина';
        else
            return 'Женщина';
    }

    return (
        <Card sx={{ minWidth: '250px', maxHeight: '235px' }}>
            <CardContent sx={{ backgroundColor: '#dff0f4', maxHeight: '235px' }}>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {user.id}
                </Typography>
                <Typography variant="h5" component="div">
                    {user.lastname}
                </Typography>
                <Typography sx={{ mb: 1.5 }}>
                    {`${user.firstname} ${user.patronymic}`}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {user.phone}
                </Typography>
                <Typography variant="body2" color="#1976d2">
                    {user.email}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {getGender(user.gender)}
                </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: 'end', backgroundColor: '#d5d5d5' }}>
                <Tooltip title="Удалить">
                    <IconButton size="small" onClick={handleDelete} sx={{ color: '#727272' }}>
                        <DeleteOutlineIcon color="inherit" />
                    </IconButton>
                </Tooltip>
            </CardActions>
        </Card>
    )
}