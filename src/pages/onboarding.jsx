import { useState } from 'react'
import "../styles/onboarding.css"

function Onboarding() {
  const [userInfo, setUserInfo] = useState(
    {
      step: 2,
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
    <div className='py-64'>
      <ButtonCont userInfo={userInfo} setUserInfo={setUserInfo} />
      {/* <div className="text-center mt-24">
        <div className="flex items-center justify-center">
          <svg fill="none" viewBox="0 0 24 24" className="w-12 h-12 text-blue-500" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
          </svg>
        </div>
        <h2 className="text-4xl tracking-tight">
          Sign in into your account
        </h2>
        <span className="text-sm">or <a href="#" className="text-blue-500"> 
          register a new account
        </a>
        </span>
      </div> */}
      {/* <SampleForm /> */}
      {/* <div className='text-center py-4'>
        <h1 className='text-2xl font-semibold'>Let's setup a home for all your work</h1>
        <p>You can always create another workspace later.</p>
      </div> */}
      <StepContainer userInfo={userInfo} setUserInfo={setUserInfo} updateField={updateField} />
    </div>
  )
}

const ButtonCont = ({setUserInfo, userInfo}) => {
  return(
    <div className='flex justify-center'>
      <button className='appearance-none block bg-blue-600 text-gray-100 font-bold border border-gray-200 
          rounded-lg py-3 px-3 leading-tight hover:bg-blue-500 focus:outline-none focus:bg-white focus:border-gray-500' onClick={()=>setUserInfo({...userInfo, step: 1})}>1</button>
      <button className='appearance-none block bg-blue-600 text-gray-100 font-bold border border-gray-200 
          rounded-lg py-3 px-3 leading-tight hover:bg-blue-500 focus:outline-none focus:bg-white focus:border-gray-500' onClick={()=>setUserInfo({...userInfo, step: 2})}>2</button>
      <button className='appearance-none block bg-blue-600 text-gray-100 font-bold border border-gray-200 
          rounded-lg py-3 px-3 leading-tight hover:bg-blue-500 focus:outline-none focus:bg-white focus:border-gray-500' onClick={()=>setUserInfo({...userInfo, step: 3})}>3</button>
      <button className='appearance-none block bg-blue-600 text-gray-100 font-bold border border-gray-200 
          rounded-lg py-3 px-3 leading-tight hover:bg-blue-500 focus:outline-none focus:bg-white focus:border-gray-500' onClick={()=>setUserInfo({...userInfo, step: 4})}>4</button>
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
        <Congrats userInfo={userInfo} />
        // <div>
        //   <h1>Congratulations</h1>
        //   <p>{userInfo.fullName}</p>
        //   <p>{userInfo.displayName}</p>
        //   <p>{userInfo.workSpaceName}</p>
        //   <p>{userInfo.workSpaceURL}</p>
        //   <p>{userInfo.workSpaceType}</p>
        // </div>
      )
    default:
      return (<div></div>)
  }
}

const FirstStep = ({userInfo, setUserInfo, updateField}) => {   
  return(
    <div className="flex flex-col items-center justify-center my-2 mx-4 md:mx-0">
      <div className='text-center py-4'>
        <h1 className='text-2xl font-semibold'>Welcome! First things first...</h1>
        <p>You can always change them later.</p>
      </div>
      <div className="w-full max-w-xl bg-white rounded-lg">
        <form className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-full px-3 mb-6">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="fullName">Full Name</label>
            <input className="appearance-none block w-full bg-white text-gray-900 font-medium border
              border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none" name="fullName" type="text"
              id="fullName" placeholder="Steve Jobs" value={userInfo.fullName} onChange={updateField} required />
          </div>
          <div className="w-full md:w-full px-3 mb-6">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="displayName">Display Name</label>
            <input className="appearance-none block w-full bg-white text-gray-900 font-medium border
              border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none" name="displayName" type="text"
              id="displayName" placeholder="Steve Jobs" value={userInfo.displayName} onChange={updateField} required />
          </div>
        </form>
        <div className="w-full md:w-full mb-6">
          <button className="appearance-none block w-full bg-blue-600 text-gray-100 font-bold border border-gray-200 
          rounded-lg py-3 px-3 leading-tight hover:bg-blue-500 focus:outline-none focus:bg-white focus:border-gray-500">Create Workspace</button>
        </div>
      </div>
    </div>
  )
}

