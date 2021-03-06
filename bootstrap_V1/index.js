

var LINKS = {
  lwv: "https://www.lwv.org/",
};

var STATE_OFFICIAL_LINKS = {
  Alabama: "https://www.alabamavotes.gov/olvr/default.aspx",
  Alaska: "https://voterregistration.alaska.gov",
  Arizona: "https://servicearizona.com/VoterRegistration/selectLanguage",
  Arkansas: "https://www.sos.arkansas.gov/elections",
  California: "http://registertovote.ca.gov",
  Colorado: "https://www.sos.state.co.us/voter/pages/pub/olvr/verifyNewVoter.xhtml",
  Connecticut: "https://voterregistration.ct.gov/OLVR/",
  DC: "https://www.vote4dc.com/ApplyInstructions/Register",
  Delaware: "https://ivote.de.gov/voterlogin.aspx",
  Florida: "https://registertovoteflorida.gov/home",
  Georgia: "https://registertovote.sos.ga.gov/GAOLVR/#no-back-button",
  Hawaii: "https://olvr.hawaii.gov/register.aspx",
  Idaho: "https://apps.idahovotes.gov/OnlineVoterRegistration",
  Illinois: "https://ova.elections.il.gov",
  Indiana: "https://indianavoters.in.gov/",
  Iowa: "https://mymvd.iowadot.gov/Account/Login?ReturnUrl=%2fVoterRegistration",
  Kansas: "https://www.kdor.ks.gov/Apps/VoterReg/Default.aspx",
  Kentucky: "https://vrsws.sos.ky.gov/ovrweb/",
  Louisiana: "http://www.sos.la.gov/ElectionsAndVoting/Pages/OnlineVoterRegistration.aspx",
  Maine: "",
  Maryland: "https://voterservices.elections.maryland.gov/OnlineVoterRegistration/VoterType",
  Massachusetts: "https://www.sec.state.ma.us/OVR/Pages/MinRequirements.aspx?RMVId=True",
  Michigan: "https://mvic.sos.state.mi.us/RegisterVoter",
  Minnesota: "https://mnvotes.sos.state.mn.us/VoterRegistration/VoterRegistrationStep1.aspx",
  Mississippi: "",
  Missouri: "http://www.sos.mo.gov/elections/goVoteMissouri/register.aspx",
  Montana: "",
  Nebraska: "https://www.nebraska.gov/apps-sos-voter-registration/eligibility/citizen",
  Nevada: "http://www.registertovotenv.gov",
  New_Hampshire: "",
  New_Jersey: "",
  New_Mexico: "https://portal.sos.state.nm.us/OVR/(S(od4445h5uj2f5tyucvvhszdf))/WebPages/InstructionsStep1.aspx",
  New_York: "http://dmv.ny.gov/org/more-info/electronic-voter-registration-application",
  North_Carolina: "https://www.ncdot.gov/dmv/offices-services/online/Pages/voter-registration-application.aspx",
  North_Dakota: "",
  Ohio: "https://olvr.sos.state.oh.us/ovru/Modify.aspx",
  Oklahoma: "",
  Oregon: "https://secure.sos.state.or.us/orestar/vr/register.do?lang=eng&amp;source=RTV",
  Pennsylvania: "https://www.pavoterservices.state.pa.us/Pages/VoterRegistrationApplication.aspx",
  Rhode_Island: "https://vote.sos.ri.gov/Home/RegistertoVote?ActiveFlag=1",
  South_Carolina: "https://info.scvotes.sc.gov/eng/ovr/start.aspx",
  South_Dakota: "",
  Tennessee: "https://ovr.govote.tn.gov/",
  Texas: "",
  Utah: "https://secure.utah.gov/voterreg/login.html?selection=REGISTER",
  Vermont: "https://olvr.sec.state.vt.us/Registration/",
  Virginia: "https://vote.elections.virginia.gov/VoterInformation",
  Washington: "http://www.sos.wa.gov/elections/myvote/",
  Washington_DC: "https://www.vote4dc.com/ApplyInstructions/Register",
  West_Virginia: "https://ovr.sos.wv.gov/Register#Qualifications",
  Wisconsin: "https://myvote.wi.gov/en-us/RegisterToVote",
  Wyoming: "",
};


// document.getElementById("lwv-link").href = LINKS.lwv;


// Setting US map links

function stateSelectOption(state) {
  let stateID = state;
  let stateName = stateID.replace("_", " ");
  return "<option value='" + stateID + "'>" + stateName + "</option>";
}

docStateSelectString = "<option class='text-black' value='US_all'><p style='font-weight=600'>--Select State--</p></option>";
for(i in STATE_OFFICIAL_LINKS){
  docStateSelectString += stateSelectOption(i);
}
docStateSelect = document.getElementById("state-select");
docStateSelect.innerHTML = docStateSelectString;
docStateSelect.addEventListener('change', (event) => {
  let result = docStateSelect.value;
  setStateData(result);
});

async function setStateData(state) {
  let stateCoverData = document.getElementById("stateCoverData");
  stateCoverData.innerHTML = await fetchStateHTML(state);
}

async function fetchStateHTML(state) {
  try {
    let response = await fetch("state_info/" + state + ".html");
    if(!response.ok){
      throw Error(response.statusText);
    }
    let data = await response.text();
    return data;
  } catch(err) {
    return "<strong>Failed to retrieve State information</strong>";
  }
}

setStateData("US_all");

