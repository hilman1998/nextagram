import React, { useEffect, useState } from "react"
import UserImages from "../components/UserImages"
import axios from "axios"
import { Container } from "reactstrap"

const MyProfilePage = () => {
    const [user, setUser] = useState({})

    useEffect(() => {
        axios.get(`https://insta.nextacademy.com/api/v1/users/me`,
            {
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem("token")
                } // authourization in the header is needed
            })
            .then(result => {
                setUser(result.data)
            })
            .catch(error => {
                console.log('ERROR: ', error)
            })
    }, [])
    return (
        <Container>
            {
                user ?
                    <div className="text-center m-3">
                        <img src={user.profile_image} alt={user.username} width="150" className="rounded-circle img-thumbnail img-fluid" />
                        <h3>@{user.username}</h3>
                    </div>
                    : null
            }
            <UserImages userId={user.id} />
        </Container>
    )
}

export default MyProfilePage