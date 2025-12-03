function vote(candidate){
    // check if user already voted
    if(localStorage.getItem("voted")){
        alert("You already voted!");
        return;
    }

    let votesA = localStorage.getItem("votesA") || 0;
    let votesB = localStorage.getItem("votesB") || 0;

    if(candidate === "A"){
        votesA++;
        localStorage.setItem("votesA", votesA);
    } else {
        votesB++;
        localStorage.setItem("votesB", votesB);
    }

    // mark user voted
    localStorage.setItem("voted", true);

    alert("Vote submitted!");
    window.location.href = "result.html";
}
function showResults(){
    let a = localStorage.getItem("votesA") || 0;
    let b = localStorage.getItem("votesB") || 0;

    document.getElementById("results").innerHTML =
        `<p>Candidate A: ${a} votes</p>
         <p>Candidate B: ${b} votes</p>`;
}

