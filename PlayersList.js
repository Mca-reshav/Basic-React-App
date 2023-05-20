import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PlayersList = () => {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        getPlayers();
    }, [])

    const getPlayers = async () => {
        let result = await fetch("https://api.npoint.io/20c1afef1661881ddc9c/playerList")
        result = await result.json();
        setPlayers(result);
    }
    return (
        <div className="product-list">
            <h1 className="title">
                <img src="https://www.iconbunny.com/icons/media/catalog/product/cache/2/thumbnail/600x/1b89f2fc96fc819c2a7e15c7e545e8a9/3/5/352.12-football-player-icon-iconbunny.jpg" alt="logo"></img><h1 className="heading">PLAYERS LIST</h1></h1>
            <Link to="/"><button className="appbtn">Teams List</button></Link>
            <input type="text" name="data" className="searchBox" placeholder="Search Here"></input>
            <table>
                <tbody>
                    <tr className="tableHead">
                        <td>Sno</td>
                        <td>OG</td>
                        <td>PC</td>
                        <td>PE</td>
                        <td>PM</td>
                        <td>PS</td>
                        <td>RC</td>
                        <td>YC</td>
                        <td>TID</td>
                        <td>GDID</td>
                        <td>LSCS</td>
                        <td>LSGC</td>
                        <td>LSGS</td>
                        <td>LSOG</td>
                        <td>LSPC</td>
                        <td>LSPE</td>
                        <td>LSPM</td>
                        <td>LSPS</td>
                        <td>LSRC</td>
                        <td>LSYC</td>
                        <td>CCode</td>
                        <td>Saves</td>
                        <td>Skill</td>
                        <td>TName</td>
                        <td>Value</td>
                        <td>Assist</td>
                        <td>Injury</td>
                        <td>PDName</td>
                        <td>PFName</td>
                        <td>SelPer</td>
                        <td>TSCode</td>
                        <td>TotPts</td>
                        <td>CurGDID</td>
                        <td>CurGDNo</td>
                        <td>LSSaves</td>
                        <td>PStatus</td>
                        <td>Trained</td>
                        <td>AwayGoal</td>
                        <td>CurGDPts</td>
                        <td>IsActive</td>
                        <td>IsPlayed</td>
                        <td>LSAssist</td>
                        <td>MatchAtd</td>
                        <td>MinsPlyd</td>
                        <td>SelInPer</td>
                        <td>AvbStatus</td>
                        <td>PenaltyGS</td>
                        <td>SelCapPer</td>
                        <td>SelOutPer</td>
                        <td>SkillDesc</td>
                        <td>TofflName</td>
                        <td>LSMinsPlyd</td>
                        <td>PStatusdrp</td>
                        <td>IsValueEdit</td>
                        <td>IsValidPlayer</td>
                        <td>IsInFinalSquad</td>
                        <td>IsValidPlayerDesc</td>

                        <td>UpComingMatchesList
                            <table>
                                <tbody>
                                    <tr className="innerTableHead">
                                        <td>TID</td>
                                        <td>TLoc</td>
                                        <td>CCode</td>
                                        <td>MDate</td>
                                        <td>VsTID</td>
                                        <td>TSCode</td>
                                        <td>VsTLoc</td>
                                        <td>VsCCode</td>
                                        <td>VsTSCode</td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr></tbody>
            </table>
            {
                players.length > 0 ? players.map((item, index) => <table><tbody><tr key={item.TID}>
                    <td>{index + 1}</td>
                    <td>{item.OG}</td>
                    <td>{item.PC}</td>
                    <td>{item.PE}</td>
                    <td>{item.PM}</td>
                    <td>{item.PS}</td>
                    <td>{item.RC}</td>
                    <td>{item.YC}</td>
                    <td>{item.TID}</td>
                    <td>{item.GDID}</td>
                    <td>{item.LSCS}</td>
                    <td>{item.LSGC}</td>
                    <td>{item.LSGS}</td>
                    <td>{item.LSOG}</td>
                    <td>{item.LSPC}</td>
                    <td>{item.LSPE}</td>
                    <td>{item.LSPM}</td>
                    <td>{item.LSPS}</td>
                    <td>{item.LSRC}</td>
                    <td>{item.LSYC}</td>
                    <td>{item.CCode}</td>
                    <td>{item.Saves}</td>
                    <td>{item.Skill}</td>
                    <td>{item.TName}</td>
                    <td>{item.Value}</td>
                    <td>{item.Assist}</td>
                    <td>{item.Injury}</td>
                    <td>{item.PDName}</td>
                    <td>{item.PFName}</td>
                    <td>{item.SelPer}</td>
                    <td>{item.TSCode}</td>
                    <td>{item.TotPts}</td>
                    <td>{item.CurGDID}</td>
                    <td>{item.CurGDNo}</td>
                    <td>{item.LSSaves}</td>
                    <td>{item.PStatus}</td>
                    <td>{item.Trained}</td>
                    <td>{item.AwayGoal}</td>
                    <td>{item.CurGDPts}</td>
                    <td>{item.IsActive}</td>
                    <td>{item.IsPlayed}</td>
                    <td>{item.LSAssist}</td>
                    <td>{item.MatchAtd}</td>
                    <td>{item.MinsPlyd}</td>
                    <td>{item.SelInPer}</td>
                    <td>{item.AvbStatus}</td>
                    <td>{item.PenaltyGS}</td>
                    <td>{item.SelCapPer}</td>
                    <td>{item.SelOutPer}</td>
                    <td>{item.SkillDesc}</td>
                    <td>{item.TofflName}</td>
                    <td>{item.LSMinsPlyd}</td>
                    <td>{item.PStatusdrp}</td>
                    <td>{item.IsValueEdit}</td>
                    <td>{item.IsValidPlayer}</td>
                    <td>{item.IsInFinalSquad}</td>
                    <td>{item.IsValidPlayerDesc}</td>
                    <td>{
                        item.UpComingMatchesList.map((key) => <table>
                            <tbody>
                                <tr className="innerTableHead2"><td>{key.TID}</td>
                                    <td>{key.TLoc}</td>
                                    <td>{key.CCode}</td>
                                    <td>{key.MDate}</td>
                                    <td>{key.VsTID}</td>
                                    <td>{key.TSCode}</td>
                                    <td>{key.VsTLoc}</td>
                                    <td>{key.VsCCode}</td>
                                    <td>{key.VsTSCode}</td>
                                </tr>
                            </tbody>
                        </table>)
                    }</td>
                </tr></tbody></table>) : <h2>Data is feteching from the server...</h2>
            }
        </div>
    )
}
export default PlayersList;