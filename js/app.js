// voting logic
function vote(candidate){
    if(localStorage.getItem("voted")){
        alert("You already voted!");
        return;
    }

    let votesA = Number(localStorage.getItem("votesA")) || 0;
    let votesB = Number(localStorage.getItem("votesB")) || 0;

    if(candidate === "A"){
        votesA++;
        localStorage.setItem("votesA", votesA);
    } else {
        votesB++;
        localStorage.setItem("votesB", votesB);
    }

    localStorage.setItem("voted", true);
    alert("Vote submitted!");
    window.location.href = "result.html";
}

// show results
function showResults(){
    let a = localStorage.getItem("votesA") || 0;
    let b = localStorage.getItem("votesB") || 0;

    document.getElementById("results").innerHTML =
        `<p><b>Candidate A:</b> ${a}</p>
         <p><b>Candidate B:</b> ${b}</p>`;
}
