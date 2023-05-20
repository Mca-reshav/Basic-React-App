import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TeamsList = () => {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        getTeams();
    }, [])

    const getTeams = async () => {
        let result = await fetch("https://api.npoint.io/20c1afef1661881ddc9c/teamsList")
        result = await result.json();
        setTeams(result);
    }
    return (
        <div>
            <h1 className="title2">
            <img src="https://w7.pngwing.com/pngs/662/347/png-transparent-trophy-illustration-sports-marketing-computer-icons-coach-dyscyplina-sportu-sports-sell-icon-miscellaneous-blue-sport.png" alt="logo" ></img><h1 className="heading">TEAMS LIST</h1></h1>
            <Link to="/p"><button className="appbtn">Players List</button></Link>
            <input type="text" name="data" className="searchBox" placeholder="Search Here"></input>
            <table>
                <tbody>
                    <tr className="tableHead">
                        <td>Sno</td>
                        <td>TID</td>
                        <td>WebName</td>
                        <td>IsActive</td>
                        <td>ShortName</td>
                        <td>OfficialName</td>
                    </tr></tbody>
            </table>
            {
                teams.length > 0 ? teams.map((item, index) =><table>
                    <tbody>
                        <tr key={item.TID}>
                            <td>{index + 1}</td>
                            <td>{item.TID}</td>
                            <td>{item.WebName}</td>
                            <td>{item.IsActive}</td>
                            <td>{item.ShortName}</td>
                            <td>{item.OfficialName}</td>
                        </tr></tbody></table>) : <h2>Data is feteching from the server...</h2>
            }
        </div>
    )
}
export default TeamsList;