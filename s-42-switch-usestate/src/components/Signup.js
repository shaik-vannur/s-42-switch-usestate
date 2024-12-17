import React, { useState } from "react";
import { useRef } from "react";
function Signup() {
  let firstInputRef = useRef();
  let lastInputRef = useRef();
  let maleRef = useRef();
  let femaleRef = useRef();
  let singleRef = useRef();
  let MarriedRef = useRef();

  let [ballCount,setBallCount]=useState(0);
  let [runs,setRuns]=useState(0);
  let [single,setSingles]=useState(0);
  let [doubles,setDoubles]=useState(0);
  let [triples,settriples]=useState(0);

  let [fours,setFours]=useState(0);
  let [sixs,setSixs]=useState(0);
  let [wides,setWides]=useState(0);
  let [noBalls,setNoBalls]=useState(0);






  // let genderStatus="";
  let status = "";
  let languagesKnown = {
    telugu: false,
    english: false,
    hindi: false,
  };

  function genderAndMartialStatus() {
    if (maleRef.current.checked == true) {
      status = "Mr";
      if (singleRef.current.checked == false) {
        status = "mrs";
      }
    } else {
      status = "miss";
      if (MarriedRef.current.checked == true) {
        status = "mrs";
      }
    }
  }

  return (
    <>
      <div className="signup-mainDiv">
        <form className="Signup-form">
          <div className="signup-div">
            <label className="signup-label">First Name </label>
            <input
              className="signup-input"
              placeholder="First Name"
              ref={firstInputRef}
            />
          </div>
          <div className="signup-div">
            <label className="signup-label">Last Name </label>
            <input
              className="signup-input"
              placeholder="Last Name"
              ref={lastInputRef}
            />
          </div>
          <div className="signup-div">
            <label className="signup-label">Date Of Birth </label>
            <input className="signup-input" placeholder="DD-MM-YYYY" />
          </div>
          <div className="signup-div">
            <label className="signup-label">Gender </label>
            <input
              className="gender-radio"
              type="radio"
              name="gender"
              ref={maleRef}
            />
            <label>Male</label>
            <input
              className="gender-radio"
              type="radio"
              name="gender"
              ref={femaleRef}
            />
            <label>Female</label>
          </div>
          <div className="signup-div">
            <label className="signup-label">Martial Status </label>
            <input className="ms" type="radio" name="ms" ref={singleRef} />
            <label>Single</label>
            <input className="ms" type="radio" name="ms" ref={MarriedRef} />
            <label>Married</label>
          </div>
          <div>
            <lable>Languages known</lable>
            <input
              type="checkbox"
              onChange={(eve) => {
                if (eve.target.checked == true) {
                  languagesKnown.telugu = true;
                }
              }}
            ></input>
            <lable>Telugu</lable>
            <input
              type="checkbox"
              onChange={(eve) => {
                if (eve.target.checked == true) {
                  languagesKnown.hindi = true;
                }
              }}
            ></input>
            <lable>Hindi</lable>
            <input
              type="checkbox"
              onChange={(eve) => {
                if (eve.target.checked == true) {
                  languagesKnown.english = true;
                }
              }}
            ></input>
            <lable>English</lable>
          </div>
          <div className="signup-div">
            <label className="signup-label">Email </label>
            <input className="signup-input" placeholder="Email" />
          </div>
          <div className="signup-div">
            <label className="signup-label">password </label>
            <input
              className="signup-input"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="signup-div">
            <label className="signup-label">State </label>
            <select onChange={(e)=>{
                let selectedState=e.target.value;
                switch(selectedState){
                  case "Andhra Pradesh":
                      console.log("amaravati")
                      break;
                      case "kerala":
                      console.log("amaravati")
                      break;
                      case "Tamilnadu":
                      console.log("amaravati")
                      break;
                      case "Karnataka":
                      console.log("amaravati")
                      break;
                      case "Goa":
                      console.log("amaravati")

                      break;
                      case "Gujarat":
                      console.log("amaravati")
                      break;
                      default:
                      console.log("")
                      break;
                }
            }}>
              <option>select State</option>
              <option>Andhra Pradesh</option>
              <option>kerala</option>
              <option>Tamilnadu</option>
              <option>Karnataka</option>
              <option>Goa</option>
              <option>Gujarat</option>
            </select>
          </div>
          <div className="signup-div">
            <label className="signup-label">Profile Pic </label>
            <input className="signup-input" type="file" />
          </div>
          <div className="signup-div">
            <label className="signup-label">address</label>
            <textarea></textarea>
          </div>
          <div className="signup-div">
            <button
              className="btn"
              type="button"
              onClick={() => {
                genderAndMartialStatus();

                console.log("status of ms:  " + status);
                alert(
                  `${status} ${firstInputRef.current.value} ${
                    lastInputRef.current.value
                  } known ${languagesKnown.telugu == true ? "Telugu" : ""} ${
                    languagesKnown.hindi == true ? "Hindi" : ""
                  } ${languagesKnown.english == true ? "English" : ""}`
                );
              }}
            >
              Signup
            </button>
          </div>
        </form>
        

      </div>
      

      <div className="use-state">

<h1>Total runs: { runs}</h1>
<h1>Overs:{parseInt(ballCount/6)}.{ballCount%6}</h1>
<h1>Single:{single}</h1>
<h1>Doubles:{doubles}</h1>
<h1>Triples:{triples}</h1>
<h1>Fours:{fours}</h1>
<h1>Doubles:{sixs}</h1>
<h1>Doubles:{wides}</h1>
<h1>Doubles:{noBalls}</h1>


<button type="button" onClick={()=>{
    setBallCount(ballCount+1)
}}>Dot</button>
<button type="button" onClick={()=>{
  setBallCount(ballCount+1)
  setRuns(runs+1)
  setSingles(single+1)
}} >Single</button>
<button type="button" onClick={()=>{
    setBallCount(ballCount+1)
    setRuns(runs+2)
    setDoubles(doubles+1)
}}>Double</button>
<button type="button" onClick={()=>{
    setBallCount(ballCount+1)
    setRuns(runs+3)
    settriples(triples+1)
}}>Triple</button>
<button type="button" onClick={()=>{
    setBallCount(ballCount+1)
    setRuns(runs+4)
    setFours(fours+1)
}}>Four</button>
<button type="button" onClick={()=>{
    setBallCount(ballCount+1)
    setRuns(runs+6)
    setSixs(sixs+1)
}}>Six</button>
<button type="button" onClick={()=>{
    setRuns(runs+1)
    setWides(wides+1)
}}>Wide</button>
<button type="button" onClick={()=>{
    setRuns(runs+1)
    setNoBalls(noBalls+1)

}}>No Ball</button>
</div>
    </>
  );
}

export default Signup;
