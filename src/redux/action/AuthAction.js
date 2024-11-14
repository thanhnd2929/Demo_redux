import { createAsyncThunk } from "@reduxjs/toolkit";
import { Alert } from "react-native";

const api_url = 'http://10.14.117.15:5001/api/user/auth'

export const login = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
   console.log("credential: ", credentials);
    try {
        const response = await fetch(`${api_url}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
        });

        const data = await response.json();
        console.log('data: ', data);
        if (data.statusCode == 200) {
            
            return data;
        } else {
            console.log("err", data.message);
            return thunkAPI.rejectWithValue({
                statusCode: data.statusCode || 400,
                message: data.message || 'Đăng nhập thất bại',
            });
        }
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message || 'Lỗi kết nối');
    }
});