const SecondStep = ({userInfo, setUserInfo, updateField}) => {
  return(
    <div className="flex flex-col items-center justify-center my-2 mx-4 md:mx-0">
      <div className='text-center py-4'>
        <h1 className='text-2xl font-semibold'>Let's setup a home for all your work</h1>
        <p>You can always create another workspace later.</p>
      </div>
      <div className="w-full max-w-xl bg-white rounded-lg">
        <form className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-full px-3 mb-6">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="workSpaceName">Workspace Name</label>
            <input className="appearance-none block w-full bg-white text-gray-900 font-medium border
              border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none" name="workSpaceName" type="text"
              id="workSpaceName" placeholder="Steve Jobs" value={userInfo.workSpaceName} onChange={updateField} required />
          </div>
          <div className="w-full md:w-full px-3 mb-6">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="workSpaceURL">Workspace URL</label>
            <input className="appearance-none block w-full bg-white text-gray-900 font-medium border
              border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none" name="workSpaceURL" type="text"
              id="workSpaceURL" placeholder="Steve Jobs" value={userInfo.workSpaceURL} onChange={updateField} required />
          </div>
        </form>
          <div className="w-full md:w-full mb-6">
            <button className="appearance-none block w-full bg-blue-600 text-gray-100 font-bold border border-gray-200 
            rounded-lg py-3 px-3 leading-tight hover:bg-blue-500 focus:outline-none focus:bg-white focus:border-gray-500">Create Workspace</button>
          </div>
      </div>
    </div>
  )
}

const FinalStep = ({userInfo, setUserInfo, updateField}) => {
  return(
    <div className="flex flex-col items-center justify-center my-2 mx-4 md:mx-0">
      <div className='text-center py-4'>
        <h1 className='text-2xl font-semibold'>How are you planning to use Note-app?</h1>
        <p>We'll streamline your setup experience accordingly.</p>
      </div>
      <div className="w-full max-w-xl bg-white rounded-lg">
        <form className='flex justify-evenly p-6'>
          <div className='p-6 border'>
            <label htmlFor="workSpaceType">
              <input type="radio" name="workSpaceType" id="workSpaceType"
              value="solo" onChange={updateField} checked={userInfo.workSpaceType === "solo"} />
              Solo
            </label>
          </div>
          <div className='p-6 border'>
            <label htmlFor="workSpaceType">
              <input type="radio" name="workSpaceType" id="workSpaceType"
              value="team" onChange={updateField} checked={userInfo.workSpaceType === "team"}/>
              Team
            </label>
          </div>
        </form>
        <div className="w-full md:w-full mb-6">
          <button className="appearance-none block w-full bg-blue-600 text-gray-100 font-bold border border-gray-200 
          rounded-lg py-3 px-3 leading-tight hover:bg-blue-500 focus:outline-none focus:bg-white focus:border-gray-500">Create Workspace</button>
        </div>
      </div>
    </div>
  )
}

const Congrats = ({userInfo}) => {
  return(
    <div className="flex justify-center my-2 mx-4 md:mx-0">
      <div className="w-full max-w-xl bg-white rounded-lg py-24 px-10 text-center">
        <h1 className='text-4xl pb-4'>Congratulations, {userInfo.fullName}</h1>
        <p className='pb-6'>You have completed onboarding, you can start using app.</p>
        {/* <p>{userInfo.fullName}</p>
        <p>{userInfo.displayName}</p>
        <p>{userInfo.workSpaceName}</p>
        <p>{userInfo.workSpaceURL}</p>
        <p>{userInfo.workSpaceType}</p> */}
        <div className="w-full md:w-full mb-6">
          <button className="appearance-none block w-full bg-blue-600 text-gray-100 font-bold border border-gray-200 
          rounded-lg py-3 px-3 leading-tight hover:bg-blue-500 focus:outline-none focus:bg-white focus:border-gray-500">Create Workspace</button>
        </div>
      </div>
    </div>
  )
}


export default Onboarding