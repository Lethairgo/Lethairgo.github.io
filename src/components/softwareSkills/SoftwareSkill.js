import React from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";

export default function SoftwareSkill() {
    return (
        <div>
            <div className="software-skills-main-div">
                <ul className="dev-icons">
                    {skillsSection.softwareSkills.map((skills, i) => {
                            return (
                                <li
                                    key={i}
                                    className="software-skill-inline"
                                    name={skills.skillName}
                                >
                                    <i className={skills.fontAwesomeClassname}></i>
                                    <p>{skills.skillName}</p>
                                </li>
                            );

                        }
                    )}
                    <li
                        className="software-skill-inline"
                        name="django"
                    >
                        <i className="fab django">
                            <img
                                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCA0OCA0OCI+CjxwYXRoIGZpbGw9IiMwMDRkNDAiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTgsMTZ2MTIuNjQ2QzYuNjU1LDI4LjksNS45NDksMjksNC44NzgsMjkgQzEuNjcsMjguOTk3LDAsMjcuNTY1LDAsMjQuODE2YzAtMi42NDksMS43NzEtNC4zNjgsNC41MTYtNC4zNjhjMC40MjYsMCwwLjc1LDAuMDMzLDEuMTQzLDAuMTM0VjE2SDh6IE01LjY1OSwyMi42NzIgYy0wLjMwOC0wLjEtMC41NjEtMC4xMzQtMC44ODYtMC4xMzRjLTEuMzI4LDAtMi4wOTYsMC44MDktMi4wOTYsMi4yMjhjMCwxLjM4MSwwLjczNCwyLjE0MywyLjA3OSwyLjE0MyBjMC4yOTEsMCwwLjUyNy0wLjAxNiwwLjkwMy0wLjA2N1YyMi42NzJMNS42NTksMjIuNjcyeiIgY2xpcC1ydWxlPSJldmVub2RkIj48L3BhdGg+PHBhdGggZmlsbD0iIzAwNGQ0MCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTIsMjAuMDQ2djYuNjE4YzAsMi4wNzYtMC4xNTUsMy4yMjQtMC42MTIsNC4wODQgYy0wLjQyNiwwLjgyNy0wLjk4NywxLjM0OS0yLjE0NiwxLjkyNWwtMi40MzctMS4xNDljMS4xNTktMC41MzksMS43MjEtMS4wMTUsMi4wNzktMS43NDJjMC4zNzUtMC43NDMsMC40OTQtMS43NTQsMC40OTQtNC4wMTcgdi01LjcyMUgxMnoiIGNsaXAtcnVsZT0iZXZlbm9kZCI+PC9wYXRoPjxyZWN0IHdpZHRoPSIyLjYyMyIgaGVpZ2h0PSIyLjcxMyIgeD0iOS4zNzciIHk9IjE2IiBmaWxsPSIjMDA0ZDQwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCI+PC9yZWN0PjxwYXRoIGZpbGw9IiMwMDRkNDAiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEzLjczNCwyMC44NzZjMS4xMzYtMC41NTIsMi4yMjMtMC43OTUsMy40MDgtMC43OTUgYzEuMzIxLDAsMi4xODksMC4zNjMsMi41NzMsMS4wNzNDMTkuOTMsMjEuNTUxLDIwLDIyLjA2OCwyMCwyMy4xNzV2NS40MDdjLTEuMTUyLDAuMTcxLTIuNjA2LDAuMjk0LTMuNjczLDAuMjk0IGMtMi4xNTYsMC0zLjEyMy0wLjc3OC0zLjEyMy0yLjUwNWMwLTEuODY4LDEuMjg1LTIuNzMxLDQuNDQxLTMuMDA2VjIyLjc4YzAtMC40ODMtMC4yMzUtMC42NTgtMC44ODQtMC42NTggYy0wLjk1LDAtMi4wMiwwLjI3OC0zLjAyNCwwLjgxMkwxMy43MzQsMjAuODc2eiBNMTcuNzYxLDI1LjEwN2MtMS43MDIsMC4xNzEtMi4yNTUsMC40NDktMi4yNTUsMS4xNDEgYzAsMC41MTgsMC4zMTgsMC43NjEsMS4wMiwwLjc2MWMwLjM4NCwwLDAuNzM1LTAuMDM0LDEuMjM1LTAuMTJMMTcuNzYxLDI1LjEwN0wxNy43NjEsMjUuMTA3eiIgY2xpcC1ydWxlPSJldmVub2RkIj48L3BhdGg+PHBhdGggZmlsbD0iIzAwNGQ0MCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMjEuNDE4LDIwLjY5M2MxLjUyLTAuNDIxLDIuNzcyLTAuNjEzLDQuMDQxLTAuNjEzIGMxLjMxOCwwLDIuMjczLDAuMzE3LDIuODM5LDAuOTNDMjguODMsMjEuNTg4LDI5LDIyLjIyMiwyOSwyMy41NzN2NS4zMDNoLTIuNTc0di01LjE5NWMwLTEuMDM4LTAuMzM1LTEuNDI0LTEuMjUyLTEuNDI0IGMtMC4zNTEsMC0wLjY2OSwwLjAzNS0xLjE4NiwwLjE5NXY2LjQyNWgtMi41N1YyMC42OTN6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiPjwvcGF0aD48cGF0aCBmaWxsPSIjMDA0ZDQwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zMC4xNzcsMzAuMDA2YzAuOTE5LDAuNDg2LDEuODM5LDAuNzEsMi44MTIsMC43MSBjMS43MjEsMCwyLjQ1NC0wLjQ3MywyLjQ1NC0yLjE3NnYtMC4wNTJjLTAuNTEsMC4yNTgtMS4wMjUsMC4zNjYtMS43MDQsMC4zNjZjLTIuMzAyLDAtMy43MzktMS41NDctMy43MzktMy45OTcgYzAtMy4wNDMsMi4xNDEtNC43NjIsNS45NzQtNC43NjJjMS4xMjYsMCwyLjE2NywwLjEyMSwzLjQyNywwLjM4M2wtMC44OTksMS45M2MtMC42OTktMC4xMzgtMC4wNTctMC4wMjEtMC41ODQtMC4wNzJ2MC4yNzkgbDAuMDM0LDEuMTNsMC4wMTcsMS40NjFjMC4wMTcsMC4zNjYsMC4wMTcsMC43MywwLjAzNCwxLjA5NnYwLjczYzAsMi4yOTUtMC4xOSwzLjEzMS0wLjc1MSw0LjAyIGMtMC44MTgsMS4zMDItMi4yMzQsMS45NDctNC4yNDYsMS45NDdjLTEuMDI0LDAtMS45MS0wLjE1NS0yLjgyOS0wLjUyMVYzMC4wMDZMMzAuMTc3LDMwLjAwNnogTTM1LjM5MiwyMi4yNTFoLTAuMDg1aC0wLjE5IGMtMC41MS0wLjAxNy0xLjEwOCwwLjEyMS0xLjUxOCwwLjM4M2MtMC42MjgsMC4zNjUtMC45NTMsMS4wMjctMC45NTMsMS45NjRjMCwxLjMzNywwLjY0OSwyLjEwMiwxLjgwOCwyLjEwMiBjMC4zNTgsMCwwLjY0OS0wLjA2OSwwLjk4Ny0wLjE3MnYtMC4xOTN2LTAuNzNjMC0wLjMxNC0wLjAxNy0wLjY2Mi0wLjAxNy0xLjAyN2wtMC4wMTctMS4yMzRsLTAuMDE3LTAuODg2VjIyLjI1MXoiIGNsaXAtcnVsZT0iZXZlbm9kZCI+PC9wYXRoPjxwYXRoIGZpbGw9IiMwMDRkNDAiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTQzLjU2NiwyMC4wNDZjMi43NTMsMCw0LjQzNCwxLjY2LDQuNDM0LDQuMzQ4IGMwLDIuNzU2LTEuNzUyLDQuNDgzLTQuNTQ0LDQuNDgzYy0yLjc1NiwwLTQuNDU2LTEuNjU5LTQuNDU2LTQuMzNDMzkuMDA1LDIxLjc3NCw0MC43NTcsMjAuMDQ2LDQzLjU2NiwyMC4wNDZ6IE00My41MDksMjYuNzUyIGMxLjA1NywwLDEuNjgxLTAuODM4LDEuNjgxLTIuMjk0YzAtMS40MzktMC42MDctMi4yOTQtMS42NjMtMi4yOTRjLTEuMDkzLDAtMS43MTgsMC44MzgtMS43MTgsMi4yOTQgQzQxLjgxLDI1LjkxNCw0Mi40MzgsMjYuNzUyLDQzLjUwOSwyNi43NTJMNDMuNTA5LDI2Ljc1MnoiIGNsaXAtcnVsZT0iZXZlbm9kZCI+PC9wYXRoPgo8L3N2Zz4="/>
                        </i>
                        <p>django</p>
                    </li>
                    <li
                        className="software-skill-inline"
                        name="C++"
                    >
                        <i className="fab c++">
                            <img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNTAiIGhlaWdodD0iNTAiCnZpZXdCb3g9IjAgMCA1MCA1MCI+CjxwYXRoIGQ9Ik0gNDMuOTEwMTU2IDEyLjAwMzkwNiBMIDI3LjA3MDMxMyAyLjUzOTA2MyBDIDI1Ljc5Mjk2OSAxLjgyNDIxOSAyNC4yMDcwMzEgMS44MjQyMTkgMjIuOTI5Njg4IDIuNTM5MDYzIEwgNi4wODk4NDQgMTIuMDAzOTA2IEMgNC44MDA3ODEgMTIuNzI2NTYzIDQgMTQuMDgyMDMxIDQgMTUuNTM1MTU2IEwgNCAzNC40NjQ4NDQgQyA0IDM1LjkxNzk2OSA0LjgwMDc4MSAzNy4yNzM0MzggNi4wODk4NDQgMzcuOTk2MDk0IEwgMjIuOTI5Njg4IDQ3LjQ2MDkzOCBDIDIzLjU3MDMxMyA0Ny44MjAzMTMgMjQuMjg1MTU2IDQ4IDI1IDQ4IEMgMjUuNzE0ODQ0IDQ4IDI2LjQyOTY4OCA0Ny44MjAzMTMgMjcuMDcwMzEzIDQ3LjQ2MDkzOCBMIDQzLjkxMDE1NiAzNy45OTYwOTQgQyA0NS4xOTkyMTkgMzcuMjczNDM4IDQ2IDM1LjkxNzk2OSA0NiAzNC40NjQ4NDQgTCA0NiAxNS41MzUxNTYgQyA0NiAxNC4wODIwMzEgNDUuMTk5MjE5IDEyLjcyNjU2MyA0My45MTAxNTYgMTIuMDAzOTA2IFogTSAyNSAzNyBDIDE4LjM4MjgxMyAzNyAxMyAzMS42MTcxODggMTMgMjUgQyAxMyAxOC4zODI4MTMgMTguMzgyODEzIDEzIDI1IDEzIEMgMjguNzgxMjUgMTMgMzIuMjczNDM4IDE0Ljc1MzkwNiAzNC41NDI5NjkgMTcuNzQyMTg4IEwgMzAuMTYwMTU2IDIwLjI3NzM0NCBDIDI4Ljg0Mzc1IDE4LjgzNTkzOCAyNi45NzI2NTYgMTggMjUgMTggQyAyMS4xNDA2MjUgMTggMTggMjEuMTQwNjI1IDE4IDI1IEMgMTggMjguODU5Mzc1IDIxLjE0MDYyNSAzMiAyNSAzMiBDIDI2Ljk3MjY1NiAzMiAyOC44NDM3NSAzMS4xNjQwNjMgMzAuMTYwMTU2IDI5LjcyMjY1NiBMIDM0LjU0Mjk2OSAzMi4yNTc4MTMgQyAzMi4yNzM0MzggMzUuMjQ2MDk0IDI4Ljc4MTI1IDM3IDI1IDM3IFogTSAzNyAyNiBMIDM1IDI2IEwgMzUgMjggTCAzMyAyOCBMIDMzIDI2IEwgMzEgMjYgTCAzMSAyNCBMIDMzIDI0IEwgMzMgMjIgTCAzNSAyMiBMIDM1IDI0IEwgMzcgMjQgWiBNIDQ0IDI2IEwgNDIgMjYgTCA0MiAyOCBMIDQwIDI4IEwgNDAgMjYgTCAzOCAyNiBMIDM4IDI0IEwgNDAgMjQgTCA0MCAyMiBMIDQyIDIyIEwgNDIgMjQgTCA0NCAyNCBaIj48L3BhdGg+Cjwvc3ZnPg=="/>
                        </i>
                        <p>C/C++</p>
                    </li>


                </ul>
            </div>
        </div>
    );
}
