import React, { Component } from "react";

class ProblemFrame extends Component {
  render() {
    return (
      <div className="problemFrameMain">
        <div id="container">
          <form>
            <label>Programming Problem:<br/></label>
            <input className="problemInput" placeholder="Problem goes here">
            </input><br/>
            <label>Student Solution:<br/></label>
            <textarea className="textarea" placeholder="Solution goes here" rows="10">
            </textarea><br/>
            <button type="submit">Hint</button>
            <button type="submit">Submit</button>
           </form>
         </div>
        </div>
    );
  }
}

export default ProblemFrame;