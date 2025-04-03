"use client";
import React from 'react'
import { notFound } from "next/navigation";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import { useParams } from "next/navigation";
import { CardActions, Button } from '@mui/material';

export default function AuthPage() {
    const params = useParams();
    const { auth } = params;
    if (auth !== "login" && auth !== "signup" && auth !== "forgot-password") {
        notFound();
    }
    var textFields = [];
    var buttonText = "";
    if (auth === "login") {
        textFields = ["email", "password"];
        buttonText = "LOGIN";
    }
    else if (auth === "signup") {
        textFields = ["name", "email", "password"];
        buttonText = "SIGNUP";
    }
    else {
        textFields = ["email"];
        buttonText = "RESET";
    }

    return (
        <Card>
            <CardContent>
                {textFields.map((textField) => (
                    <TextField id="outlined-basic" label={textField} variant="outlined" key={textField} />
                ))}
                {auth === "login" && <a key="forgot-password">Forgot Password</a>}
            </CardContent>
            <CardActions>
                <Button size="small">{buttonText}</Button>
            </CardActions>
        </Card>
    )
}
