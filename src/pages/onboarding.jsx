import { useState } from 'react'
import "../styles/onboarding.css"

function Onboarding() {
  const [formStep, setFormStep] =useState(1)
  const [userInfo, setUserInfo] = useState(
    {
      step: 1,
      fullName: '',
      displayName: '',
      workSpaceName: '',
      workSpaceURL: '',
      workSpaceType: '',
    }
  )

  const updateField = e => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value
    });
  };

  let formInfo;

  return (
    <div>
      <StepContainer formStep={formStep} setFormStep={setFormStep} userInfo={userInfo} setUserInfo={setUserInfo} updateField={updateField} />
      <div>
        {formStep > 1 ? <button onClick={()=>setFormStep(formStep - 1)}>Previous</button> : null }
        { formStep < 4 ? <button onClick={()=>setFormStep(formStep + 1)}>Next</button> : null }
      </div>
    </div>
  )
}

function StepContainer({formStep, setFormStep, userInfo, setUserInfo, updateField}) {
  switch(formStep) {
    case 1: 
      return <FirstStep userInfo={userInfo} setUserInfo={setUserInfo} updateField={updateField} />
    case 2:
      return <SecondStep userInfo={userInfo} setUserInfo={setUserInfo} updateField={updateField} />
    case 3:
      return <FinalStep userInfo={userInfo} setUserInfo={setUserInfo} />
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

const FinalStep = ({userInfo, setUserInfo}) => {
  return(
    <>
      <div>
        <button onClick={()=>setUserInfo({...userInfo, workSpaceType: "solo"})}>Solo</button>
      </div>
      <div>
        <button onClick={()=>setUserInfo({...userInfo, workSpaceType: "team"})}>Team</button>
      </div>
    </>
  )
}

export default Onboarding