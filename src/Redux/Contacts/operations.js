
import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from 'config/ApiConfig';


export const fetchContactsThunk = createAsyncThunk (
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await instance.get('/contacts');
      return response.data;
    } catch (error) {
     return thunkAPI.rejectWithValue(error.message)
    }
  }
);

export const addContactThunk = createAsyncThunk (
    'contacts/addContact',
    async (contact, thunkApi) => {
        try {
          const { data } = await instance.post('/contacts', contact);
      return data;
        }
         catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
    'contacts/deleteContact',
    async (id, thunkApi) => {
        try {
            await instance.delete(`/contacts/${id}`);
      return id;
        }
        catch (error) {
            return thunkApi.rejectWithValue(error.message);     
        } 
    },
    {
        condition: (_, thunkAPI) => {
            const loading = thunkAPI.getState().contacts.isLoading;
            if (loading) {
                return false
            }
        }
    }
)
