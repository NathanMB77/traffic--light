import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";


function lightUpGreen(){
	document.getElementById('greenlight').style.setProperty("background-color", "lightgreen", "important");
	document.getElementById('redlight').style.setProperty("background-color", "darkred", "important");
	document.getElementById('yellowlight').style.setProperty("background-color", "darkgoldenrod", "important");
	ReactDOM.render(<Home />, document.querySelector("#app"));
}

function lightUpYellow(){
	document.getElementById('greenlight').style.setProperty("background-color", "darkgreen", "important");
	document.getElementById('redlight').style.setProperty("background-color", "darkred", "important");
	document.getElementById('yellowlight').style.setProperty("background-color", "yellow", "important");
	ReactDOM.render(<Home />, document.querySelector("#app"));
}

function lightUpRed(){
	document.getElementById('greenlight').style.setProperty("background-color", "darkgreen", "important");
	document.getElementById('redlight').style.setProperty("background-color", "red", "important");
	document.getElementById('yellowlight').style.setProperty("background-color", "darkgoldenrod", "important");
	ReactDOM.render(<Home />, document.querySelector("#app"));
}



//create your first component
function Home() {
	return (
		<>
			<div className='container'>
				<div className='row justify-content-center'>
					<div className='col-2 bg-dark py-3 mt-5'>
						<div className='row justify-content-center'>
							<div className='col d-flex flex-row justify-content-center'>
								<div onClick={lightUpRed} id='redlight' className='light rounded-circle bg-light'></div>
							</div>
						</div>
						<div className='row'>
							<div className='col d-flex flex-row justify-content-center'>
								<div onClick={lightUpYellow} id='yellowlight' className='light rounded-circle bg-light'></div>
							</div>
						</div>
						<div className='row'>
							<div className='col d-flex flex-row justify-content-center'>
								<div onClick={lightUpGreen} id='greenlight' className='light rounded-circle bg-light'><font color='green'></font></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Home;
