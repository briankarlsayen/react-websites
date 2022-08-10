import { useState } from 'react'
import "../styles/onboarding.css"

function Onboarding() {
  const [userInfo, setUserInfo] = useState(
    {
      step: 1,
      fullName: '',
      displayName: '',
      workSpaceName: '',
      workSpaceURL: '',
      workSpaceType: 'solo',
    }
  )

  const updateField = e => {
    console.log(e)
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="onboarding">
      <div className='spacing'></div>
      <div className="onboarding-container">
        <StepContainer userInfo={userInfo} setUserInfo={setUserInfo} updateField={updateField} />
        <div>
          { userInfo.step > 1 ? <button onClick={()=>setUserInfo({...userInfo, step: userInfo.step - 1})}>Previous</button> : null }
          { userInfo.step < 4 ? <button onClick={()=>setUserInfo({...userInfo, step: userInfo.step + 1})}>Next</button> : null }
        </div>
      </div>
    </div>
  )
}

function StepContainer({ userInfo, setUserInfo, updateField}) {
  switch(userInfo.step) {
    case 1: 
      return <FirstStep userInfo={userInfo} setUserInfo={setUserInfo} updateField={updateField} />
    case 2:
      return <SecondStep userInfo={userInfo} setUserInfo={setUserInfo} updateField={updateField} />
    case 3:
      return <FinalStep userInfo={userInfo} setUserInfo={setUserInfo} updateField={updateField} />
    case 4: 
      return (
        <div>
          <h1>Congratulations</h1>
          <p>{userInfo.fullName}</p>
          <p>{userInfo.displayName}</p>
          <p>{userInfo.workSpaceName}</p>
          <p>{userInfo.workSpaceURL}</p>
          <p>{userInfo.workSpaceType}</p>
        </div>
      )
    default:
      return (<div></div>)
  }
}

const FirstStep = ({userInfo, setUserInfo, updateField}) => {
  return(
    <>
      <h1>Step {userInfo.step}</h1>
      <form className="form-container">
        <div className="input-container">
          <label htmlFor="fullName">Full Name</label>
          <input type="text" name="fullName" id="fullName" placeholder="Steve Jobs" className="input-field"  value={userInfo.fullName} onChange={updateField} required />
        </div>
        <div className="input-container">
          <label htmlFor="displayName">Display Name</label>
          <input type="text" name="displayName" id="displayName" placeholder="Steve Jobs" className="input-field"  value={userInfo.displayName} onChange={updateField} required />
        </div>
      </form>
    </>
  )
}

const SecondStep = ({userInfo, setUserInfo, updateField}) => {
  return(
    <>
      <h1>Step {userInfo.step}</h1>
      <form className="form-container">
        <div className="input-container">
          <label htmlFor="workSpaceName">Workspace Name</label>
          <input type="text" name="workSpaceName" id="workSpaceName" placeholder="Steve Jobs" className="input-field"  value={userInfo.workSpaceName} onChange={updateField} required />
        </div>
        <div className="input-container">
          <label htmlFor="workSpaceURL">Workspace URL</label>
          <input type="text" name="workSpaceURL" id="workSpaceURL" placeholder="Steve Jobs" className="input-field"  value={userInfo.workSpaceURL} onChange={updateField} required />
        </div>
      </form>
    </>
  )
}

const FinalStep = ({userInfo, setUserInfo, updateField}) => {
  return(
    <>
      <h1>Step {userInfo.step}</h1>
      <form >
        <div>
          <label htmlFor="workSpaceType">
            <input type="radio" name="workSpaceType" id="workSpaceType"
            value="solo" onChange={updateField} checked={userInfo.workSpaceType === "solo"} />
            Solo
          </label>
        </div>
        <div>
          <label htmlFor="workSpaceType">
            <input type="radio" name="workSpaceType" id="workSpaceType"
            value="team" onChange={updateField} checked={userInfo.workSpaceType === "team"}/>
            Team
          </label>
        </div>
      </form>
    </>
  )
}

export default Onboarding