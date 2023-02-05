const ProfileCard = ({username,email,first_name,last_name,profile_photo})=>{
    return (
        <div id="card">
				<div
					style={{ display: "flex", justifyContent: "center", padding: "4px" }}
				>
					<h2>Name: {first_name} {last_name}</h2>

					<span class="left bottom">{username}</span>
                   
					<span class="right bottom">email: {email}</span>
					<br></br>
					<img src={profile_photo} />
				</div>
		</div>
    );
}

export default ProfileCard;