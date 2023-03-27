import { createSlice } from "@reduxjs/toolkit";

const startProfile = {
    firstName: 'Bob', lastName: 'Smith', handle: '@bsmith',
    profilePicture: 'react_logo.png', 	bannerPicture: 'swiss_alps.jpg',
    bio: 'Faculty, Software Engineer, AI, Space, and renewable enthusiast. Retuits and likes are not endorsements.',
    website: 'youtube.com/webdevtv',
    location: 'Boston, MA',	dateOfBirth: '10/16/1982',	dateJoined: '2/2011',
    followingCount: 340,	followersCount: 223
}

const profileSlice = createSlice({
    name: 'profile',
    initialState: startProfile,
    reducers: {
        updateName(state, action) {
            const names = action.payload.split(' ');
            state.firstName = names[0];
            state.lastName = names.slice(1).join(' ')
        },
        updateBio(state, action) {
            state.bio = action.payload;
        },
        updateLocation(state, action) {
            state.location = action.payload;
        },
        updateWebsite(state, action) {
            state.website = action.payload;
        },
        updateBirthdate(state, action) {
            const birthdate_list = action.payload.split('-');
            const birthdate = `${birthdate_list[1]}/${birthdate_list[2]}/${birthdate_list[0]}`;
            console.log(state.dateOfBirth)
            state.dateOfBirth = birthdate;
            console.log(state.dateOfBirth)
        }
    }
});

export const {updateName, updateBio, updateLocation, updateWebsite, updateBirthdate} = profileSlice.actions;
export default profileSlice.reducer;