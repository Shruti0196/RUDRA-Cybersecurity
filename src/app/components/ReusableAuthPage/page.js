import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import { CardActions, Button } from '@mui/material';
import Link from 'next/link';

export default function ReusableAuthPage({ fields, buttonText, authType }) {
    return (
        <Card>
            <CardContent>
                {fields.map((textField) => (
                    <TextField id="outlined-basic" label={textField} variant="outlined" key={textField} />
                ))}
                {authType === "login" && <Link href="/forgot-password" key="forgot-password">Forgot Password</Link>}
            </CardContent>
            <CardActions>
                <Button size="small">{buttonText}</Button>
            </CardActions>
        </Card>
    )
}
