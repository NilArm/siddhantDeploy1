import React from 'react'

function RenderPopUp(props) {
    
  const profile = require('../../assets/profile.png');
  return (
    <div className="TeamDiv">
          <div className="innerTeamDiv">
            <div className="closeTeamModal" onClick={props.handlePop}>
              <div className="closeBtn">
                X
              </div>
            </div>
            <div className="teamCard">
              <div className="teamImage">
                <img alt="profilePhoto" src={profile}/>
              </div>
              <div className="teamDescription">
                <div className="teamName">
                  Niranjan Armal
                </div>
                <div className="teamDeveloper">
                  Owner
                </div>
              </div>
            </div>
            <div className="teamCard">
              <div className="teamImage">
                <img alt="profilePhoto" src={profile}/>
              </div>
              <div className="teamDescription">
                <div className="teamName">
                  Umesh Hade
                </div>
                <div className="teamDeveloper">
                  Partner
                </div>
              </div>
            </div>
            <div className="teamCard">
              <div className="teamImage">
                <img alt="profilePhoto" src={profile}/>
              </div>
              <div className="teamDescription">
                <div className="teamName">
                  Yogesh Hade
                </div>
                <div className="teamDeveloper">
                  Wholesale Distributor and Manager
                </div>
              </div>
            </div>
            <div className="teamCard">
              <div className="teamImage">
                <img alt="profilePhoto" src={profile}/>
              </div>
              <div className="teamDescription">
                <div className="teamName">
                  Samadhan Kupekar
                </div>
                <div className="teamDeveloper">
                  CSM and Salesperson
                </div>
              </div>
            </div>
            <div className="teamCard">
              <div className="teamImage">
                <img alt="profilePhoto" src={profile}/>
              </div>
              <div className="teamDescription">
                <div className="teamName">
                  Swapnil
                </div>
                <div className="teamDeveloper">
                  CSM and Salesperson
                </div>
              </div>
            </div>
            <div className="teamCard">
              <div className="teamImage">
                <img alt="profilePhoto" src={profile}/>
              </div>
              <div className="teamDescription">
                <div className="teamName">
                  Nilesh Armal
                </div>
                <div className="teamDeveloper">
                  Web Developer
                </div>
              </div>
            </div>
          </div>
      </div>
  )
}

export default RenderPopUp