import { useState } from "react"
import { Col, Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";

import "bootstrap/dist/css/bootstrap.min.css";

import ProfileCard from "../components/ProfileCard";
import { useEffect } from "react";
import Loading from "../components/Loading";

import { useParams } from "react-router-dom";

const User = () =>{

    let [user,setUser] = useState();

    let {username} = useParams();

    useEffect(()=>{
        fetch(`/user/api/get_user_data/?username=${username}`)
			.then((data) => data.json())
			.then((data) => {
				setUser(data.user);
				setLoading(false);
			});
    },[])

    let [loading,setLoading] = useState(true);

    if(loading) {
        return (
            <Loading/>
        );
    }

    return(
        <div>
			<div id="gradient"></div>
			<ProfileCard
				email={user.email}
				first_name={user.first_name}
				last_name={user.last_name}
				username={user.username}
				profile_photo={'/media/default.jpeg'}
			/>

			<br></br>
			<br></br>
			<br></br>
			<div className="App">
				<Container>
					<br></br>
					<Row >
						<Col>
                        <div style={{justifyContent: "center", textAlign: "center"}}>
                            <button type="button" class="btn btn-secondary">
                                
                                Send Frind Request
                            
                            </button>
                        </div>
                        
                        </Col>
					</Row>
				</Container>
			</div>
		</div>
    );

}

export default User;